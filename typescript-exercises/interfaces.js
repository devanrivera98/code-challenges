"use strict";
// type Point = {
//   x: number,
//   y: number
// }
const pt = { x: 123, y: 1234 };
const thomas = {
    first: 'Thomas',
    last: 'Hardy',
    id: 21234,
    sayHi: () => {
        return 'hello';
    },
};
const shoes = {
    name: 'blue shoes',
    price: 100,
    applyDiscount(amount) {
        return 2;
    }
};
console.log(shoes.applyDiscount(.4));
const elton = {
    name: 'Elton',
    age: 0.5,
    breed: 'Shepard',
    bark() {
        return 'Woof Woof!';
    },
};
const chewy = {
    name: 'Chewy',
    age: 4.5,
    breed: 'lab',
    bark() {
        return 'Woof Woof';
    },
    job: 'guide dog'
};
const pierre = {
    name: 'Pierre',
    id: 123897,
    email: 'pierre@gmail.com',
    level: 'senior',
    languages: ['js', 'python']
};
