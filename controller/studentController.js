const Student = require("../model/student");

exports.teacherCard = (req, res, next) => {
  res.render("student/teacherCard", {
    pageTitle: "tecaherCard",
  });
};

exports.getSignUp = (req, res, next) => {
  res.render("student/studentSignup");
};

exports.postSignup = (req, res, next) => {
  const name = req.body.name;
  const student = new Student({
    name: name,
  });
  student.save();
  res.redirect("/");
};
