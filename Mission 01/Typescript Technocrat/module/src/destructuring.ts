{
    const user = {
        id: 32089,
        name: {
            firstName: "Sheikh",
            middleName: "Muhammad",
            lastName: "Antor",
        },
        constactNo: "01957710483",
        address: "Rajbari, Dhaka, Bangladesh",
    };

    // Object Name Aliases;
    const { name: { middleName: minName }, constactNo } = user;
    console.log(minName);

    // Array Destructuring;
    const myFriend = ["Antor", "Radoy", "Ali", "Omor", "Ovi", "Abir"];
    const [bro1, , bros3, ...reminingBro] = myFriend;
}