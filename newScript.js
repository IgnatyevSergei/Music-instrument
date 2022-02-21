const playSound = (e) => {
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  button.classList.add("play");
  audio.currentTime = 0;
  audio.play();
};

const removeTransition = (e) => {
  // if (e.propertyName !== "transform") return;

  console.log(e);

  e.target.classList.remove("play");
};

const keys = document.querySelectorAll(".notes");

keys.forEach((el) =>
  el.addEventListener("webkitTransitionEnd", () => console.log("privet"))
);
window.addEventListener("keydown", playSound);
