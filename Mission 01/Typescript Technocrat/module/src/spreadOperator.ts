{
    // Spread Operator;
    const bros1: string[] = [
        "Antor",
        "Radoy",
        "Ali",
        "Omor",
    ];

    const bros2: string[] = [
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
    }

    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    }

    const mentorList = {
        ...mentors1,
        ...mentors2,
    }

    // Rest Operator;
    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log("Hi", friend));
    }

    greetFriends("Abul", "Kabul", "Babul")
}