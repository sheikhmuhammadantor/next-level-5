"use strict";
{
    // Function With Generrics;
    const createArray = (param) => {
        return [param];
    };
    const createArrGen = (param) => {
        return [param];
    };
    let genArr1 = createArrGen("Hello");
    let genArr2 = createArrGen(66);
    let genArr3 = createArrGen({
        name: "Muhammad",
        ID: 88,
    });
    const createArrGenTuple = (param1, param2) => {
        return [param2, param1];
    };
    let genArrTpl1 = createArrGenTuple("Hello", 66);
    let genArrTpl2 = createArrGenTuple(77, "Hi");
    //   let genArrTpl3 = createArrGenTuple(77, "Hi", 99);
    //    Explicitly Devine The return Type;
    const Student = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student3 = Student({
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
