// const nene = "김재승"; // 전역 스코프

// function a() {
//   const nene = "김요훈"; // 지역 스코프

//   return nene;
// }

// console.log(a());
// // 김요훈 출력

// const nene = "김재승"; // 전역 스코프

// function a() {
//   const nono = "김요훈"; // 지역 스코프

//   return nene;
// }

// a();

// console.log(nono);
// // 김요훈 출력
function a() {
  function b() {
    return {
      truth: "안녕하세요"
    };
  }
}

const result = b();
result.truth = "안녕못해";
console.log(result.truth);

a();
