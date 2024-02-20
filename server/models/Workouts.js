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
        exercise: [{
            type: Schema.Types.ObjectId,
            ref: 'Excercise'
        }]
    }
);

const Workouts = model('Workouts', workoutSchema);

module.exports = Workouts;