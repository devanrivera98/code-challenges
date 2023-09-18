// class Player {
//   // public can be used for clarity sake even though it should be public by default
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
//   // #score you can use one or the other
//   // saying score is a number is not needed because we said 0
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(): void {
//     console.log('Secret Method!')
//   }
// }

class Player {

  // private score: number = 0;
  // #score you can use one or the other
  // saying score is a number is not needed because we said 0
  constructor(public first: string, public last: string, protected _score: number) {

  }

  private secretMethod(): void {
    console.log('Secret Method!')
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score() : number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error('Score cannot be negative')
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player{
  public isAdmin:boolean = true
  maxScore() {
    this._score = 99999;
  }
}

const elton = new Player('Elton', 'John', 100);
elton.fullName;
elton.score = 89;
// elton.first = 'elton'
// this would give errors if first was in readonly mode

// elton.score
//elton score would not work if score was private on the class

// elton.secretMethod();

interface Colorful {
  color: string;
}

interface Printable {
  print(): void
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string){}

  print(){
    console.log(`${this.color}`)
  }
}

const bike1 = new Bike('red')
const jacket1 = new Jacket('Prada', 'black')

abstract class Employee {
  constructor(public first: string, public last: string){}
  abstract getPay(): number;
  greet() {
    console.log('hello')
  }
}

class FullTimeEmployee extends Employee {
  constructor(first:string, last:string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(first: string, last:string, private hourlyRate: number, private hoursWorked: number) {
    super(first, last)
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee('Betty', "White", 9500)
console.log(betty.getPay())

const bill = new PartTimeEmployee('Bill', 'Billerson', 24, 1100)
console.log(bill.getPay())
