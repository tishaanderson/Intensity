// Importing necessary models and utilities
const { Workout, Exercise, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Defining resolvers for GraphQL queries and mutations
const resolvers = {
  Query: {
    user: async (_, vars, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('exercise')
      }
    },
    // Resolver for fetching all workouts
    workouts: async () => {
      try {
        const workouts = await Workout.find();
        return workouts;
      } catch (err) {
        throw new Error(err);
      }
    },
    // Resolver for fetching a workout by its ID
    workout: async (_, { id }) => {
      try {
        const workout = await Workout.findById(id);
        return workout;
      } catch (err) {
        throw new Error(err);
      }
    },
    workouts: async () => {
      try {
        const workouts = await Workout.find();
        return workouts;
      } catch (err) {
        throw new Error(err);
      }
    },
    // Resolver for fetching all exercises
    exercises: async () => {
      try {
        const exercises = await Exercise.find();
        return exercises;
      } catch (err) {
        throw new Error(err);
      }
    },
    // Resolver for fetching an exercise by its ID
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
    // Resolver for adding a new user
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken({ username, email, _id: user._id });
      return { token, user };
    },
    // Resolver for user login
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      console.log(username, password)
      if (!user) {
        throw AuthenticationError;
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    // Resolver for adding a new workout
    addWorkout: async (_, { name, image, exerciseIds }, context) => {
      console.log(context);
      const workout = new Workout({
        name,
        image,
        exercises: exerciseIds
      });
      try {
        const result = await workout.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
    // Resolver for adding a new exercise
    addExercise: async (_, { name, sets, reps, duration_minutes, exercise_type }) => {
      const exercise = new Exercise({
        name,
        sets,
        reps,
        duration_minutes,
        exercise_type
      });
      try {
        const result = await exercise.save();
        return result;
      } catch (err) {
        throw new Error(err);
      }
    },
    addUserExercise: async (_, { id }, context) => {

      console.log(context.user.data)

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { exercise: id } },
        { new: true }
      ).populate('exercise')

      return user;
    }
  }
};

// Exporting the resolvers
module.exports = resolvers;