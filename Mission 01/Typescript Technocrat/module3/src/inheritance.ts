{
  // Inheritance In OOP;
  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const teacher1 = new Teacher("Mr. teacher", 40, "Uganda", "professor");
  const student1 = new Student("Mr. student", 20, "Uganda");

  console.log(teacher1);
  teacher1.takeClass(1);
  console.log(student1);
  //
}
