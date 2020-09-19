window.addEventListener('load', (event) => {

  var audioElementBass = new Audio('loops/bassLoop.mp3');

  audioElementBass.addEventListener("canplaythrough", event => {
    audioElementBass.play();
    audioElementBass.loop = true;
    audioElementBass.muted = true;
  });

});









var noise = document.getElementById("lofiNoise");
var bass = document.getElementById("bassLoop");
var kick = document.getElementById("kickLoop");
var drums = document.getElementById("drumLoop");
var horns = document.getElementById("hornLoop");

function toggleNoiseOn() {
    noise.muted = false;
}

function toggleNoiseOff() {
    noise.muted = true;
}

function toggleBassOn() {
    bass.muted = false;
}

function toggleBassOff() {
    bass.muted = true;
}

function toggleKicksOn() {
    kick.muted = false;
}

function toggleKicksOff() {
    kick.muted = true;
}

function toggleDrumsOn() {
    drums.muted = false;
}

function toggleDrumsOff() {
    drums.muted = true;
}

function toggleHornsOn() {
    horns.muted = false;
}

function toggleHornsOff() {
    horns.muted = true;
}
