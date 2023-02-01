const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Middleware
const app = express();
// app.use(express.json());
// app.use(bodyParser.json({limit: "30mb", extended: true}))
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// app.use(express.urlencoded({ extended: false } ));
app.use(cors());


//MongoDB Config
// mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb+srv://chutauru:m33kv41n@chutaurucluster.nuaxuh3.mongodb.net/?retryWrites=true&w=majority")
  .catch((err) => console.log(err)); 

//DB Schema and Model
const postSchema = mongoose.Schema({
  status: String,
  name: String,
  age: String,
  breed: String,
  color: String,
  weight: String,
  intakedate: String,
  vaccinated: String,
  description: String,
  historylog: String,
  status: String,
  gender: String,
  spayed: String,
  selectedFile: String,
});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  res.send("Express is here");
});

app.post("/create", (req, res) => {
    const newPost = new Post({
    status: req.body.status,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    breed: req.body.breed,
    color: req.body.color,
    weight: req.body.weight,
    intakedate: req.body.intakedate,
    spayed: req.body.spayed,
    vaccinated: req.body.vaccinated,
    description: req.body.description,
    historylog: req.body.historylog,
    selectedFile: req.body.selectedFile,
  })
    newPost.save()
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

app.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id},
    {
      status: req.body.status,
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      breed: req.body.breed,
      color: req.body.color,
      weight: req.body.weight,
      intakedate: req.body.intakedate,
      spayed: req.body.spayed,
      vaccinated: req.body.vaccinated,
      description: req.body.description,
      historylog: req.body.historylog,
      selectedFile: req.body.selectedFile,
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});




app.listen(5000, function () {
  console.log("Server is running");
});
