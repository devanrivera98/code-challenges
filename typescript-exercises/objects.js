"use strict";
const dog = {
    name: 'Elton',
    breed: 'Australian Shepherd',
    age: 0.5
};
function printName(person) {
    console.log(`${person.first} ${person.last}`);
}
printName({ first: 'Thomas', last: 'Jenkins' });
let coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
printName({ first: 'Mick', last: 'Jagger' });
const singer = { first: 'Mick', last: 'Jagger', age: 473 };
printName(singer);
let coordinate2 = { x: 34, y: 2 };
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
let age = 23435;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
// Without using type below is the long way of using an object for the parameter
// function calculatePayout(song:{title:string, artist:string, numStreams:number, credits: {producer: string, writer: string}}) {
// }
function printSong(song) {
    console.log(`${song.title} - ${song.artist}`);
}
const mySong = {
    title: 'Unchained Melody',
    artist: 'Righteous Brothers',
    numStreams: 1345353,
    credits: {
        producer: "Phil Spector",
        writer: 'Alex North'
    }
};
const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
// ? makes the parameter optional when used in the future
const myPoing = { x: 1, y: 3 };
const user = {
    id: 12837,
    username: 'catperson'
};
console.log(user.id);
const happyFace = {
    radius: 4,
    color: 'yellow'
};
const christy = {
    numlives: 7,
    breed: 'Husky',
    age: 9
};
