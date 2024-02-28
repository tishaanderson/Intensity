const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new Schema({
  // Username field with validation
  username: {
    type: String,
    required: true,
    unique: true,
  },
  // Email field with validation
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  // Password field with validation
  password: {
    type: String,
    required: true,
  },
  // Reference to workouts associated with the user
  // workout: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Workout'
  // }],
  // Reference to exercises associated with the user
  exercise: [{
    type: Schema.Types.ObjectId,
    ref: 'Exercise'
  }]
});

// Middleware to hash user password before saving
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Create the User model from the schema
const User = model('User', userSchema);

// Export the User model
module.exports = User;