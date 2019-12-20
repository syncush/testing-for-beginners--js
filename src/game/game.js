function generateRandomNumber() {
    return Math.random();
}

function playOneRound(numberOfPlayers = 2) {
    if (numberOfPlayers === 1) {
        return 0;
    }
    let winner = 0, max = generateRandomNumber();
    for(let i = 1; i < numberOfPlayers; i++) {
        const currentPlayerValue = generateRandomNumber();
        if (currentPlayerValue > max) {
            winner = i;
        }
    }
    return winner;
}

function playGame(numberOfPlayers, numberOfRounds) {
    if (numberOfPlayers <= 0) {
        throw new Error('Cant play a round with no players');
    }
    const winningCounter = new Array(numberOfPlayers).fill(0);
    for(let i = 0; i < numberOfRounds; i++) {
        const winnerIndex = playOneRound(numberOfPlayers);
        winningCounter[winnerIndex] += 1;
    }
    const max = Math.max(...winningCounter);
    const winners = winningCounter
                        .map((winnerCount, index) => winnerCount === max ? index : -1)
                        .filter(i => i !== -1);
    return winners.length > 1 ? winners : winners[0];
}

module.exports = playGame;
