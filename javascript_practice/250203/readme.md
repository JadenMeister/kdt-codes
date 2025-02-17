# 첫번째 함수

getStudentNames, getLikedFoods, getHatedFoods

각각의 함수에 반복문을 students 배열의 길이만큼 돌려
데이터를 하나씩 출력하는 함수

# 두번째 함수

getName, getLikes, getHates 함수에 각 각 해당하는 데이터들을 result 배열에 담고

processStudentData 함수는 인수로 getName, getLikes, getHates 를 받는다. (콜백함수)

processStudentData가 실행될 때 result 안에 있는 데이터들이 출력된다.

```JavaScript
  function processStudentData(processFunction) {
    const result = [];
    for (let i = 0; i < students.length; i++) {
      result[i] = processFunction(students[i]);
    }
    return result;
  }
```

이 processStudentData 는 인수로 processFunction를 받는다.
processFunction은 result라는 값을 반환하는 함수.

students라는 객체의 배열 길이 만큼 반복문을 돌려 반환하는 함수이다.

```JavaScript

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

```

각각의 getName, getLikes, getHates 함수는 students 배열의 길이만큼 호출

getName에서 10번(배열의 길이)의 호출 후 데이터를 result 배열에 담고

다음 getLikes도 10번의 호출 후 데이터를 result 배열에 담고
다음 함수에도 똑같이 적용된다.

processStudentData(processFunction) 의 처음 형태는
processStudentData(getName) 이 된다.

processFunction = getName

for문으로 배열의 길이만큼 돌면서 result에 반환하게 된다.
배열의 길이만큼 반복 후 배열이 완성되면 반환하게 됨

나머지 getLikes, getLikes, getHates 함수도 동일하게 동작

getStudentSymmary라는 함수에 새로운 객체를 만들어 result에 담아 console.table로 table형식으로 반환하게됨

```JavaScript
  function getStudentSummary(student) {
    return {
      이름: student.name,
      좋아하는음식: student.food.like,
      싫어하는음식: student.food.hate
    };
  }
```

processStudentData는 인수로 processFunction을 받음. 여기서processFunction 자체는 데이터를 담고 있지 않고, 단순히 실행되면서 데이터를 반환하는 역할을 함. 즉, processStudentData가 실행될 때 processFunction의 값을
console.table에 담아 출력함
