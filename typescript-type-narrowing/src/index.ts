function triple(value: number | string) {
if (typeof value === 'string') {
  return value.repeat(3)
}
  return value * 3
}

const el = document.getElementById('idk');
if (el) {
  el
} else {
  el
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char)
    }
  } else {
    word
    console.log('You did not pass in a word!')
  }
}

function someDemo(x:string | number, y: string | number) {
  if (x === '3') {
    x.toUpperCase();
  }
}

interface Movie {
  title: string,
  duration: number
}

interface TVShow {
  title: string,
  numEpisodes: number,
  episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
  if ('numEpisodes' in media) {
    return media.numEpisodes * media.episodeDuration
  }
  return media.duration
}

console.log(getRuntime({title: 'Dune', duration: 180}))
console.log(getRuntime({title: 'breaking bad',numEpisodes: 80, episodeDuration: 60}))

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString())
  } else {
    console.log(new Date(date).toUTCString())
  }
}

class User {
  constructor(public username: string){}
}

class Company {
  constructor(public name: string) {}
}

function printName1(entity: User | Company) {
  if (entity instanceof User) {
    entity
  } else {
    entity
  }
}
