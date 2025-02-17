function processValue(value) {
  if (isNaN(value)) {
    alert("숫자가 아닙니다.");
    return;
  } else {
    console.log(value);
  }
}

function handleInput() {
  const value = document.querySelector("input").value;

  processValue(value);
}
