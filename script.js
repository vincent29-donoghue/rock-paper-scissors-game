const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function updateScore() {
  document.getElementById('score').textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === 3) {
    setTimeout(() => {
      alert("🏆 You won the match!");
      resetGame();
    }, 100);
  } else if (computerScore === 3) {
    setTimeout(() => {
      alert("💀 Computer won the match!");
      resetGame();
    }, 100);
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  document.getElementById('player-choice').textContent = '';
  document.getElementById('computer-choice').textContent = '';
  document.getElementById('winner').textContent = '';
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

    if (playerChoice === computerChoice) {
      document.getElementById('winner').textContent = "It's a draw!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      document.getElementById('winner').textContent = "You win!";
      playerScore++;
    } else {
      document.getElementById('winner').textContent = "You lose!";
      computerScore++;
    }

    updateScore();
    checkWinner();
  });
});
