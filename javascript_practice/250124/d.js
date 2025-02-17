const firstBtn = document.querySelector(".firstBtn");
const secondBtn = document.querySelector(".secondBtn");

const scr1 = document.querySelector(".screen1");
const scr2 = document.querySelector(".screen2");

let isClicked = false;

firstBtn.addEventListener("click", () => {
  isClicked
    ? (scr1.style.display = "none")
    : ((scr1.style.display = "block"), (scr2.style.display = "none"));
});

secondBtn.addEventListener("click", () => {
  isClicked
    ? (scr2.style.display = "none")
    : ((scr2.style.display = "block") && (scr2.style.filter = "blur(10px"),
      (scr1.style.display = "none"));
});
