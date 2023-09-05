let age: number | string = 21;
age = 23;
age = '24';

type Point = {
  x:number;
  y: number;
}

type Loc = {
  lat: number;
  long: number
}

let coordinates: Point | Loc = {x: 1, y: 34}
coordinates = {lat: 2321.23, long: 23.334}

function printAge(age: number | string ): void {
  console.log(`You are ${age} years old`)
}
printAge(87)
printAge('3')

function calculateTax(price: number | string, tax: number) {
  // when you use typeof typescript can identify what you are doing to a string or if its a number
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''))
  }
    return price * tax
    // return price * tax
}
console.log(calculateTax(45, .07))
console.log(calculateTax('$45', .07))
// above should be the same 
