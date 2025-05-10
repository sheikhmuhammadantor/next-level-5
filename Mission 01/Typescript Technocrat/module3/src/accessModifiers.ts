{
  // Access Modifiers:
  class BankAccount {
    // private _balance: number;
    constructor(
      readonly id: number,
      readonly name: string,
      protected _balance: number
    ) {}

    public addDeposit(amount: number) {
      this._balance += amount;
    }

    public getBalance() {
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
