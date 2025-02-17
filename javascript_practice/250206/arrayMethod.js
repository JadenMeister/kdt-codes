const fruits = ["apple", "banana", "cherry", "pineApple", "elderberry"];

Array.prototype.at(); //  정숫값을 받아 해당 인덱스에 있는 항목을 반환하며, 양수와 음수를 사용할 수 있음, 음의 정수는 배열의 마지막 항목부터 거슬러 센다.
// console.log(fruits.at(2)); //cherry 반환

Array.prototype.concat(); // 두 개 이상의 배열을 병합하는 데 사용됨. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환
// console.log(fruits.concat(["하이"])); //새로운 배열
// console.log(fruits); // 배열이 두개가 됨

// Array.prototype.copyWithin(); // 배열의 일부분을 복사하여 배열 내의 다른 위치에 덮어 씌움

// console.log(fruits.copyWithin(fruits, 2, 3));
// Array.prototype.entries(); // 배열의 인덱스와 값을 포함하는 배열의 iterator 객체를 반환
// Array.prototype.every(); //배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 배열 반복자 객체를 반환
// const copy1 = fruits.entries();
// console.log(copy1.next().value); //[ 0, 'apple' ]
// console.log(copy1.next().value); //[ 1, 'banana' ]
// Array.prototype.fill(); //배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경합니다. 그리고 수정된 배열을 반환
// console.log(fruits.fill(2, 0, 1)); //fruits 배열에서 0번 인덱스부터 1번 인덱스 전까지의 범위에 값을 2로 채우라는 의미, 즉 0번만 됨 end는 포함안됨

// Array.prototype.filter(); // 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링

// console.log(fruits.filter((fruits) => fruits.length < 15)); //fruites에 요소에 길이가 15개 이상인것만 출력

// Array.prototype.find(); // 배열 요소 찾기
// console.log(fruits.find((fruits) => fruits.length > 10)); // 길이가 10개인 요소 찾기

// Array.prototype.findIndex(); //인덱스 번호 찾기
console.log(fruits.findIndex((fruits) => (fruits.length = 6)));
// Array.prototype.findLast(); // 마지막 요소 찾기
// Array.prototype.findLastIndex(); // 마지막 인덱스 찾기
// Array.prototype.flat();
// Array.prototype.flat();
// Array.prototype.flatMap();
// Array.prototype.forEach(); // 배열의 길이만큼 반복
// Array.prototype.includes(); // 배열에 특정 요소를 포함하는지 확안
// Array.prototype.indexOf(); //  배열에서 주어진 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 없다면 -1 반환
// Array.prototype.join(); // 배열의 모든 요소를 쉼표나 지정된 구분 문자열로 구분하여 연결한 새 문자열을 만들어 반환
// Array.prototype.keys();
// Array.prototype.lastIndexOf();
// Array.prototype.map(); //  배열의 각 요소를 순회하여 콜백 함수를 적용한 결과를 모아 새로운 배열을 반환
// Array.prototype.pop(); // 배열에서 마지막 요소를 제거하고 그 요소를 반환
// console.log(fruits.pop()); // 마지막 요소 출력
// console.log(fruits); // pop으로 출력된 마지막 요소가 제거된 상태의 배열 출력
// Array.prototype.push(); // 배열의 마지막에 요소 추가
// Array.prototype.reduce();
// Array.prototype.reduceRight();
// Array.prototype.reverse(); // 배열을 뒤집어 반환
// Array.prototype.shift();
// Array.prototype.slice(); // 배열의 시작 부터 끝 까지(끝은 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
// Array.prototype.some();
// Array.prototype.sort(); // 배열 정렬
// Array.prototype.splice(); //배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
// Array.prototype.toLocaleString(); //배열의 요소를 나타내는 문자열을 변환되고 이 문자열은 locale 고유 문자열(가령 쉼표 ",")에 의해 분리됨
// Array.prototype.toReversed();
// Array.prototype.toSorted();
// Array.prototype.toSpliced();
// Array.prototype.toString(); //해당 object를 표현하는 문자열을 반환
// Array.prototype.unshift();
// Array.prototype.values(); // 배열에서 각 인덱스에 대한 값을 순회하는 array iterator 객체를 반환
// Array.prototype.with();
