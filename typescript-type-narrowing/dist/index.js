"use strict";
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
const el = document.getElementById('idk');
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        word;
        console.log('You did not pass in a word!');
    }
};
function someDemo(x, y) {
    if (x === '3') {
        x.toUpperCase();
    }
}
function getRuntime(media) {
    if ('numEpisodes' in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: 'Dune', duration: 180 }));
console.log(getRuntime({ title: 'breaking bad', numEpisodes: 80, episodeDuration: 60 }));
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName1(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
