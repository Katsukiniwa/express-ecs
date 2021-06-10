import express from "express";

const app = express();

app.get("/", (_request, response) => {
  response.send("Hello express ecs");
});

app.listen(8080, () => {
  console.log("listen on 8080");
});
