"use strict";
{
    const vehicle2 = {
        bike: "string",
        car: "string",
        ship: "string",
    };
    const Veh1 = "bike";
    const Veh2 = "car";
    const Veh3 = "length";
    //   With Function;
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg",
    };
    getPropertyValue(user, "address");
}
