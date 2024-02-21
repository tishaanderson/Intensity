const { Schema, model} = require('mongoose');

const exerciseSchema =  new Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    sets:  {
        type: Number,
        required: true
      },
    reps: {
        type: Number,
        required: true
      },
    duration_minutes:  {
        type: Number,
        required: false
      }
});

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;


