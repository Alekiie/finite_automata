const mongoose = require('mongoose');
const { Schema } = mongoose;

const automataSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  states: {
    type: [String], // An array of state names
    required: true,
  },
  alphabet: {
    type: [String], // An array of input symbols (e.g., ['a', 'b', 'c'])
    required: true,
  },
  initialState: {
    type: String, // The starting state
    required: true,
  },
  acceptingStates: {
    type: [String], 
    required: true,
  },
  transitions: [
    {
      from: {
        type: String, 
        required: true,
      },
      to: {
        type: String, 
        required: true,
      },
      symbol: {
        type: String, 
        required: true,
      },
    },
  ],
  type: {
    type: String, 
    enum: ['DFA', 'NFA'],
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Users',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Automata = mongoose.model('Automata', automataSchema);
module.exports = Automata;
