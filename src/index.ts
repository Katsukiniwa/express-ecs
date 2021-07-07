import express from "express";
import { novelRouter } from './infrastructure/router/novel'

const app = express();

app.get("/", (_request, response) => {
  response.send("Hello express ecs");
});

app.use(novelRouter);

app.get("/sample", (_request, response) => {
  response.send("sample");
});

app.listen(8080, () => {
  console.log("listen on 8080");
});
