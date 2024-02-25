const { Schema, model } = require('mongoose');

// Define the workout schema
const workoutSchema = new Schema({
    // Name of the workout with validation
    name: {
        type: String,
        required: true,
        unique: true,
    },
    // instructor: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Instructor'
    // },
    // workout_type:{
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    exercise: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
});

// Create the Workout model from the schema
const Workout = model('Workout', workoutSchema);

// Export the Workout model
module.exports = Workout;