

let root = document.getElementById('root')

let li = document.createElement('li')


let ul = root.children[0]

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



for (let i = 0; i < trainingDummyData.length; i++){
  for (let j = 0; j < trainingDummyData[i].name.length; i++){
    if (trainingDummyData[i].name[j] === "김") {
      console.log(trainingDummyData[i].name)
    }
  }
}

for (let i = 0; i < trainingDummyData.length; i++) { 
  if (trainingDummyData[i].name.includes("정민")) {
    
  }
}