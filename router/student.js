const express = require("express");
const Router = express.Router();
const student = require("../controller/studentController");

Router.get("/", student.teacherCard);
Router.get("/signup", student.getSignUp);
Router.post("/signup", student.postSignup);

module.exports = Router;
