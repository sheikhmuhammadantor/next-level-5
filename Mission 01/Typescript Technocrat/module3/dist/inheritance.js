"use strict";
{
    // Inheritance In OOP;
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
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
