const progressInfoPercentage = document.querySelector('.progress-info-percentage');
const progressInfoText = document.querySelector('.progress-info-text');
const progressInfoTimeRemaining = document.querySelector('.progress-info-time-remaining');
const progressBar = document.querySelector('.progress-bar');
const btnPlayProgress = document.querySelector(".btn-play-progress");
let percentage = 0;
let timeRemaining = 10;

btnPlayProgress.addEventListener('click', resetValues);

function resetValues() {
    btnPlayProgress.style.pointerEvents = "none";
    progressInfoPercentage.textContent = percentage + "%";
    progressInfoText.textContent = "Update in progress...";
    progressInfoTimeRemaining.textContent = `${timeRemaining}s left`;
    progressBar.style.width = "0%";

    manageAnimation();
};

function manageAnimation() {
    setInterval(() => {
        percentage++;
        playPercentageProgress();
        playProgressbarProgress();
    }, 100);

    setInterval(() => {
        playTextProgress();
    }, 10000);

    setInterval(() => {
        timeRemaining--;
        playTimeRemainingProgress();
    }, 1000);
};

function playPercentageProgress() {
    if (percentage <= 100) {
        progressInfoPercentage.textContent = percentage + "%";
        if (percentage == 100) {
            progressInfoPercentage.style.color = "var(--third-color)";
        }
    };
};

function playTextProgress() {
    progressInfoText.textContent = "Update completed";
};

function playTimeRemainingProgress() {
    if (timeRemaining >= 0) {
        progressInfoTimeRemaining.textContent = `${timeRemaining}s left`;
    }
};

function playProgressbarProgress() {
    if (percentage <= 100) {
        progressBar.style.width = `${percentage}%`;
        if (percentage == 100) {
            progressBar.style.backgroundColor = "var(--third-color)";
        }
    }
};