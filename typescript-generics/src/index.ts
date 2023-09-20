
function NumberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

//below wouldnt work because you can give it anything and also return anything
// function identity(item: any) :any {
//   return item
// }

interface Cat{
  name: string,
  breed: string
}

function identity<Type>(item: Type) : Type {
  return item;
}
// identity<number>(7)
// identity<string>('7')
// identity<Cat>()

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length)
  return list[randIdx]
}
console.log(getRandomElement<string>(['a','b','c']));
console.log(getRandomElement<number>([6,345,23,56]));

getRandomElement(['a','b','asd'])

function merge<T extends object, U extends object>(object1 : T, object2: U) {
  return {
    ...object1,
    ...object2
  }
}

const comboObj = merge({name: 'devan'}, {pets: ['blue', 'joe']})
console.log(merge({name:'Devan'}, {num: 9}))
//merge <{name: string, {pets:string[]}>({name: 'devan}, {pets: ['blue', 'dogs]})

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

printDoubleLength('asddf')

function makeEmptyList<T = number>() : T[]{
  return []
}

const nums = makeEmptyList();
const bools = makeEmptyList<boolean>()

interface Song {
  title: string,
  artist: string
}

interface Video {
  title: string,
  creator: string,
  resolution: string
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el)
  }
}

const songs = new Playlist<Song>()

const videos = new Playlist<Video>()
videos.add()
