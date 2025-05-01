"use strict";
{
    // Spread Operator;
    const bros1 = [
        "Antor",
        "Radoy",
        "Ali",
        "Omor",
    ];
    const bros2 = [
        "Ovi",
        "Fardosh",
        "AlimUzzaman",
        "Faruk",
    ];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        bdms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Rest Operator;
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log("Hi", friend));
    };
    greetFriends("Abul", "Kabul", "Babul");
}
