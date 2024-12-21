const typingText = document.querySelector(".typing-text p"),
    inpField = document.querySelector(".wrapper .input-field"),
    tryAgainBtn = document.querySelector(".content button"),
    timeTag = document.querySelector(".time span b"),
    mistakeTag = document.querySelector(".mistake span"),
    wpmTag = document.querySelector(".wpm span"),
    cpmTag = document.querySelector(".cpm span"),
    languageDropdown = document.querySelector(".language-dropdown"),
    levelDropdown = document.querySelector(".level-dropdown");

let timer,
    maxTime = 60,
    timeLeft = maxTime,
    charIndex = mistakes = isTyping = 0;
const levelTimes = {
    0: 60,   // Level 0 - 60 seconds
    1: 90,   // Level 1 - 90 seconds
    2: 120,  // Level 2 - 120 seconds
    3: 150,  // Level 3 - 150 seconds
    4: 180,  // Level 4 - 180 seconds
    5: 220,
    6: 260,
    7: 300,
    8: 340,
    9: 380,
    10: 400
};
function loadParagraph() {
    const selectedLanguage = languageDropdown.value;
    const selectedLevel = parseInt(levelDropdown.value, 10);
    const languageSnippets = snippets[selectedLanguage] || [];
    const languageSnippetLevel = languageSnippets[selectedLevel] || languageSnippets[0];

    if (languageSnippetLevel) {
        const ranIndex = Math.floor(Math.random() * languageSnippetLevel.length);
        typingText.innerHTML = "";
        languageSnippetLevel[ranIndex].split("").forEach(char => {
            let span = `<span>${char}</span>`;
            typingText.innerHTML += span;
        });
        typingText.querySelectorAll("span")[0].classList.add("active");
    } else {
        typingText.innerHTML = "No snippets available for this level.";
    }
    // const ranIndex = Math.floor(Math.random() * languageSnippets.length);
    // typingText.innerHTML = "";
    // languageSnippets[ranIndex].split("").forEach(char => {
    //     let span = `<span>${char}</span>`
    //     typingText.innerHTML += span;
    // });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}
function adjustTypingTextHeight() {
    const level = parseInt(levelDropdown.value, 10);
    const typingTextContainer = document.querySelector(".typing-text");

    if (level <= 2) {
        typingTextContainer.style.maxHeight = "256px"; // Original height for lower levels
    } else {
        typingTextContainer.style.maxHeight = `${(level + 1) * 100}px`; // Increase height dynamically
    }
}

function resetGame() {
    const selectedLevel = parseInt(levelDropdown.value, 10);
    maxTime = levelTimes[selectedLevel] || 60; // Set the timer based on the level
    timeLeft = maxTime;

    loadParagraph();
    clearInterval(timer);
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

// Load initial paragraph based on selected language
languageDropdown.addEventListener("change", resetGame);
levelDropdown.addEventListener("change", resetGame);
loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);