{
  // Function With Generrics;
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrGen = <T>(param: T): T[] => {
    return [param];
  };

  interface User {
    ID: number;
    name: string;
  }

  let genArr1 = createArrGen<string>("Hello");
  let genArr2 = createArrGen<number>(66);
  let genArr3 = createArrGen<User>({
    name: "Muhammad",
    ID: 88,
  });

  const createArrGenTuple = <T, X>(param1: T, param2: X): [X, T] => {
    return [param2, param1];
  };

  let genArrTpl1 = createArrGenTuple<string, number>("Hello", 66);
  let genArrTpl2 = createArrGenTuple<number, string>(77, "Hi");
  //   let genArrTpl3 = createArrGenTuple(77, "Hi", 99);

  //    Explicitly Devine The return Type;
  const Student = <T>(student: T): T & { course: string } => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = Student<{
    name: string;
    email: string;
    devType: string;
  }>({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  //   Why Not Error;
  //   const StudentE = <T>(student: T): { course: string } => {
  //     const course = "Next Level Web Development";
  //     return {
  //       ...student,
  //       course,
  //     };
  //   };

  //   const student4 = StudentE<{
  //     name: string;
  //     email: string;
  //     devType: string;
  //   }>({
  //     name: "Mr X",
  //     email: "x@gmail.com",
  //     devType: "NLWD",
  //   });

  //   Exta;
  //   const addCourseToStudent = <T>(student: T) => {
  //     const course = "Next Level Web Development";
  //     return {
  //       ...student,
  //       course,
  //     };
  //   };

  //   const student1 = addCourseToStudent({
  //     name: "Mr X",
  //     email: "x@gmail.com",
  //     devType: "NLWD",
  //   });

  //   const student2 = addCourseToStudent({
  //     name: "Mr Y",
  //     email: "y@gmail.com",
  //     hasWatch: "Apple Watch",
  //   });
  //
}
