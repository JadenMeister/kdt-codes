const students = [
  {
    order: 1,
    name: "김민지",
    food: { like: ["짜장면", "짬뽕"], hate: ["피자"] }
  },
  {
    order: 2,
    name: "김요훈",
    food: { like: ["햄버거", "초밥"], hate: ["라면"] }
  },
  {
    order: 3,
    name: "김윤지",
    food: { like: ["피자", "라면"], hate: ["떡볶이"] }
  },
  {
    order: 4,
    name: "김재승",
    food: { like: ["초밥", "떡볶이"], hate: ["짜장면"] }
  },
  {
    order: 5,
    name: "손정민",
    food: { like: ["짜장면", "파스타"], hate: ["짬뽕"] }
  },
  {
    order: 6,
    name: "안은별",
    food: { like: ["짬뽕", "김밥"], hate: ["초밥"] }
  },
  {
    order: 7,
    name: "윤종환",
    food: { like: ["피자", "치킨"], hate: ["햄버거"] }
  },
  {
    order: 8,
    name: "최정민",
    food: { like: ["햄버거", "라면"], hate: ["파스타"] }
  },
  {
    order: 9,
    name: "최현준",
    food: { like: ["짜장면", "떡볶이"], hate: ["김밥"] }
  },
  {
    order: 10,
    name: "전선일",
    food: { like: ["초밥", "파스타"], hate: ["피자"] }
  }
];

function firstNormal() {
  console.group("콜백 함수를 사용하지 않는 방식");

  function getStudentNames() {
    const names = [];
    for (let i = 0; i < students.length; i++) {
      names[i] = students[i].name;
    }
    return names;
  }

  function getLikedFoods() {
    const likes = [];
    for (let i = 0; i < students.length; i++) {
      likes[i] = students[i].food.like;
    }
    return likes;
  }

  function getHatedFoods() {
    const hates = [];
    for (let i = 0; i < students.length; i++) {
      hates[i] = students[i].food.hate;
    }
    return hates;
  }

  console.log("학생 이름 목록");
  console.table(getStudentNames());

  console.log("좋아하는 음식 목록:");
  console.table(getLikedFoods());

  console.log("싫어하는 음식 목록:");
  console.table(getHatedFoods());

  console.groupEnd();
}

function secondCallback() {
  console.group("콜백 함수를 사용하는 방식");

  function processStudentData(processFunction) {
    const result = [];
    for (let i = 0; i < students.length; i++) {
      result[i] = processFunction(students[i]);
    }
    return result;
  }

  function getName(student) {
    return student.name;
  }

  function getLikes(student) {
    return student.food.like;
  }

  function getHates(student) {
    return student.food.hate;
  }

  function getStudentSummary(student) {
    return {
      이름: student.name,
      좋아하는음식: student.food.like,
      싫어하는음식: student.food.hate
    };
  }

  console.log("학생 이름 목록:");
  console.table(processStudentData(getName));

  console.log("좋아하는 음식 목록:");
  console.table(processStudentData(getLikes));

  console.log("싫어하는 음식 목록:");
  console.table(processStudentData(getHates));

  console.log("학생별 음식 취향 요약:");
  console.table(processStudentData(getStudentSummary));

  console.groupEnd();
}

console.group("함수 실행 결과 비교");
firstNormal();
secondCallback();
console.groupEnd();
