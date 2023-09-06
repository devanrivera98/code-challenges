// type Point = {
//   x: number,
//   y: number
// }

//const pt: Point = {x:23, y=12}

interface Point {
  x: number;
  y: number;
}

const pt: Point = {x:123, y:1234}

interface Person {
  readonly id:number
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  //sayHi(): string  ||is the same thing
  //sayHi must be a method that returns a string
  // if it has 0 arguments that you must use 0 arguments as well
}

const thomas: Person = {
  first:'Thomas',
  last: 'Hardy',
  id:21234,
  sayHi: ()=> {
    return 'hello';
  },
};

interface Product {
  name: string,
  price: number,
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: 'blue shoes',
  price: 100,
  applyDiscount(amount: number) {
    return 2
  }
}

console.log(shoes.applyDiscount(.4))

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: 'Elton',
  age: 0.5,
  breed: 'Shepard',
  bark() {
    return 'Woof Woof!'
  }
}
