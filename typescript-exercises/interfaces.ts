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
