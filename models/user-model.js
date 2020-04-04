const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  googleid: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("user", userSchema);

// Export the User model
module.exports = User;
