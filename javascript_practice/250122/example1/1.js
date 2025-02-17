let jongCircle = {

  name: "윤종환"
}


jongCircle.food = {
  like: [],
  hate: []
}
jongCircle.food.like = [];
jongCircle.food.hate = [];

jongCircle.food.like[0] = "갈비탕";
jongCircle.food.like[1] = "순대국";
jongCircle.food.hate[0] = "고수풀";
jongCircle.food.hate[1] = "향이 강한 음식";

console.dir(jongCircle)




// jongCircle.likeFoodSentence = jongCircle.food.like[0] + "과" + jongCircle.food.like[1] + "을 좋아합니다."

// console.log(jongCircle.likeFoodSentence)

//갈비탕
// 고수

jongCircle.foodSentence = function (first, second ){
  return first + "과" + second + "를 좋아합니다."
}
jongCircle.hateFoodSentence = function (first, second ){
  return first + "과 " + second + "를 싫어합니다."
}

console.log(jongCircle.foodSentence(jongCircle.food.like[0], jongCircle.food.like[1]))
console.log(jongCircle.hateFoodSentence(jongCircle.food.hate[0], jongCircle.food.hate[1]))
