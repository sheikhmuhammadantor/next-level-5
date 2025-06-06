"use strict";
{
    // Nullable Type :
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is Nothing to Search");
        }
    };
    searchName(null);
    // Unknown Type :
    const speedChake = (value) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }
        else {
            console.log("wrong input");
        }
    };
    speedChake(null);
    //  Never :
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("mushkil se error hogaya");
}
