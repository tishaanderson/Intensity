const { Schema, model } = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =  new Schema({
    username:  {
      type: String,
      required: true,
      unique: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
    password:  {
      type: String,
      required: true,
      },
    workout:  {
      type: Schema.Types.ObjectId,
      ref: 'Workouts'
    },
    exercise:  {
      type: Schema.Types.ObjectId,
      ref: 'Exercise'
    }
});

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;