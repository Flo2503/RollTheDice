// Function to switch players
function switchPlayers(currentPlayer) {
    return (currentPlayer === 1) ? 2 : 1;
}

// Function to reset scores
function resetScore(selector) {
    document.querySelectorAll(selector).forEach(score => {
        score.textContent = '0';
    });
}

// Function to simulate rolling a dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update displayed scores
function updateScores(playerOneScore, playerTwoScore, playerOneCurrentScore, playerTwoCurrentScore) {
    const playerOneScoreElement = document.querySelector('.score-player-one');
    const playerTwoScoreElement = document.querySelector('.score-player-two');
    const playerOneCurrentScoreElement = document.querySelector('.crnt-score-player-One');
    const playerTwoCurrentScoreElement = document.querySelector('.crnt-score-player-Two');

    playerOneScoreElement.textContent = playerOneScore;
    playerTwoScoreElement.textContent = playerTwoScore;
    playerOneCurrentScoreElement.textContent = playerOneCurrentScore;
    playerTwoCurrentScoreElement.textContent = playerTwoCurrentScore;
}