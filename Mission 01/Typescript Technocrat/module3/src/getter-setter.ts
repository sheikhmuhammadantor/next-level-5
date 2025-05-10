{
  // Getter and Setter:
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

    // public getBalance() {
    //   return this._balance;
    // }

    get balance() {
      return this._balance;
    }

    set balance(amount: number) {
      this._balance += amount;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);

  console.log((goribManusherAccount.balance = 7));
  console.log(goribManusherAccount.balance);
  //
}
