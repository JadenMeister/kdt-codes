

const div = document.createElement('div')
div.setAttribute("id", "first-div")
document.body.appendChild(div)

const p = document.createElement('p')
p.innerText = "안녕"

document.querySelector("#first-div").append(p)


const btn = document.createElement('button')
btn.setAttribute("id", "btn")
const chgBtn = document.getElementById('btn')
btn.textContent = "클릭"

 
let isClicked = true

let isValid = true;


btn.addEventListener('click', () => {
  
  btn.textContent = isClicked ? "클릭" : "클릭되었습니다."
  
  

  
  
  
  isClicked =! isClicked
  
});

document.body.appendChild(btn)


