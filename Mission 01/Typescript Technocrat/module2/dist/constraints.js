"use strict";
{
    const Student = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = Student({
        name: "Mr X",
        email: "x@gmail.com",
        id: 5555,
    });
    const student2 = Student({
        id: 222,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    });
}
