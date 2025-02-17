function someModel(gamePlatform, findGame) {
  for (let i = 0; i < gamePlatform.length; i++) {
    if (gamePlatform[i] === findGame) return true;
  }
}

someModel(nexon, "바람의나라 클래식");
