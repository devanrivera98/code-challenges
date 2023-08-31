import { isConstructorDeclaration } from "typescript"

console.log('Hello')
console.log('Goodbye')
console.log(Math.round(7.324546546565))

let pi: number = 3.14159;

let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;
// number should not work since it was declared string
movieTitle.toUpperCase()

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = 'zero'

let tvShow = 'Breaking Bad';
// type inference

// tvshow = false
// get an error since typeScript already made an inference

let thing: any = "hello";
thing = 1;
thing = false;
thing()

// any types removes any of the extra typeScript checks

const movies = ['Arrival', 'The Thing', 'Aliens', 'Ameadeus'];
let foundMovie: string;
// if you dont declare it as a string it will default to any type

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = 'Amedeus'
  }
}
// foundMovie();
// foundMovie = 1;
