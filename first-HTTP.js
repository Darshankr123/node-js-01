const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello world");
});

server.listen(3000, () => {
  console.log("example app listening on port 5000");
});
