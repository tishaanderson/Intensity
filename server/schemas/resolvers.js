

const { Workout, Exercise, User} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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
    addUser: async (_, {username, email, password}) => {
      const user = await User.create({username, email, password})
      const token = signToken({username, email, _id: user._id})
      return { token, user}
    },

    login: async (_, {username, password}) => {
      const user = await User.findOne({username});
      if (!user){throw AuthenticationError};
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword){throw AuthenticationError};
      const token = signToken(user);
      return { token, user};
    },

    addWorkout: async (_, { name, exerciseIds }) => {
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
    addExercise: async (_, { name, sets, reps, duration_minutes }) => {
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