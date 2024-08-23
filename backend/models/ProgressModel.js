const mongoose = require('mongoose');
const { Schema } = mongoose;

const learningProgressSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', // Reference to the User model
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module', // Reference to the Course model
    required: true,
  },
  completedExercises: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz', // Reference to completed Quiz/Exercise models
    },
  ],
  progressPercentage: {
    type: Number, // Percentage of course completion (0-100)
    default: 0,
  },
  lastAccessed: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update the updatedAt field automatically
learningProgressSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const LearningProgress = mongoose.model('LearningProgress', learningProgressSchema);
module.exports = LearningProgress;
