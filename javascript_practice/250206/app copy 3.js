const itsMe = {
  name: "최정민",
  age: 26,
  tall: true,
  sentence: function () {
    console.log(this.name + "입니다.");
  },
  question: function () {
    console.log(this);
  }
};
itsMe.sentence();
itsMe.question();
