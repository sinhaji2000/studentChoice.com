const express = require("express");
const app = express();
const path = require("path");
console.log(path.join(__dirname, "views"));

// const stuedntRoutes = require("./router/student");

app.set("view engine", "ejs");

// Set the directory where your views are located
app.set("views", "views");

// app.use(stuedntRoutes);

app.listen(8080, () => {
  console.log("server run on port number 8080");
});
