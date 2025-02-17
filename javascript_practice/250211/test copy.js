const stringData = "name=d&message=a";

function splitString(string) {
  let result = [];
  let first = string.split("&");
  console.log(first);
  let extFirstName = first[0].split("=")[1];
  let extMessages = first[1].split("=")[1];
  console.log(extFirstName);
  console.log(extMessages);
}

splitString(stringData);
