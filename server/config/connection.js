// Importing mongoose for MongoDB database connectivity
const mongoose = require('mongoose');

// Connecting to the MongoDB database using the provided URI or a default local URI
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-friends');

// Exporting the database connection for use in other parts of the application
module.exports = mongoose.connection;