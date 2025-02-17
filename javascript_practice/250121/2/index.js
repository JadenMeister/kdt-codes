

let root = document.getElementById('root')

let li = document.createElement('li')


let ul = root.children[0]

const students = [
  "김민지",
  "김요훈",
  "김윤지",
  "김재승",
  "손정민",
  "안은별",
  "윤종환",
  "최정민",
  "최현준",
  "전선일"
];

// for (let i = 0; i < students.length; i++){
//   ul.innerHTML +=`<li>${students[i]}</li>` 
  
// }


   function liTagMaker(array, parent) {
      for(let i = 0; i < array.length; i++) {
        
        if (array[i] === "김재승") {
          
          parent.innerHTML = parent.innerHTML + `<li>${array[i]} 소개팅 화이팅 </li>`;
          
        } 
        else {
          parent.innerHTML = parent.innerHTML + `<li>${array[i]}</li>`;
        }
      }
    }
    liTagMaker(students, ul);
  
// liTagMaster(students, ul)

