{
  // Functions, Optional, and Literal Types;
  type Role = "admin" | "user" | "guest";

  interface User {
    name: string;
    age: number;
    role?: Role;
  }

  const userInfo = (user: User): string => {
    const role = user.role ?? "guest";

    return `${role} ${user.name.toUpperCase()} is ${user.age} Years Old!`;
  };

  const user1: User = {
    name: "Muhammad",
    age: 24,
    role: "admin",
  };

  const result = userInfo(user1);

  console.log(result);
}
