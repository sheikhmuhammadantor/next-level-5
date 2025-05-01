"use strict";
{
    const user = {
        company: "SheikhDev",
        firstName: "Sheikh",
        lastName: "Antor",
        isMarried: false,
    };
    // user.isMarried = true;   // ERROR: it is a read-only property
    console.log(user['middleName']); // undefined
}
