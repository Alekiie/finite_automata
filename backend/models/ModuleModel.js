const mongoose = require('mongoose');
const { Schema } = mongoose;

const ModuleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: [
    {
      type: {
        type: String,
        enum: ['text', 'video', 'quiz', 'exercise'], // The type of content (e.g., a text lesson, video, quiz, or exercise)
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      data: {
        type: Schema.Types.Mixed, // This could store text, video links, quiz questions, etc.
        required: true,
      },
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', // Reference to the Users model (instructor)
    required: true,
  },
  automataReferences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Automata', // References to automata related to this course
    },
  ],
  enrolledUserss: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // References to Userss who are enrolled in this course
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Module = mongoose.model('Module', ModuleSchema);
module.exports = Module;
