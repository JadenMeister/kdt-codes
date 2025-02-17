//todo 
// **버튼 클릭으로 색상 변경**: 웹 페이지에 버튼을 만들고, 그 버튼을 클릭할 때마다 배경색이 랜덤으로 바뀌게 만드세요.
// **동적으로 리스트 추가하기**: 텍스트 박스에 입력된 값을 버튼 클릭 시 리스트 항목으로 추가하고, 추가된 항목을 삭제할 수 있는 기능을 만들어 보세요.
// **이미지 슬라이드**: 여러 장의 이미지를 배열로 만들어두고, 버튼을 클릭할 때마다 이미지를 순차적으로 보여주는 이미지 슬라이드를 만들어 보세요.
// **시간 표시**: 웹 페이지에 현재 시간을 실시간으로 표시하는 시계를 만들어 보세요. 시간은 1초마다 업데이트됩니다.
// **폼 검증**: 사용자로부터 이름, 이메일, 전화번호를 받는 폼을 만들고, 각 항목을 입력받을 때 유효성을 검사하는 기능을 구현해 보세요. 유효하지 않은 입력에는 경고 메시지가 표시됩니다.

let button = document.createElement("button")

button.setAttribute("id", "colorChange_btn")
button.setAttribute('onclick', 'changedBackgroundColor()')




document.body.append(button)

button.textContent = "색상 바꾸기 버튼"


function randomColor() {

  let red = Math.floor(Math.random()*256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random()*256)
  return `rgb(${red}, ${green}, ${blue})`;
}

function changedBackgroundColor() {
  document.body.style.backgroundColor  = randomColor()
}








