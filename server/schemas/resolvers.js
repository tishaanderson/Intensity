const Workout = require('./models/Workout');
const Exercise = require('./models/Exercise');

const resolvers = {
  Query: {
    workouts: async () => {
      try {
        const workouts = await Workout.find();
        return workouts;
      } catch (err) {
        throw new Error(err);
      }
    },
    workout: async (_, { id }) => {
      try {
        const workout = await Workout.findById(id);
        return workout;
      } catch (err) {
        throw new Error(err);
      }
    },
    exercises: async () => {
      try {
        const exercises = await Exercise.find();
        return exercises;
      } catch (err) {
        throw new Error(err);
      }
    },
    exercise: async (_, { id }) => {
      try {
        const exercise = await Exercise.findById(id);
        return exercise;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    createWorkout: async (_, { name, exerciseIds }) => {
      const workout = new Workout({
        name,
        exercises: exerciseIds
      });
      try {
        const result = await workout.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
    createExercise: async (_, { name, sets, reps, duration_minutes }) => {
      const exercise = new Exercise({
        name,
        sets,
        reps,
        duration_minutes
      });
      try {
        const result = await exercise.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
  }
};

module.exports = resolvers;
