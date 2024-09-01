const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const stuedntRoutes = require("./router/student");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render("index");
});
app.use("/student", stuedntRoutes);
// app.use(stuedntRoutes);

mongoose
  .connect("mongodb://localhost:27017/")
  .then((result) => {
    // console.log(result, "connect to databse");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });