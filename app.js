const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // const keyButton = document.querySelector(`.key`)
  //   console.log(audio);
  if (!audio) return;
  //   stop function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  // console.log(keyButton);
};
function removeTransition() {
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

const metronomeButton = document.getElementById("metronome")
const metronomeSound = (e) => {
  const metronome = document.getElementById("metrosound")
  metronome.currentTime = 0
  // metronome.play()
  // metronome.()
}
// metronomeButton.addEventListener("click", metronomeSound)
// metronomeButton.addEventListener("click", counter)

let clickCount = 0;
function handleClick() {
  clickCount++;
}
metronomeButton.addEventListener("click", handleClick)
console.log(handleClick());