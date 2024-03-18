/*
class Juego{
    constructor(){
        this.score = 0;
        this.rolls = new Array(21);
        this.currentRoll = 0;
    }

    roll(pin){
        this.score = this.score + pin;
        this.roll[this.currentRoll++] = pin;
    }

    isSpare(frameIndex) {
        return rolls[frameIndex] + rolls[frameIndex + 1] == 10;
      }
    
    score(){
        this.score = 0;
        let frameIndex = 0;
        for(let frame = 0; frame < 10; frame++){
            if(isSpare(frameIndex)){ // CASO SPARE
                this.score = 10 + this.roll[frameIndex + 2];
                frameIndex = frameIndex + 2;
            } else {
                this.score = this.roll[frameIndex] + this.roll[frameIndex + 1];
                frameIndex = frameIndex + 2;
            }
        }
        return this.score;
    }
}*/

class Juego {
    constructor() {
      this.rolls = new Array(21).fill(0); // Inicializa un array de 21 elementos con 0
      this.currentRoll = 0;
    }
  
    roll(pins) {
      this.rolls[this.currentRoll++] = pins;
    }
  
    score() {
      let score = 0;
      let frameIndex = 0;
      for (let frame = 0; frame < 10; frame++) {
        if (this.isSpare(frameIndex)) {
          score += 10 + this.rolls[frameIndex + 2];
          frameIndex += 2;
        } else {
          score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
          frameIndex += 2;
        }
      }
      return score;
    }
  
    isSpare(frameIndex) {
      return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }
  }
  
export default Juego;
