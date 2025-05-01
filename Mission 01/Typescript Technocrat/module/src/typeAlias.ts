{
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    type UserName = string;
    const userName: UserName = "Sheikh Muhammad";

    const student1: Student = {
        name: "Sheikh",
        age: 20,
        gender: "Male",
        contactNo: "0170000000",
        address: "RB",
    };

    const student2: Student = {
        name: "Muhammad",
        age: 22,
        gender: "Male",
        address: "RP",
    };

    const student3: Student = {
        name: "Antor",
        age: 21,
        gender: "Male",
        address: "DK",
    };

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num3) => num1 + num3;
}