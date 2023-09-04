var dog = {
    name: 'Elton',
    breed: 'Australian Shepherd',
    age: 0.5
};
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: 'Thomas', last: 'Jenkins' });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
printName({ first: 'Mick', last: 'Jagger' });
var singer = { first: 'Mick', last: 'Jagger', age: 473 };
printName(singer);
var coordinate2 = { x: 34, y: 2 };
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 23435;
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
// Without using type below is the long way of using an object for the parameter
// function calculatePayout(song:{title:string, artist:string, numStreams:number, credits: {producer: string, writer: string}}) {
// }
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'Unchained Melody',
    artist: 'Righteous Brothers',
    numStreams: 1345353,
    credits: {
        producer: "Phil Spector",
        writer: 'Alex North'
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
