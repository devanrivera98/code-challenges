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
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
        return "Woof";
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ('pig'):
            return 'Oink';
        case ('cow'):
            return 'Moo';
        case ('rooster'):
            return "Rooster cry";
        case ('sheep'):
            return "bahhh";
        default:
            //We should never make it here, if we handled all cases correctly
            // typescript can help notify below if you include something that isnt valid
            // if the animal put in the parameter is not of type FarmAnimal exhaustiveCheck will run
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: 'Stevie Chicks',
    weight: 2,
    age: 1.5,
    kind: 'rooster'
};
console.log(getFarmAnimalSound(stevie));
