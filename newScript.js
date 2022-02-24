const playSound = (e) => {
  const button = document.querySelector(`button[data-key="${e.keyCode}"]`);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  button.classList.add("play");
  audio.currentTime = 0;
  audio.play();
};

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;

  
  e.target.classList.remove("play");
};

const keys = document.querySelectorAll(".notes");

keys.forEach((el) =>
  el.addEventListener("transitionend", removeTransition)
);

window.addEventListener("keydown", playSound);


const playClickSound = (e) =>{

  const audio = document.querySelector(`audio[data-key="${e.target.getAttribute("data-key")}"]`);

  if (!audio) return;
  e.target.classList.add("play");
  audio.currentTime = 0;
  audio.play();
};

keys.forEach((el) => el.addEventListener("click", playClickSound));