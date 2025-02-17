const buttons = document.querySelectorAll("button");
const displayDiv = document.querySelector(".display");

let operator = "";
let prevNum = "";
let currentNum = "";

let calculate = (num1, operator, num2) => {
  let result = 0;

  switch (operator) {
    case "+":
      result = Number(num1) + Number(num2);
      break;

    case "-":
      result = Number(num1) - Number(num2);
      break;

    case "*":
      result = Number(num1) * Number(num2);
      break;

    case "/":
      result = Number(num1) / Number(num2);
      break;

    default:
      break;
  }
  return String(result);
};

const displayControl = (value) => {
  displayDiv.textContent = value;
};

// console.log(e.target.textContent);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {});
});
