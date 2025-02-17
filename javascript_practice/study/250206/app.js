// 한국어 영어 일본어 << 한글로 < 인자로 주고

// hello(한국어)

// hello(영어)

// hello(일본어)

//** *     입력하는 언어 이름에 따라 그 언어로 인사를 출력하는 함수를 구현

//**3개의 인자를 받고 첫번째 인자는 년도에 해당하는 숫자, 두번째 인자는 월에 해당하는 숫자, 세번째 인자는 일에 해당하는 숫자를 넣어서 구현**

//** findSmallestElement 함수를 구현하고 findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열을 만들어 arr 의 값 콘솔 출력

function language(language) {
  if (language === "한국어") {
    console.log("한국어로: 안녕하세요");
  } else if (language === "영어") {
    console.log("영어로: Hello");
  } else if (language === "일본어") {
    console.log("일본어로: 곤방와");
  }
}

language("한국어");
language("영어");
language("일본어");

function calender(years, months, dates) {
  console.log(`"지금은 ${years} 년 ${months}월 ${dates}일 입니다."`);
}

calender(2025, 8, 25);

function findSmallestElement(array) {
  console.log(array);
}

findSmallestElement([0, 1, 2, 3]);
