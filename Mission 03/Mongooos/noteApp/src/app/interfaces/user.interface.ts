import { Model } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export interface UserInstanceMethods {
  hasPasswordInstance(password: string): string;
}

export interface UserStaticMethods extends Model<IUser> {
  hasPasswordStatic(password: string): string;
}
