const timerDisplay = document.querySelector(".timer");
const buttons = document.querySelectorAll(".event-container button");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");


let interval;
let minutes = 25;
let seconds = 0;

const updateDisplay = () => {
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const startTimer = () => {
    if (interval) {
      clearInterval(interval);
    }
    
    interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval); // Stop the interval when countdown reaches 00:00
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateDisplay();
    }, 1000);
  };
  
const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  stopTimer();
  minutes = 15;
  seconds = 0;
  updateDisplay();
};

buttons.forEach(button => {
  button.addEventListener("click", () => {
    resetTimer();
    switch (button.classList[0]) {
      case "focus":
        minutes = 25;
        break;
      case "short-break":
        minutes = 5;
        break;
      case "long-break":
        minutes = 15;
        break;
    }
    updateDisplay();
    button.classList.toggle('.transparent');

  });
});

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay(); // Initialize display with default values
