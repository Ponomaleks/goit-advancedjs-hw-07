# Task 1
Class Student that contains three properties: name, age, and grade. Instead of declaring these properties in the class body, then initializing them in the constructor, and finally assigning values to them, use a shortened initialization syntax.
```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```
# Task 2
Your task is to create two classes – Employee and Manager.

The Employee class should include:

a name property that is accessible to everyone.
a department property that is accessible only within the Employee class.
a salary property that is accessible only within the Employee class and its subclasses.

The Manager class should be a subclass of the Employee class.

You need to implement a constructor in the Manager class that calls the superclass constructor and increases the salary by 10,000.
```ts
class Employee {
  // Fill in the access modifiers
  name: string;
  department: string;
  salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Implement the constructor and increase `salary` by 10,000.

}
```
# Task 3
You are creating a game where characters have different roles. You are currently working on the Wizard class, which should implement two interfaces – ICharacter and ISpellCaster.

Define the interfaces ICharacter and ISpellCaster so that they match the requirements of the Wizard class. The ICharacter interface should include the properties name and level, as well as the methods introduce and levelUp. The ISpellCaster interface should include the method castSpell.
```ts
// implementation of the Wizard class
class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// test the Wizard class
const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();  // Level up! New level is 16
```
# Task 4 *
In this task, you are to implement a life scenario where a person, a key, and a house interact with each other.

Key: Create a Key class. It should have one private property signature, which is randomly generated when an instance of the class is created (e.g., using Math.random()). This class should also have a getSignature method that returns the value of the signature property.

Person: Create a Person class. The constructor of this class accepts an object of the Key class and stores it in a private property key. The Person class should have a getKey method that returns the stored key.

House: Create an abstract House class. This class should have two properties: door, which can be open (true) or closed (false), and key, which stores an instance of the Key class. This class should also have a comeIn method that adds a Person object to the tenants array if the door is open. Your abstract House class must also have an abstract method openDoor, which accepts a Key object.

MyHouse: Create a MyHouse class that extends the abstract House class. Implement the openDoor method in this class. If the key passed to this method matches the stored key, then the door should be opened.

After implementing all the classes, create instances of each class and try to simulate a scenario where a person comes home.

For example, like this:

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```