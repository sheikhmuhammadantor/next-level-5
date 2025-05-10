"use strict";
{
    // Access Modifiers:
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
        getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            // this._balance
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    //   goribManusherAccount.balance = 0;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);
    //   goribManusherAccount._balance; // Error;
    //
}
