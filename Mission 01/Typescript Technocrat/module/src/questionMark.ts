{
    // Ternary Operator || Optional Chaining || Nullish Coalescing Operator;

    const age: number = 15;

    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }

    const isAdult = age >= 18 ? "Adult" : "Not Adult";

    // Nullish Coalescing Operator;
    const isAuthenticated = "";

    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });

    // Optional Chaining;
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentaddress: string;
            permanentAddress?: string;
        };
    };

    const user: User = {
        name: "Muhammad",
        address: {
            city: "Dhaka",
            road: "Awesome Road",
            presentaddress: "Rajbari",
        },
    };

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
    console.log({ permanentAddress });
}