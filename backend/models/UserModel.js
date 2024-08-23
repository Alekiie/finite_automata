const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['student', 'admin', 'instructor'],
    default: 'student',
  },
  automata: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Automata',
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

UserSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Users = mongoose.model("Users", UserSchema);
module.exports = Users;
