// Import necessary modules and files
const db = require('../config/connection');
const { User, Exercise, Workout } = require('../models');
const userSeeds = require('./userSeeds.json');
const workoutSeeds = require('./workoutSeeds.json');
const exerciseSeeds = require('./exerciseSeeds.json')
const cleanDB = require('./cleanDB');

// Once the database connection is open, execute the seeding process
db.once('open', async () => {
  try {
    // Clean the database by dropping existing collections
    await cleanDB('Workout', 'workouts');
    await cleanDB('Exercise', 'exercises');
    await cleanDB('User', 'users');

    // Create new users based on the data in userSeeds.json
    await User.create(userSeeds);

    // Iterate over workoutSeeds to create workouts and associate them with users
    for (let i = 0; i < exerciseSeeds.length; i++) {
      // Create a new workout and obtain its ID
      const { _id, exercise } = await Exercise.create(exerciseSeeds[i]);

      // Find the user associated with the workout and update its workouts array with the new workout ID
      // const user = await Exercise.findOneAndUpdate(
      //   { username: workout },
      //   {
      //     $addToSet: {
      //       workouts: _id,
      //     },
      //   }
      // );
    }
  } catch (err) {
    // Log any errors and exit the process with a non-zero status code
    console.error(err);
    process.exit(1);
  }

  // Log completion message and exit the process with a zero status code
  console.log('All done!');
  process.exit(0);
});