const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      const post = fs.readFileSync("post.html", "utf-8");

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(post);
      res.end();
    } else if (req.url === "/test.js") {
      const test = fs.readFileSync("test.js", "utf-8");

      res.writeHead(200, { "Content-Type": "text/javascript; charset=utf-8" });
      res.write(test);
      res.end();
    }
  }

  if (req.method === "POST") {
    if (req.url === "/test") {
      req.on("data", function (data) {
        fs.writeFileSync("hi.text", data);

        const text = fs.readFileSync("hi.text", "utf-8");
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.write(text);
        res.end();
      });

      req.on("end", function () {
        function splitString(string) {
          let result = [];
          let first = string.split("&");

          first.forEach((data) => {
            let value = data.split("=")[1];
            result.push(value);
          });
          console.log(first);

          console.log(`LastName :${result[0]}`);
          console.log(`FirstName :${result[1]}`);
          console.log(result[1]);
        }

        const stringData = fs.readFileSync("./hi.text", "utf-8");
        splitString(stringData);
      });
    }
  }
});

let PORT = 3004;

server.listen(PORT);

console.log(`http://localhost:${PORT}`);
