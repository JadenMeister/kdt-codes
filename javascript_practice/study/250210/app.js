const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    if (req.url === "/") {
      const main = fs.readFileSync("main.html", "utf-8");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(main);
    }
  }
});

let PORT = 3002;

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} 에서 서버 도는 중`);
});
