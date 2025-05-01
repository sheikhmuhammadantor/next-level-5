"use strict";
var _a, _b;
{
    // Ternary Operator || Optional Chaining || Nullish Coalescing Operator;
    const age = 15;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    const isAdult = age >= 18 ? "Adult" : "Not Adult";
    // Nullish Coalescing Operator;
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "Muhammad",
        address: {
            city: "Dhaka",
            road: "Awesome Road",
            presentaddress: "Rajbari",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
}
