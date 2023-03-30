const { Dog } = require("../models/Dog");

const createDog = (req, res) => {
  const dogInfo = req.body;
  console.log(dogInfo);
  const dog = new Dog({ name: dogInfo.name, age: dogInfo.age });

  dog
    .save()
    .then((newDog) => {
      console.log(`A new dog is created: ${newDog}!`);
      res.render("success.hbs");
    })
    .catch((err) => {
      console.log(`Error while creating a new dog: ${err}`);
      res.send("Error");
    });
};

const showForm = (req, res) => {
  res.render("create-dog.hbs");
};

const showAllDogs = (req, res) => {
  Dog.find()
    .then((dogs) => {
      res.render("index.hbs", { dogs });
    })
    .catch((err) => {
      console.log(`Error while getting the dogs from the DB: ${err}`);
    });
};

module.exports = { createDog, showForm, showAllDogs };
