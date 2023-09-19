"use strict";
function NumberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
function identity(item) {
    return item;
}
// identity<number>(7)
// identity<string>('7')
// identity<Cat>()
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(['a', 'b', 'c']));
console.log(getRandomElement([6, 345, 23, 56]));
