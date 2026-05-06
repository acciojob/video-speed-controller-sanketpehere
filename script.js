const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const toggle = player.querySelector(".toggle");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const volume = player.querySelector('input[name="volume"]');
const playbackSpeed = player.querySelector('input[name="playbackRate"]');
const skipButtons = player.querySelectorAll("[data-skip]");

// Play / Pause toggle
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update button icon
function updateButton() {
  toggle.textContent = video.paused ? "►" : "❚ ❚";
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = percent + "%";
}

// Set progress on click
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Volume control
function changeVolume() {
  video.volume = this.value;
}

// Playback speed control
function changeSpeed() {
  video.playbackRate = this.value;
}

// Skip buttons
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

volume.addEventListener("input", changeVolume);
playbackSpeed.addEventListener("input", changeSpeed);

skipButtons.forEach((btn) => btn.addEventListener("click", skip));

progress.addEventListener("click", scrub);
