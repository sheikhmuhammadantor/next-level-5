import bcrypt from "bcryptjs";
import { model, Schema } from "mongoose";
import {
  IUser,
  UserInstanceMethods,
  UserStaticMethods,
} from "../interfaces/user.interface";

const userSchema = new Schema<IUser, UserStaticMethods, UserInstanceMethods>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      unique: [true, "Email Duplicate Hoya Gasa Vie !!"],
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.method(
  "hasPasswordInstance",
  async function (plainPassword: string) {
    // const password = await bcrypt.hash(plainPassword, 10);
    // this.password = password;
    // this.save();

    const password = await bcrypt.hash(plainPassword, 10);
    return password;
  }
);

userSchema.static("hasPasswordStatic", async function (plainPassword: string) {
  const password = await bcrypt.hash(plainPassword, 10);
  return password;
});

export const User = model<IUser, UserStaticMethods>("User", userSchema);
