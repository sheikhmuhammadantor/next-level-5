"use strict";
{
    function add(num1, num2 = 3) {
        console.log(num1 + num2);
    }
    add(5, 7);
    // Arrow Function;
    const addArrow = (num1, num2) => num1 + num2;
    // Object ==> Function ==> Method;
    const poorUser = {
        name: "Muhammad",
        balanch: 4,
        addBalench(balanch) {
            return `${this.name}'s new Balench is : ${this.balanch + balanch}`;
        }
    };
    // 
    const arr = [2, 4, 6, 3, 6];
    const sqrArray = arr.map((elem) => elem * elem);
}
