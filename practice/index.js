const jungmin = {
  name: "Jungmin", 
  age: 25, 
  occupation: "Software Engineer",
  what : {
    like : ["오이"],
    hate : ["미식축구"]
  }
}

const eeing = [];


for ( let key in jungmin) {
  eeing.push(key);
}

let aaeing = [];
for(let i = 0; i < eeing.length; i++) {
  if(typeof(eeing[i]) === "object") {
    for(let key in eeing[i]) {
      if(typeof(key) !== "object") {
        aaeing.push(key);
      }
    }
  }
}

