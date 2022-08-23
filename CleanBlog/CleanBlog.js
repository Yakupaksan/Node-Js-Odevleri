const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const path = require("path");
const ejs = require("ejs");
const app = express();
const methodOverride = require("method-override");
const pageController = require("./controllers/pageController");
const postController = require("./controllers/postController");
const AddPost = require("./models/AddPost");

mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//MIDDLEWARES
app.get("/", postController.getAllPosts);

app.get("/about", pageController.getAboutPage);

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.post("/AddPost", pageController.getAddPage);

app.get("/addposts/:id", postController.getPost);

app.get("/addposts/edit/:id", pageController.getEditPage);

app.put("/addposts/:id", postController.getUpdate);

app.delete("/addposts/:id", postController.getDelete);

const post = 3000;
app.listen(post, () => {
  console.log(`${post} numarali post basarili bir sekilde acildi. `);
});
