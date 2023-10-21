import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requied: true,
    unique: true,
    min: 4,
  },
  password: {
    type: String,
    min: 8,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
