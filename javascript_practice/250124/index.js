const main = document.querySelector(".main");
const btn = document.querySelectorAll(".btn");
const scr = document.querySelectorAll(".screen");

const addBtn = document.createElement("button");

main.append(addBtn);
addBtn.textContent = "버튼";
let countCheck = 1;
let isClicked = false;

addBtn.addEventListener("click", () => {
  countCheck += 1;
  console.log(countCheck);

  const newContent = document.createElement("div");

  newContent.classList.add(`screen${countCheck}`);
  newContent.textContent = `screen${countCheck}`;
  document.querySelector(".container").append(newContent);

  const newBtn = document.createElement("a");
  newBtn.classList.add("btn");
  newBtn.href = `#newBtn${countCheck}`;
  newBtn.textContent = `Menu${countCheck}`;

  document.querySelector(".container").append(newContent);
  main.append(newBtn);
});
