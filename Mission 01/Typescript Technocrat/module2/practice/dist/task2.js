"use strict";
{
    const userInfo = (user) => {
        var _a;
        const role = (_a = user.role) !== null && _a !== void 0 ? _a : "guest";
        return `${role} ${user.name.toUpperCase()} is ${user.age} Years Old!`;
    };
    const user1 = {
        name: "Muhammad",
        age: 24,
        role: "admin",
    };
    const result = userInfo(user1);
    console.log(result);
}
