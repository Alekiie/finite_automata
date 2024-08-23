const mongoose = require('mongoose');
const { Schema } = mongoose;

const enrollmentSchema = new Schema({
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
  status: {
    type: String,
    enum: ['active', 'completed', 'dropped'],
    default: 'active',
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  completionDate: {
    type: Date,
  },
  progress: {
    type: Number,
    default: 0, // Course progress percentage
  },
  lastAccessed: {
    type: Date,
    default: Date.now,
  },
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
module.exports = Enrollment;
