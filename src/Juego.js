class Juego{
    constructor(){
        this.score = 0;
    }

    roll(pin){
        this.score = this.score + pin;
    }

    score(){
        return 0;
    }
}

export default Juego;