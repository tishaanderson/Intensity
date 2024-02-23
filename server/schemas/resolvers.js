const { BodyType, Exercise, User} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    bodyTypes: async () => {
      try {
        const bodyTypes = await BodyTypes.find();
        return bodyTypes;
      } catch (err) {
        throw new Error(err);
      }
    },
    bodyType: async (_, { id }) => {
      try {
        const bodyType = await BodyType.findById(id);
        return bodyType;
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

    createBodyType: async (_, { name, exerciseIds }) => {
      const bodyType = new BodyType({
        name,
        exercises: exerciseIds
      });
      try {
        const result = await bodyType.save();
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
