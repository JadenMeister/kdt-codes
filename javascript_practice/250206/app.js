// //todo a라는 걸 받으면, 호출할 때 로직을 결정할 것
// function first(a, callback) {
//   callback(a);
// }
// first(1, (a) => {
//   console.log(a + 1);
// });
function nene() {
  return ["김", "재", "승"];
}
// nene().filter((item) => {
//   if (item === "승") {
//     console.log(item);
//     return item;
//   }
// });
//todo : nene 함수에 있는 배열 에서 필터를 돌린다. 매개변수는 item, item에 "승"이 있다면, 승의 0번째에 리를 추가한다.  // 승리 출력
//todo : 잘 쓰이진 않는다. 코드가 짧고 간결한 장점이 있지만, 가독성은 떨어진다.
//todo:  라이브러리를 사용하는 것은 기술이 아니다. 그냥 만들어 쓰자. (어떻게 만들지,,)
const test = nene().filter((item) => item === "승")[0] + "리";
console.log(test);
