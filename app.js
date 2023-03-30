const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const bodyParser = require("body-parser");
const { createDog, showForm, showAllDogs } = require("./controllers/function");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
//include partials
hbs.registerPartials(__dirname + "/views/partials");

mongoose
  .connect("mongodb://127.0.0.1:27017/dogs")
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

app.get("/", showAllDogs);

app.get("/dogs/create", showForm);

app.post("/submit-dog", createDog);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
