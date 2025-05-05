"use strict";
{
    //
    let anything = "hello !";
    // anything = (77 as string);
    let num1 = anything;
    console.log(num1);
    // Function
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The Value Is : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    console.log(result1);
    console.log(result2);
    throw new Error("Hi Error !");
}
