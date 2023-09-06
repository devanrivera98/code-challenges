// type Point = {
//   x: number,
//   y: number
// }
var pt = { x: 123, y: 1234 };
var thomas = {
    first: 'Thomas',
    last: 'Hardy',
    id: 21234,
    sayHi: function () {
        return 'hello';
    },
};
var shoes = {
    name: 'blue shoes',
    price: 100,
    applyDiscount: function (amount) {
        return 2;
    }
};
console.log(shoes.applyDiscount(.4));
