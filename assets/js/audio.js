/* jshint esversion: 6 */

// Tracks if audio is currently playing
let isPlaying = false;
// Stores currently playing audio
let currentAudio = null;

// Select the specific audio element with the specified source
function toggleAudio(audioSrc) {
  let audio = document.querySelector('.myAudio[src="' + audioSrc + '"]');
// If there is already audio playing, pause and reset its time
  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    isPlaying = false;
  }
  // If the selected audio is not currently playing, or if a different audio was playing, play it
  if (!isPlaying || currentAudio !== audio) {
    audio.play();
    isPlaying = true;
    currentAudio = audio;
    document
      .querySelector(".audio-button svg")
      .setAttribute("class", "bi bi-volume-off");
  } else {
    // If audio is playing, pause it
    audio.pause();
    isPlaying = false;
    currentAudio = null;
    document
      .querySelector(".audio-button svg")
      .setAttribute("class", "bi bi-volume-up");
  }
}
