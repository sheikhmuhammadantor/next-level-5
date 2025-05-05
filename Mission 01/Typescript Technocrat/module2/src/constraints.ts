{
  //    Constraints The Generics Type;
  type ST = { id: number; name: string; email: string };

  const Student = <T extends ST>(student: T): T & { course: string } => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = Student({
    name: "Mr X",
    email: "x@gmail.com",
    id: 5555,
  });

  const student2 = Student<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
}
