import express from "express";

const app = express();

app.get("/", (_request, response) => {
  response.send("Hello World");
});

app.listen(8080, () => {
  console.log("listen on 8080");
});
