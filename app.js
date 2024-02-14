const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //   console.log(audio);
  if (!audio) return;
  //   stop function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};
function removeTransition(e) {
  // if (e.propertyName !== "transform") return;
  // skip if it is not transform.
  // console.log(e.propertyName);
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

// we learned keyEvent. audio. currentTime. play(). data-key.
