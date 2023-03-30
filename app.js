const express = require("express");
const mongoose = require("mongoose");
const { createDog, showForm } = require("./controllers/function");
const app = express();

app.set("view engine", "hbs");

mongoose
  .connect("mongodb://127.0.0.1:27017/dogs")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

app.get("/", showForm);

app.post("/dogs/:name/:age", createDog);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
