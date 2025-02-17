const handleButtonClick = (e) => {
  const click = e.target.innerHTML;
  const classList = e.target.classList;
  
  // 숫자 버튼 클릭 처리
  if (classList.contains("num")) {
    if (firstInput && click === "0") {
      return; // 첫 입력이 0일 때는 아무 것도 하지 않음
    }

    if (firstInput) {
      currentNum = click; // 첫 숫자 입력
      displayDiv.textContent = currentNum;
      firstInput = false;
    } else {
      currentNum += click; // 이후 숫자 입력
      displayDiv.textContent = currentNum;
    }
  }

  // 연산자 버튼 클릭 처리
  if (classList.contains("operator")) {
    if (prevNum !== "") {
      prevNum = calculate(prevNum, operatorClick, currentNum);
      displayDiv.textContent = prevNum;
    } else {
      prevNum = currentNum;
    }
    operatorClick = click;
    firstInput = true;
  }

  // = 버튼 클릭 처리 (계산)
  if (click === "=") {
    if (prevNum && operatorClick) {
      prevNum = calculate(prevNum, operatorClick, currentNum);
      displayDiv.textContent = prevNum;
      operatorClick = "";
      firstInput = true;
    }
  }

  // Del 버튼 클릭 처리
  if (click === "Del") {
    displayDiv.textContent = "";
    prevNum = "";
    currentNum = "";
    operatorClick = "";
    firstInput = true;
  }

  // 화면 업데이트
  updateDisplay();
};