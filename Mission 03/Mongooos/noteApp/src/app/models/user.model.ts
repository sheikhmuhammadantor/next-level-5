import bcrypt from "bcryptjs";
import { Model, model, Schema } from "mongoose";
import { IUser, UserInstanceMethods } from "../interfaces/user.interface";

const userSchema = new Schema<IUser, Model<IUser>, UserInstanceMethods>(
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

userSchema.method("hasPassword", async function (plainPassword: string) {
  const password = await bcrypt.hash(plainPassword, 10);
  this.password = password;
  return this.save();
});

export const User = model("User", userSchema);
