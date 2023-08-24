let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 60;
let speed = 1;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(#7d2ae8 ${
    progressStartValue * 3.6
  }deg, #ededed 0)`;

  if (progressStartValue === progressEndValue) {
    clearInterval(progress);
  }
}, speed);
