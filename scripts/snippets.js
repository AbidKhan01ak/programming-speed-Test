const snippets = {
    javascript: [
        // Level 0
        ["console.log('Hello, World!');"],
        // Level 1
        ["let x = 10;\nlet y = 20;\nconsole.log(x + y);"],
        // Level 2
        ["function greet(name) {\n  return `Hello, ${name}`;\n}\nconsole.log(greet('Johnathan'));"],
        // Level 3
        ["const numbers = [1, 2, 3, 4, 5];\nnumbers.forEach(num => console.log(num * 2));"],
        // Level 4
        ["class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n}\nconst person = new Person('Johnathan', 25);\nconsole.log(person);"],
        // Level 5
        ["const getAge = (birthYear) => new Date().getFullYear() - birthYear;\nconsole.log(getAge(1998));"],
        // Level 6
        ["const greet = (name = 'Guest') => `Hello, ${name}!`;\nconsole.log(greet('Johnathan'));\nconsole.log(greet());"],
        // Level 7
        ["let str = 'Johnathan';\nstr = str.toUpperCase();\nconsole.log(str);"],
        // Level 8
        ["const asyncExample = async () => {\n  let response = await fetch('https://api.example.com');\n  let data = await response.json();\n  console.log(data);\n};\nasyncExample();"],
        // Level 9
        ["const promiseExample = new Promise((resolve, reject) => {\n  let success = true;\n  success ? resolve('Success!') : reject('Failure!');\n});\npromiseExample.then(console.log).catch(console.error);"],
        // Level 10
        ["function* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = generator();\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);\nconsole.log(gen.next().value);"]
    ],
    python: [
        // Level 0
        ["print('Hello, World!')"],
        // Level 1
        ["x = 10\ny = 20\nprint(x + y)"],
        // Level 2
        ["def greet(name):\n  return f'Hello, {name}'\nprint(greet('Johnathan'))"],
        // Level 3
        ["numbers = [1, 2, 3, 4, 5]\nfor num in numbers:\n  print(num * 2)"],
        // Level 4
        ["class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\nperson = Person('Johnathan', 25)\nprint(person.__dict__)"],
        // Level 5
        ["def get_age(birth_year):\n  return 2024 - birth_year\nprint(get_age(1998))"],
        // Level 6
        ["def greet(name='Guest'):\n  return f'Hello, {name}!'\nprint(greet('Johnathan'))\nprint(greet())"],
        // Level 7
        ["my_string = 'Johnathan'\nmy_string = my_string.upper()\nprint(my_string)"],
        // Level 8
        ["import asyncio\nasync def fetch_data():\n  await asyncio.sleep(1)\n  print('Data fetched!')\n\nasyncio.run(fetch_data())"],
        // Level 9
        ["async def async_greet():\n  await asyncio.sleep(1)\n  return 'Hello!'\n\nresult = asyncio.run(async_greet())\nprint(result)"],
        // Level 10
        ["def generator():\n  yield 1\n  yield 2\n  yield 3\n\ngen = generator()\nprint(next(gen))\nprint(next(gen))\nprint(next(gen))"]
    ],
    java: [
        // Level 0
        ["public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println(\"Hello, World!\");\n  }\n}"],
        // Level 1
        ["public class Sum {\n  public static void main(String[] args) {\n    int x = 10;\n    int y = 20;\n    System.out.println(x + y);\n  }\n}"],
        // Level 2
        ["public class Greet {\n  public static String greet(String name) {\n    return \"Hello, \" + name;\n  }\n  public static void main(String[] args) {\n    System.out.println(greet(\"Johnathan\"));\n  }\n}"],
        // Level 3
        ["import java.util.*;\npublic class DoubleNumbers {\n  public static void main(String[] args) {\n    List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\n    numbers.forEach(num -> System.out.println(num * 2));\n  }\n}"],
        // Level 4
        ["public class Person {\n  private String name;\n  private int age;\n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n  public static void main(String[] args) {\n    Person person = new Person(\"Johnathan\", 25);\n    System.out.println(person);\n  }\n}"],
        // Level 5
        ["public class GetAge {\n  public static int getAge(int birthYear) {\n    return 2024 - birthYear;\n  }\n  public static void main(String[] args) {\n    System.out.println(getAge(1998));\n  }\n}"],
        // Level 6
        ["public class Greet {\n  public static String greet(String name) {\n    return name != null ? \"Hello, \" + name : \"Hello, Guest!\";\n  }\n  public static void main(String[] args) {\n    System.out.println(greet(\"Johnathan\"));\n    System.out.println(greet(null));\n  }\n}"],
        // Level 7
        ["public class StringManipulation {\n  public static void main(String[] args) {\n    String str = \"Johnathan\";\n    System.out.println(str.toUpperCase());\n  }\n}"],
        // Level 8
        ["import java.util.concurrent.*;\npublic class AsyncExample {\n  public static void main(String[] args) throws InterruptedException {\n    ExecutorService executor = Executors.newSingleThreadExecutor();\n    executor.submit(() -> System.out.println(\"Async task completed!\"));\n    executor.shutdown();\n  }\n}"],
        // Level 9
        ["import java.util.concurrent.*;\npublic class FutureExample {\n  public static void main(String[] args) throws InterruptedException, ExecutionException {\n    ExecutorService executor = Executors.newCachedThreadPool();\n    Future<String> future = executor.submit(() -> \"Hello from future!\");\n    System.out.println(future.get());\n    executor.shutdown();\n  }\n}"],
        // Level 10
        ["public class GeneratorExample {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 3; i++) {\n      System.out.println(i);\n    }\n  }\n}"]
    ],
    cpp: [
        // Level 0
        ["#include <iostream>\nusing namespace std;\nint main() {\n  cout << \"Hello, World!\";\n  return 0;\n}"],
        // Level 1
        ["#include <iostream>\nusing namespace std;\nint main() {\n  int x = 10, y = 20;\n  cout << x + y;\n  return 0;\n}"],
        // Level 2
        ["#include <iostream>\nusing namespace std;\nstring greet(string name) {\n  return \"Hello, \" + name;\n}\nint main() {\n  cout << greet(\"Johnathan\");\n  return 0;\n}"],
        // Level 3
        ["#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n  vector<int> numbers = {1, 2, 3, 4, 5};\n  for (int num : numbers) {\n    cout << num * 2 << endl;\n  }\n  return 0;\n}"],
        // Level 4
        ["#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n  vector<int> numbers = {1, 2, 3, 4, 5};\n  for (auto num : numbers) {\n    cout << num * 2 << endl;\n  }\n  return 0;\n}"],
        // Level 5
        ["#include <iostream>\nusing namespace std;\nint get_age(int birth_year) {\n  return 2024 - birth_year;\n}\nint main() {\n  cout << get_age(1998);\n  return 0;\n}"],
        // Level 6
        ["#include <iostream>\nusing namespace std;\nint main() {\n  string name = \"Johnathan\";\n  cout << name + \" is learning C++\";\n  return 0;\n}"],
        // Level 7
        ["#include <iostream>\nusing namespace std;\nint main() {\n  string name = \"Johnathan\";\n  transform(name.begin(), name.end(), name.begin(), ::toupper);\n  cout << name;\n  return 0;\n}"],
        // Level 8
        ["#include <iostream>\n#include <thread>\nusing namespace std;\nvoid greet() {\n  cout << \"Hello from another thread!\";\n}\nint main() {\n  thread t(greet);\n  t.join();\n  return 0;\n}"],
        // Level 9
        ["#include <iostream>\n#include <future>\nusing namespace std;\nint main() {\n  auto fut = async([]() { return 42; });\n  cout << fut.get();\n  return 0;\n}"],
        // Level 10
        ["#include <iostream>\nusing namespace std;\nint main() {\n  for (int i = 1; i <= 3; i++) {\n    cout << i << endl;\n  }\n  return 0;\n}"]
    ],
    html: [
        // Level 0
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Hello World</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n</body>\n</html>"],
        // Level 1
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Sum</title>\n</head>\n<body>\n  <script>\n    document.write(10 + 20);\n  </script>\n</body>\n</html>"],
        // Level 2
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Text</title>\n</head>\n<body>\n  <p>This is a simple HTML paragraph.</p>\n</body>\n</html>"],
        // Level 3
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>List</title>\n</head>\n<body>\n  <ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</body>\n</html>"],
        // Level 4
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Form</title>\n</head>\n<body>\n  <form>\n    <input type='text' placeholder='Enter text'/>\n  </form>\n</body>\n</html>"],
        // Level 5
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Link</title>\n</head>\n<body>\n  <a href='https://www.example.com'>Click here</a>\n</body>\n</html>"],
        // Level 6
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Table</title>\n</head>\n<body>\n  <table border='1'>\n    <tr>\n      <th>Name</th>\n      <th>Age</th>\n    </tr>\n    <tr>\n      <td>Johnathan</td>\n      <td>25</td>\n    </tr>\n  </table>\n</body>\n</html>"],
        // Level 7
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Image</title>\n</head>\n<body>\n  <img src='https://via.placeholder.com/150' alt='Placeholder Image'/>\n</body>\n</html>"],
        // Level 8
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Button</title>\n</head>\n<body>\n  <button>Click Me</button>\n</body>\n</html>"],
        // Level 9
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Video</title>\n</head>\n<body>\n  <video controls>\n    <source src='video.mp4' type='video/mp4'>\n    Your browser does not support the video tag.\n  </video>\n</body>\n</html>"],
        // Level 10
        ["<!DOCTYPE html>\n<html>\n<head>\n  <title>Audio</title>\n</head>\n<body>\n  <audio controls>\n    <source src='audio.mp3' type='audio/mp3'>\n    Your browser does not support the audio element.\n  </audio>\n</body>\n</html>"]
    ],
    css: [
        // Level 0
        ["body {\n  background-color: #f0f0f0;\n  color: #333;\n}"],
        // Level 1
        ["h1 {\n  color: blue;\n  font-size: 24px;\n}"],
        // Level 2
        ["p {\n  line-height: 1.5;\n  font-family: Arial, sans-serif;\n}"],
        // Level 3
        ["a {\n  color: #000;\n  text-decoration: none;\n}\na:hover {\n  color: #00f;\n}"],
        // Level 4
        ["button {\n  background-color: #4CAF50;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n}"],
        // Level 5
        ["div {\n  display: flex;\n  justify-content: space-between;\n}"],
        // Level 6
        ["input[type='text'] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}"],
        // Level 7
        ["h2 {\n  font-size: 28px;\n  font-weight: bold;\n}"],
        // Level 8
        ["img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}"],
        // Level 9
        ["@media (max-width: 600px) {\n  body {\n    background-color: lightgray;\n  }\n}"],
        // Level 10
        ["@keyframes example {\n  0% { background-color: red; }\n  100% { background-color: blue; }\n}\n.element {\n  animation: example 4s infinite;\n}"]
    ],
    sql: [
        // Level 0
        ["SELECT 'Hello, World!' AS Greeting;"],
        // Level 1
        ["SELECT id, name FROM users WHERE age > 18;"],
        // Level 2
        ["SELECT users.name, orders.total\nFROM users\nINNER JOIN orders\nON users.id = orders.user_id;"],
        // Level 3
        ["SELECT COUNT(*) AS total_users FROM users;"],
        // Level 4
        ["SELECT AVG(age) AS avg_age FROM users;"],
        // Level 5
        ["SELECT name, MAX(age) AS oldest_user FROM users GROUP BY name;"],
        // Level 6
        ["INSERT INTO users (name, age) VALUES ('John Doe', 30);"],
        // Level 7
        ["UPDATE users SET age = 31 WHERE name = 'John Doe';"],
        // Level 8
        ["DELETE FROM users WHERE name = 'John Doe';"],
        // Level 9
        ["CREATE TABLE orders (\n  order_id INT PRIMARY KEY,\n  user_id INT,\n  total DECIMAL(10, 2),\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);"],
        // Level 10
        ["SELECT orders.order_id, users.name FROM orders\nINNER JOIN users ON orders.user_id = users.id;"]
    ]
};
