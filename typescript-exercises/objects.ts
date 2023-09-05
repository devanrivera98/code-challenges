const dog = {
  name: 'Elton',
  breed: 'Australian Shepherd',
  age: 0.5
}

function printName(person: {first: string; last:string}): void {
  console.log(`${person.first} ${person.last}`)
}

printName({first:'Thomas', last:'Jenkins'});

let coordinate: {x:number, y: number} = {x:34, y:2}

function randomCoordinate(): {x:number, y: number} {
  return {x: Math.random(), y: Math.random()}
}

printName({first:'Mick', last: 'Jagger'})
const singer = { first: 'Mick', last: 'Jagger', age: 473 }
printName(singer)
//why does this not cause an issue
//meant on person if you do it in line it figures its a mistake but if you pass in an existing object it will only use what is needed from the parameter

type Point = {
  x: number,
  y: number
}

let coordinate2: Point = {x:34, y: 2};

function doublePoint(point: Point): Point {
  return {x: point.x * 2, y: point.y * 2};
}

type MyNum = number;
let age: MyNum = 23435;
//are able to describe an object's type using type

//Nested Objects
type Song = { title: string,
  artist: string,
  numStreams: number,
  credits: { producer: string, writer: string };
};

function calculatePayout(song:Song): number {
  return song.numStreams * 0.0033
}

// Without using type below is the long way of using an object for the parameter
// function calculatePayout(song:{title:string, artist:string, numStreams:number, credits: {producer: string, writer: string}}) {

// }

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`)
}

const mySong: Song = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  numStreams: 1345353,
  credits: {
    producer: "Phil Spector",
    writer: 'Alex North'
  }
}

const earnings = calculatePayout(mySong)
console.log(earnings)
printSong(mySong)

type Point2 = {
  x: number;
  y:number;
  z?:number;
}
// ? makes the parameter optional when used in the future

const myPoing: Point = {x:1,y:3};

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12837,
  username: 'catperson'
}

console.log(user.id);
// it is readonly so you cannot touch it at all
// user.id = 239974

//intersection type

type Circle = {
  radius: number;
}

type Colorful = {
  color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: 'yellow'
}

type Cat = {
  numlives: number
}

type Dog = {
  breed:string
}

type CatDog = Cat & Dog & {
  // inclues the new requirement which is number
  age: number;
}

const christy: CatDog = {
  numlives: 7,
  breed: 'Husky',
  age: 9
}
