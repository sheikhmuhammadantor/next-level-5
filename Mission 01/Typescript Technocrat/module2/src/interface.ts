{
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  interface UserWithRole3 extends User1 {
    role3: string;
  }

  const user1: UserWithRole3 = {
    name: "Muhammad",
    age: 100,
    role3: "Admin",
  };

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  type Add1 = (num1: number, num2: number) => number;

  const add1: Add1 = (num1, num2) => {
    return num1 + num2;
  };
  //
}
