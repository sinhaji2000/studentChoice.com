const express = require("express");
const app = express();
const path = require("path");
const moongoose = require("moongoose");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render("index");
});

// app.use(stuedntRoutes);

app.listen(8080, () => {
  console.log("server run on port number 8080");
});
