var noOf = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOf; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInner = this.innerHTML;
    key(buttonInner);
    high(buttonInner);
  });
}

document.addEventListener("keypress", function (event) {
  key(event.key);
  high(event.key);
});

function key(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio("sounds/snare.mp3");
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio("sounds/tom-1.mp3");
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio("sounds/tom-2.mp3");
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio("sounds/tom-3.mp3");
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio("sounds/tom-4.mp3");
      audio6.play();
      break;
    default:
  }
}
function high(animate) {
  var activeButton = document.querySelector("." + animate);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
