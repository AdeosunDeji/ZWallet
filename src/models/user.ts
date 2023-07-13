import { Schema, model } from "mongoose";
import { IUser } from "../utils/interface";

const userSchema = new Schema(
  {
    email: {
      type: String, unique: true, maxlength: 50, trim: true, lowercase: true
    },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);
