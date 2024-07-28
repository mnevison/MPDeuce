let isPlaying = false;
let currentAudio = null;

function toggleAudio(audioSrc) {
  let audio = document.querySelector('.myAudio[src="' + audioSrc + '"]');

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    isPlaying = false;
  }

  if (!isPlaying || currentAudio !== audio) {
    audio.play();
    isPlaying = true;
    currentAudio = audio;
    document
      .querySelector(".audio-button svg")
      .setAttribute("class", "bi bi-volume-off");
  } else {
    audio.pause();
    isPlaying = false;
    currentAudio = null;
    document
      .querySelector(".audio-button svg")
      .setAttribute("class", "bi bi-volume-up");
  }
}
