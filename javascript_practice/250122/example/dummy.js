
let lists = document.getElementsByTagName("li")


const trainingDummyData = [
  { name: "김민지", food: "김치찌개" },
  { name: "김요훈", food: "불고기" },
  { name: "김윤지", food: "비빔밥" },
  { name: "김재승", food: "된장찌개" },
  { name: "손정민", food: "갈비탕" },
  { name: "안은별", food: "떡볶이" },
  { name: "윤종환", food: "삼계탕" },
  { name: "최정민", food: "육개장" },
  { name: "최현준", food: "순두부찌개" },
  { name: "전선일", food: "냉면" }
];



function nameChanged() {
  for (let i = 0; i < lists.length; i++){
    if (lists[i].textContent = trainingDummyData[i].name) {
      
    }
  }
}

nameChanged()


  //  let lists = document.getElementsByTagName("li");
  //   console.log(lists);

  //   function yesMan(array, target) {
  //     for(let i=0; i< array.length; i++) {
  //       if(array[i].textContent === target) {
  //         array[i].textContent = trainingDummyData[i].name;
  //       }
  //     }
  //   }

  //   yesMan(lists, lists);

// function nameChanged(array, target) {
//   for (let i = 0; i < array.length; i++){
//     if (array[i].textContext === target) {
//       array[i].textContext = trainingDummyData[i].name  
//     }
//   }
  
// }
// nameChanged(lists, "")

