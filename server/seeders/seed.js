const db = require('../config/connection');
const { User, Exercise, Workout } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');
const workoutSeeds = require('./workoutSeeds.json');
const cleanDB = require('./cleanDB');
db.once('open', async () => {
  try {
    await cleanDB('Workout', 'workouts');
    await cleanDB('Exercise', 'exercises');
    await User.create(exerciseSeeds);
    for (let i = 0; i < workoutSeeds.length; i++) {
      const { _id, workout } = await Workout.create(workoutSeeds[i]);
      const user = await Exercise.findOneAndUpdate(
        { username: workout },
        {
          $addToSet: {
            workouts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});







