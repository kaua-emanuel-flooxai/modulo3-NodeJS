const http = require("http");

const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("METHOD:", req.method);

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          users: [
            {
              name: "Kaua",
              email: "kaua.prado@gmail.com",
              id: "1",
            },
          ],
        })
      );
      break;

    case "/users":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>Olá Mundo</h1>");
      break;

    default:
      res.statusCode = 404;
      res.end("Not found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor rodando em http://127.0.0.1:3000");
});
