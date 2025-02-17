// function busOne(busPrice, isWangbok) {
//   if (isWangbok === true) {
//     let result = busPrice * 2;
//     return result;
//   } else {
//     let result = busPrice;
//     return result;
//   }
// }

// // 한번 환승 시 100원씩 , 10번은 얼마
// function busTwo(busPrice, count, add) {
//   let result = busPrice + count * add;
//   return result;
// }

// function first(busPrice) {
//   let result = busTwo(busPrice, 2, 100);
//   return result;
// }

// const firstResult = first(1400, true);
// console.log(firstResult);

// function first(busPrice, callback) {
//   callback(busPrice);
// }

// const firstResult = first(1400, function (busPrice) {
//   let result = busPrice * 2;
//   return result;
// });

// console.log(firstResult);
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

function forLoopForArray(targetArray, callback) {
  const arrayLength = targetArray.length;

  for (let i = 0; i < arrayLength; i++) {
    callback(targetArray[i], i, targetArray);
  }
}

forLoopForArray(students, function (students, index, array) {
  // console.log(students);

  console.log(index, array, students);
});

// students.forEach((element) => {
//   console.log(element);
// });
