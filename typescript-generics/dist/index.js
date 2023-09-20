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
getRandomElement(['a', 'b', 'asd']);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: 'devan' }, { pets: ['blue', 'joe'] });
console.log(merge({ name: 'Devan' }, { num: 9 }));
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength('asddf');
function makeEmptyList() {
    return [];
}
const nums = makeEmptyList();
const bools = makeEmptyList();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
videos.add();
