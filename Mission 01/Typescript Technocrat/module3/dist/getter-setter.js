"use strict";
{
    // Getter and Setter:
    class BankAccount {
        // private _balance: number;
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount) {
            this._balance += amount;
        }
        // public getBalance() {
        //   return this._balance;
        // }
        get balance() {
            return this._balance;
        }
        set balance(amount) {
            this._balance += amount;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    console.log((goribManusherAccount.balance = 7));
    console.log(goribManusherAccount.balance);
    //
}
