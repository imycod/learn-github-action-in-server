const http = require("http");

const server = http.createServer();

server.addListener("request", (request, response) => {
  console.log("request");
  response.writeHead(200, {
    "Content-Type": "text/html",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Content-Type, Content-Length, Authorization, Accept, X-Requested-With",
    "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, OPTIONS",
  });
  response.write("<h1>Hello World</h1>");
  response.end();
});

server.listen(5500, () => {
  console.log("server is running");
});
