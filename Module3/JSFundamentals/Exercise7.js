const basketballGame = {
    score: 0, //tracks score
    fouls: 0, //tracks fouls
    // Free throw will add 1 to score
    freeThrow() {
        this.score++;
        return this; //Return object for chain
    },
    // Basket add 2 points
    basket() {
        this.score += 2;
        return this; //Return object for chain
    },
    // 3-point shot adds 3 points
    threePointer() {
        this.score += 3;
        return this; //Return object for chain
    },
    //Half-Time message with score/fouls
    halfTime() {
        console.log(`Halftime score is ${this.score} with ${this.fouls} fouls.`);
        return this; //Return object for chain
    },
    //Full-Time message with score/fouls
    fullTime() {
        console.log(`Full-time score is ${this.score} with ${this.fouls} fouls.`);
        return this; //Return object for chain
    },
    //Increment Foul count
    foul() {
        this.fouls++;
        return this; //Return object for chain
    },
    //Method to reset game for each test
    reset() {
        this.score = 0;
        this.fouls = 0;
        return this; //Return object for chain
    }
};

//Testing Chain
basketballGame.reset().basket().freeThrow().threePointer().foul().halfTime().basket().foul().fullTime();
//Test2
basketballGame.reset().basket().halfTime().foul().basket().fullTime();
//Test3
basketballGame.reset().threePointer().threePointer().threePointer().foul().halfTime().basket().foul().fullTime();
