window.addEventListener('load', (event) => {
  var audioTag = document.queryselector("audio");
  audioTag.setAttribute("muted", "true");
});

var a = document.getElementById("lofiNoise");

function toggleAudio() {
  if (a.muted = true) {
    a.muted = false;
  } else {
    a.setAttribute("muted", "true");
  }
}
