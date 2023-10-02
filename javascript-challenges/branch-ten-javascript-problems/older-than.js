// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    // Write code here!
    // console.log(this.name);
    if (this.age < other.age) {
      return `${other.name} is older than me.`;
    } else if (this.age > other.age) {
      return `${other.name} is younger than me.`;
    } else {
      return `${other.name} is the same age as me.`;
    }
  }
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);
console.log(person1.compareAge(person2));
// Output: "Bob is older than me."
