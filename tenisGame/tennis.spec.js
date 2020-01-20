import TennisGame from './tennis';

describe('TennisGame', () => {
    
    test('it should return 0-0', () => {
        let game = new TennisGame("Andre", "Pete");   
        expect(game.displayScore()).toBe("0-0");     
    });

    test('it should return 15-0', () => {
        let game = new TennisGame("Andre", "Pete");   
        game.scorePlayerOne()
        expect(game.displayScore()).toBe('15-0');
    });

    test('it should return 30-0', () => {
        let game = new TennisGame("Andre", "Pete");  
        game.scorePlayerOne()
        game.scorePlayerOne()
        expect(game.displayScore()).toBe('30-0');
    });
    
    test('it should return 40-0', () => {
        let game = new TennisGame("Andre", "Pete");   
        game.scorePlayerOne()
        game.scorePlayerOne()
        game.scorePlayerOne()
        expect(game.displayScore()).toBe('40-0');
    });


    test('it should return deuce', () => {
        let game = new TennisGame("Andre", "Pete");   

        game.scorePlayerOne()
        game.scorePlayerOne()
        game.scorePlayerOne()
        game.scorePlayerTwo()
        game.scorePlayerTwo()
        game.scorePlayerTwo()

        expect(game.displayScore()).toBe('deuce');
    });

    test('it should Advantage: Pete', () => {
        let game = new TennisGame("Andre", "Pete");   

        game.scorePlayerOne()
        game.scorePlayerOne()
        game.scorePlayerOne()
        game.scorePlayerTwo()
        game.scorePlayerTwo()
        game.scorePlayerTwo()
        game.scorePlayerTwo()

        expect(game.displayScore()).toBe('Advantage: Pete');
    });

    test('it should return Nous avons un gagnant: Pete.', () => {
        let game = new TennisGame("Andre", "Pete");   

        game.scorePlayerOne()
        game.scorePlayerOne()
        game.scorePlayerOne()
        game.scorePlayerTwo()
        game.scorePlayerTwo()
        game.scorePlayerTwo()
        game.scorePlayerTwo()
        game.scorePlayerTwo()
        expect(game.displayScore()).toBe('Nous avons un gagnant: Pete.');
    });
});