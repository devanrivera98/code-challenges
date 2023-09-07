"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Hello');
console.log('Goodbye');
console.log(Math.round(7.324546546565));
let pi = 3.14159;
let movieTitle = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;
// number should not work since it was declared string
movieTitle.toUpperCase();
let numCatLives = 9;
numCatLives += 1;
// numCatLives = 'zero'
let tvShow = 'Breaking Bad';
// type inference
// tvshow = false
// get an error since typeScript already made an inference
let thing = "hello";
thing = 1;
thing = false;
thing();
// any types removes any of the extra typeScript checks
const movies = ['Arrival', 'The Thing', 'Aliens', 'Ameadeus'];
let foundMovie;
// if you dont declare it as a string it will default to any type
for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = 'Amedeus';
    }
}
// foundMovie();
// foundMovie = 1;
