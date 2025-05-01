{
    function add(num1: number, num2: number = 3) {
        console.log(num1 + num2);
    }

    add(5, 7);

    // Arrow Function;
    const addArrow = (num1: number, num2: number): number => num1 + num2;

    // Object ==> Function ==> Method;
    const poorUser = {
        name: "Muhammad",
        balanch: 4,
        addBalench(balanch: number): string {
            return `${this.name}'s new Balench is : ${this.balanch + balanch}`
        }
    }

    // 
    const arr: number[] = [2, 4, 6, 3, 6];
    const sqrArray: number[] = arr.map((elem: number): number => elem * elem);
}