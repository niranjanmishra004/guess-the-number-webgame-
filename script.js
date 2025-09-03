let secretNumber;
let attempts;
let minRange;
let maxRange;

const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess");
const statusDiv = document.getElementById("status");
const hintDiv = document.getElementById("hint");
const attemptsBadge = document.getElementById("attempts");
const rangeBadge = document.getElementById("range");
const resetBtn = document.getElementById("reset");

function initGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  minRange = 1;
  maxRange = 100;


  statusDiv.textContent = "Game started! Enter your guess ⬆️";
  hintDiv.textContent = "";
  attemptsBadge.textContent = `Attempts: ${attempts}`;
  rangeBadge.textContent = `Range: ${minRange}–${maxRange}`;
  guessInput.value = "";
  guessInput.focus();
}

guessForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    statusDiv.textContent = "⚠️ Please enter a valid number between 1 and 100!";
    return;
  }

  attempts++;
  attemptsBadge.textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    statusDiv.textContent = `Booyah 🎉 Correct Buddy! The number was ${secretNumber}. but....but you won in ${attempts} attempts!`;
    hintDiv.textContent = "Click restart to play again 🔄";
  } else if (guess < secretNumber) {
    statusDiv.textContent = "📉 Naah your guess was too low means it was less than the actual number";
    minRange = Math.max(minRange, guess + 1);
    hintDiv.textContent = `You can try between ${minRange} and ${maxRange}`;
  } else {
    statusDiv.textContent = "📈 Naah your guess was too high means it was more than the actual number";
    maxRange = Math.min(maxRange, guess - 1);
    hintDiv.textContent = `You can try between ${minRange} and ${maxRange}`;
  }

  rangeBadge.textContent = `Range: ${minRange}–${maxRange}`;
  guessInput.value = "";
  guessInput.focus();
});


resetBtn.addEventListener("click", initGame);

initGame();
