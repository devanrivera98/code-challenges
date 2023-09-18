class Player {
  static description = 'Player in our game';
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  static randomPlayer() {
    return new Player('Andy', 'Sandman');
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error('Score must be positive!');
    }
    this.#score = newScore;
  }

  taunt() {
    console.log('BOOYAH');
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  loseLife() {
    this.#numLives -= 1;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }

  isAdmin = true;
}
const admin = new AdminPlayer('Admin', 'mAdmin', ['delete', 'restore world']);
console.log(admin);

const player1 = new Player('blue', 'steele');
player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1.score);
// console.log(player1.updateScore(28));
// console.log(player1.score);
// console.log(player1.fullName);

console.log(player1.score);
player1.score = 1243;
console.log(player1.score);
// const player2 = new Player('charlie', 'brown');
// player2.taunt();
