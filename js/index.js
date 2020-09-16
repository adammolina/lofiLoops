let button = document.querySelector('button');
let attribute = document.querySelector('audio').getAttribute('muted');

button.onclick = () => {
  if (attribute == false) {
    document.querySelector("audio").setAttribute("muted","true");
  } else {
    document.querySelector("audio").setAttribute("muted","false");
  }
};
