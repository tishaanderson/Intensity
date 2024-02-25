const models = require('../models');
const db = require('../config/connection');

// Checks if a collection exists for a given model and drops it if it exists.
module.exports = async (modelName, collectionName) => {
  try {
    // Check if the collection exists for the specified model
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray();

    // If the collection exists, drop it from the database
    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    // Throw any errors that occur during the process
    throw err;
  }
};