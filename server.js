const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//MongoDB Config
mongoose
  .connect("mongodb://localhost:27017/mypostsDB")
  .catch((err) => console.log(err));

//DB Schema and Model
const postSchema = mongoose.Schema({
  title: String,
  description: String,
  name: String,
  age: String,
  gender: String,
  breed: String,
  color: String,
  weight: String,
  intakedate: String,
  spayed: String,
  vaccinated: String,
  historylog: String,
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  res.send("Express is here");
});

app.post("/create", (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    breed: req.body.breed,
    color: req.body.color,
    weight: req.body.weight,
    intakedate: req.body.intakedate,
    spayed: req.body.spayed,
    vaccinated: req.body.vaccinated,
    historylog: req.body.historylog,
  })
    .then((doc) => console.log(doc))
    .catch((err) => log);
});

app.get("/posts", (req, res) => {
    Post.find()
      .then((items) => res.json(items))
      .catch((err) => console.log(err));
  });

  app.delete("/delete/:id", (req, res) => {
    Post.findByIdAndDelete({ _id: req.params.id })
      .then((doc) => console.log(doc))
      .catch((err) => console.log(err));
});

app.listen(5000, function () {
  console.log("Server is running");
});
