class Key {
  constructor(private signature: string = this.generateSignature()) { }

  private generateSignature(): string {
    return Math.random().toString(36).substring(2, 14).padEnd(12, '0');
  }

  getSignature(): string {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) { }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  constructor(protected door: boolean, protected key: Key) { }

  comeIn(person: Person): void {
    if (this.door && !this.tenants.includes(person)) {
      this.tenants.push(person);
      console.log('Welcome to the house!');
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(false, key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door is now open!');
    } else {
      console.log('Wrong key! Door remains closed.');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export { Key, Person, House, MyHouse };