const { Dog } = require("../models/Dog");

const createDog = (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  const dog = new Dog({ name: name, age: age });

  dog
    .save()
    .then((newDog) => {
      console.log(`A new dog is created: ${newDog}!`);
      res.send("Success");
    })
    .catch((err) => {
      console.log(`Error while creating a new dog: ${err}`);
      res.send("Error");
    });
};

const showForm = (req, res) => {
  res.render("create-dog.hbs");
};

module.exports = { createDog, showForm };
