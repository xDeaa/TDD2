export default class TennisGame {
    constructor(playerOne, playerTwo) {
        this.playerOne = { name: playerOne, score: 0, scoreLetter: "0"}
        this.playerTwo = { name: playerTwo, score: 0, scoreLetter: "0"}
        this.score = ["0", "15", "30", "40"]
    }

    getPoints(player) {
       player.score += 1
       player.scoreLetter = this.score[player.score]

       return player
    }

    scorePlayerOne() {
        this.playerOne = this.getPoints(this.playerOne)        
    }

    scorePlayerTwo() {
        this.playerTwo = this.getPoints(this.playerTwo)
    }

    isWinner(pOne, pTwo) {
        return pOne >= 4 && pOne >= pTwo + 2
    }

    isAdvantage(pOne, pTwo) {
        return pOne > 3 && pTwo >= 3 && (pOne - pTwo) >= 1;
    }

    displayScore() {
        const [scorePOne, scorePTwo] = [this.playerOne.score, this.playerTwo.score]
        if(scorePOne >= 3 && scorePOne === scorePTwo) return "deuce"

        if(this.isWinner(scorePOne, scorePTwo)) return `Nous avons un gagnant: ${this.playerOne.name}.`
        if(this.isWinner(scorePTwo, scorePOne)) return `Nous avons un gagnant: ${this.playerTwo.name}.`

        if(this.isAdvantage(scorePOne, scorePTwo)) return `Advantage: ${this.playerOne.name}`
        if(this.isAdvantage(scorePTwo, scorePOne)) return `Advantage: ${this.playerTwo.name}`

        return `${this.playerOne.scoreLetter}-${this.playerTwo.scoreLetter}`;
    }
}

