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
  content: 
    {
      // type: {
      //   type: String,
      //   enum: ['text', 'video', 'quiz', 'exercise'], // The type of content (e.g., a text lesson, video, quiz, or exercise)
      //   required: true,
      // },
      // title: {
      //   type: String,
      //   required: true,
      // },
      // data: {
      //   type: Schema.Types.Mixed, // This could store text, video links, quiz questions, etc.
      //   required: true,
      // },
      type: String,
      required: true,
      trim : true,
    },
  
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', 
  },
  automataReferences: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Automata', 
    },
  ],
  enrolledUsers: [ // Fixed the typo
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users', // References to Users who are enrolled in this course
    },
  ],
}, {
  timestamps: true, // Automatically manages `createdAt` and `updatedAt`
});

const Module = mongoose.model('Module', ModuleSchema);
module.exports = Module;
