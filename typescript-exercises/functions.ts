function square(num: number) {
  return num * num;
}

function greet(person: string = "stranger") {
  // person * person
  return `Hi there, ${person}!`
}
//vaid attempts with defaul value
greet()
greet('Tony')

const doSomething = (person:string, age: number, isFunny: boolean) => {};
doSomething('ChickenFace',76, false);

// square(3)
// greet(324)


//Creating a function with a return type
const addNums = (x: number, y : number): number => {
  return x + y;
}


//Anonymous Function Contextual Typing
const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
  return color
})

//Void Typing
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
  // return ''
  // you will get an error trying to return a string
}

//Never Typing
function makeError(msg:string): never {
  // return of anything should show an error
  // return undefined
  throw new Error(msg)
}
