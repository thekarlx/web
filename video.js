// Grab elements
const video = document.querySelector('.vid');

// Play/Pause toggle on click
video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Optional: keyboard shortcuts
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case ' ':
      e.preventDefault();
      video.paused ? video.play() : video.pause();
      break;
    case 'ArrowRight': // Skip forward 5s
      video.currentTime += 5;
      break;
    case 'ArrowLeft': // Skip back 5s
      video.currentTime -= 5;
      break;
    case 'm': // Toggle mute
      video.muted = !video.muted;
      break;
  }
});
