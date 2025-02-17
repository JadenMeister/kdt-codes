// - 첫 번째 매개변수로 `title`(문자열)을 받습니다.
// - 이후의 모든 숫자를 받아 합을 구합니다.
// - `"title: 합계"` 형식의 문자열을 반환합니다.

// ### **예제 출력**
// console.log(sum("총합", 10, 20, 30)); // "총합: 60" 출력
// console.log(sum("결과", 5, 15, 25, 35)); // "결과: 80" 출력

function sum(title, ...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return `${title} : ${sum}`;
}
console.log(sum("총합", 10, 20, 30));
console.log(sum("결과", 5, 15, 25, "D", 35));

function sayhi(name) {
  let defalutName = "친구";

  if (name === undefined) {
    console.log(`안녕하세요 ${defalutName}님 `);
  } else {
    console.log(`안녕하세요 ${name}님 `);
  }
}

sayhi();
sayhi("정민");

// 아래 조건을 만족하는 `processUser` 함수를 작성하세요.

// - `name`(이름)과 `callback`(콜백 함수)을 매개변수로 받습니다.
// - `name`이 주어지지 않으면 기본값 "친구"를 사용합니다.
// - `callback` 함수는 `name`을 이용해 인사말을 출력합니다.
// - `processUser` 함수 안에서 `callback`을 호출하여 인사말을 출력합니다.
