export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export interface UserInstanceMethods {
  hasPassword(password: string): string;
}
