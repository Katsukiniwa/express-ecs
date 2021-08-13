import express from "express";

const app = express();

app.get("/", (_request, response) => {
  response.send("Hello express ecs ver4");
});

app.get("/sample", (_request, response) => {
  response.send("sample");
});

app.listen(8080, () => {
  console.log("listen on 8080");
});
