class Player {
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  taunt() {
    console.log('BOOYAH');
  }

  getScore() {
    return this.#score;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  loseLife() {
    this.#numLives -= 1;
  }
}

const player1 = new Player('blue', 'steele');
player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
console.log(player1.getScore());
console.log(player1.updateScore(28));
console.log(player1.getScore());

const player2 = new Player('charlie', 'brown');
player2.taunt();
console.log(player2.numLives);
player2.loseLife();
console.log(player2.numLives);
