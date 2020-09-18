window.addEventListener('load', (event) => {
  var audioTag = document.queryselector("audio");
  audioTag.setAttribute("muted", "true");
});

var a = document.getElementById("lofiNoise");
function toggleOn() {
    a.muted = false;
}

function toggleOff() {
    a.muted = true;
}

var b = document.getElementById("bassLoop");
function toggleOn() {
    b.muted = false;
}

function toggleOff() {
    b.muted = true;
}
