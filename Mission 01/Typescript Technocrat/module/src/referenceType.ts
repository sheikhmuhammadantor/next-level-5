{
    const user: {
        company: "SheikhDev";   // type --> literal types;
        firstName: string;
        middleName?: string;    // optional type;
        lastName: string;
        readonly isMarried: boolean;    // read-only property
    } = {
        company: "SheikhDev",
        firstName: "Sheikh",
        lastName: "Antor",
        isMarried: false,
    }

    // user.isMarried = true;   // ERROR: it is a read-only property

    console.log(user['middleName']);    // undefined
}