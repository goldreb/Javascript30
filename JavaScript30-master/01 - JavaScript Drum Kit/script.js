// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('playing');
//   }

//   function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }

//   const keys = Array.from(document.querySelectorAll('.key'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);


const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
// const audio = document.querySelector("audio");
// audio = `KeyboardEvent: key="${e.data-key} | code = "${e.code}"`
  console.log(e);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  //   console.log(key);
  key.classList.add("playing");
};

const removeTransition = (e) => {
    console.log(e);
  if (e.propertyName !== "transform") return;
  // console.log(e.propertyName);
  e.target.classList.remove("playing");
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
