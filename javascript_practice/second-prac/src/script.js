let root = document.getElementById('root');

// let h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World';
// root.appendChild(h1);

let ul = document.createElement('ul');
let li = document.createElement("li")


let button = document.createElement("button")

button.setAttribute("id", "colorChange_btn")
button.setAttribute('onclick', 'changedColor()')

root.append(button)

button.textContent = "색상 바꾸기 버튼"


function randomColor() {

  let red = Math.floor(Math.random()*256)
  let green = Math.floor(Math.random() * 256)
  let blue = Math.floor(Math.random()*256)
  return `rgb(${red}, ${green}, ${blue})`;
}

function changedColor() {
  root.ul.style.color  = randomColor()
}







function containerAndItem(containerTag, itemTag, prefixText, repeatCount) {
  let someContainer = document.createElement(containerTag);
  
  // console.log(typeof (someContainer))
  // console.log(someContainer[0])

  for(let i = 0; i < repeatCount; i++) {
    let someItem = document.createElement(itemTag);
    someItem.textContent = `${prefixText}${i + 1}`;
    someContainer.appendChild(someItem);
    
    
    
    someItem.style.color = "blue";
    
    
    
  }
  
  return someContainer;
  
}






 
for(let i = 0; i < 100; i++) {
  root.appendChild(containerAndItem("ul", "li", `item-${i + 1}-`, 10));


  
}
