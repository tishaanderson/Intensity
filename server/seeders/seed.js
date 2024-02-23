const db = require('../config/connection');
const { User, Exercise, BodyType } = require('../models');
const exerciseSeeds = require('./exerciseSeeds.json');
const bodyTypeSeeds = require('./bodyTypeSeeds.json');
const cleanDB = require('./cleanDB');
db.once('open', async () => {
  try {
    await cleanDB('BodyType', 'bodyTypes');
    await cleanDB('Exercise', 'exercises');
    await User.create(exerciseSeeds);
    for (let i = 0; i < bodyTypeSeeds.length; i++) {
      const { _id, bodyType } = await BodyType.create(bodyTypeSeeds[i]);
      const user = await Exercise.findOneAndUpdate(
        { username: bodyType },
        {
          $addToSet: {
            bodyTypes: _id,
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







