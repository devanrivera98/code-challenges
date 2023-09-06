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

const stuff: (number | string)[] = [1,2,3, 'das'];
// const stuff: number[] | string[] mean you want an array of either all numbers or all strings

const coords: (Point| Loc)[] = []
coords.push({lat:321.23, long: 23.43})
coords.push({x:2123, y:42})

//literal types
let zero: 0 = 0
let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad'

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

let today: DayOfWeek = 'Monday'
// needs to be a literal value of the type dayOfWeek
