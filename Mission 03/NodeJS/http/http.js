const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Progremmers ! \n");
    res.write("How are you Doing ?");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is About Page !");
    res.end();
  } else {
    res.write("Not Found Page !");
    res.end();
  }
});

server.listen(3000);

console.log(`Listening on port 3000`);
