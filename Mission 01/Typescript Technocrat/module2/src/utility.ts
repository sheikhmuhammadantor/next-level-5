{
  //Utility Types
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // Pick
  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: "017",
  };

  //   person1.name = "Mr. YZ";

  // Record
  type MyObj = Record<string, string>;

  // const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: "6",
  };
}
