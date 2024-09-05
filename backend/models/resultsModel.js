const mongoose = require("mongoose");

const ResultsModel = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  testIndex: {
    type: Number,
    required: true,
  },
  testScore: {
    type: Number,
    required: true,
  },
  testDate: {
    type: Date,
    default: Date.now,
  },
});

const Results = mongoose.model("result", ResultsModel);
module.exports = Results;
