//this가 a를 가리킴
const a = function () {
  console.log("함수 a의 this: ", this);
};
// 전역객체를 가르킴 빈 객체
const b = () => {
  console.log("함수 b의 this: ", this);
};
a();
b();
