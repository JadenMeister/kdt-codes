

const textChange = document.getElementById("text")
const textChange2 = document.getElementById("text2")
const changeBtn = document.getElementById("btn")

let checkFlag = true;



  changeBtn.addEventListener('click', () => {
    if(checkFlag) {
      textChange.textContent = "짜잔";
      textChange2.textContent = "바뀜 ㅋㅋ ㅎㅇ";
      textChange.setAttribute('style', 'color: red;')
    } else{
      textChange.textContent = "내용";
      textChange2.textContent = "ㅎㅇ";
      textChange.setAttribute('style', 'color: black;')
    }
    checkFlag = !checkFlag
  });




