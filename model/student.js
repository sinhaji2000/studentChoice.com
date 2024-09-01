const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("student", StudentSchema);
