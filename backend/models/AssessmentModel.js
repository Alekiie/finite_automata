const mongoose = require('mongoose');
const { Schema } = mongoose;

const AssessmentSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      type: String,
      required: true,
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true,
  },
  automataReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Automata', // Reference to an Automata model (if the quiz is about a specific automaton)
  },
  courseReference: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', // Reference to the Course model to which this quiz belongs
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', // Reference to the Users model (e.g., instructor)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Quiz = mongoose.model('Quiz', AssessmentSchema);
module.exports = Quiz;
