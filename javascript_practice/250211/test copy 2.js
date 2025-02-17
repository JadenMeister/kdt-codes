const fs = require("fs");

function splitString(string) {
  let result = [];
  let first = string.split("&");

  first.forEach((data) => {
    let value = data.split("=")[1];
    result.push(value);
  });
  console.log(first);
  // let extFirstName = first[0].split("=")[1];
  // let extMessages = first[1].split("=")[1];
  // console.log(extFirstName);
  // console.log(extMessages);

  console.log(`
    <html>
    <head>
    <title>%{result[0]}</title>
    </head>
    <body>
    <h1>name : ${result[0]}</h1>
    <h1>message : ${result[1]}</h1>
    </body>
    </html>
    
    
    `);
  console.log(`LastName :${result[0]}`);
  console.log(`FirstName :${result[1]}`);
  console.log(result[1]);
}

const stringData = fs.readFileSync("./hi.text", "utf-8");
splitString(stringData);
