const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number, // Duration in minutes or hours
  },
});

const enrollmentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', 
    required: true,
  },
  moduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Module', 
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
  studySessions: [sessionSchema], // Add an array to store study sessions
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
module.exports = Enrollment;
