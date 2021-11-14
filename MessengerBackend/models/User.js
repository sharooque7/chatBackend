const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    // profilePicture: {
    //   type: String,
    //   default: "",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auth", UserSchema);
