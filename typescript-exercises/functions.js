"use strict";
function square(num) {
    return num * num;
}
function greet(person = "stranger") {
    // person * person
    return `Hi there, ${person}!`;
}
//vaid attempts with defaul value
greet();
greet('Tony');
const doSomething = (person, age, isFunny) => { };
doSomething('ChickenFace', 76, false);
// square(3)
// greet(324)
//Creating a function with a return type
const addNums = (x, y) => {
    return x + y;
};
//Anonymous Function Contextual Typing
const colors = ['red', 'orange', 'yellow'];
colors.map(color => {
    return color;
});
//Void Typing
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
    // return ''
    // you will get an error trying to return a string
}
//Never Typing
function makeError(msg) {
    // return of anything should show an error
    // return undefined
    throw new Error(msg);
}
