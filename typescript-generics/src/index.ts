
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

