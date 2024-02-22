const { Schema, model} = require('mongoose');

const workoutSchema = new Schema(
    {
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
            ref: 'Excercise'
        }]
    }
);

const Workouts = model('Workout', workoutSchema);

module.exports = Workouts;