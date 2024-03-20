import mongoose, { Schema, Document, Types } from "mongoose";
export interface User extends Document {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
}

const userSchema: Schema<User> = new Schema<User>(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "Please enter your firstName"],
    },
    secondName: {
      type: String,
      trim: true,
      required: [true, "Please enter your secondName"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please enter your email"],
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: [true, "Please add a password "],
    },
  },

  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<User>("User", userSchema);
