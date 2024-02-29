// Importing Schema and model from mongoose to define the schema and create the model
const { Schema, model } = require('mongoose');

// Defining the exercise schema using the Schema constructor
const exerciseSchema = new Schema({
  // Name of the exercise, must be a string and is required
  name: {
    type: String,
    required: true,
    unique: true, // Ensures uniqueness of exercise names
  },
  // Number of sets for the exercise, must be a number and is required
  sets: {
    type: Number,
    required: false,
  },
  // Number of reps for the exercise, must be a number and is required
  reps: {
    type: Number,
    required: false,
  },
  // Duration of the exercise in minutes, optional field
  duration_minutes: {
    type: Number,
    required: false,
  },
  exercise_type: {
    type: String,
  },
  image: {
    type: String,
  }
  // Reference to the workout type associated with the exercise
  // workout_type: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Workout', // Refers to the Workout model
  // }],
});

// Creating the Exercise model using the exercise schema
const Exercise = model('Exercise', exerciseSchema);

// Exporting the Exercise model to use it in other parts of the application
module.exports = Exercise;