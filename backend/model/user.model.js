import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      minlength: [4, "Fullname must be at least 4 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [4, "Email must be at least 4 characters long"],
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avtar: {
      type: String,
    },
    socketId: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email },
    process.env.JWT_SECRET,
    { expiresIn: "5d" }
  );
};

const User = mongoose.model("User", userSchema);
export default User;
