{
  // Static
  class Counter {
    static count: number = 10;

    increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();
  const instance2 = new Counter();
  const instance3 = new Counter();

  console.log("Increment 1 =>", instance1.increment());
  console.log("Increment 2 =>", instance2.increment());
  console.log("Increment 3 =>", instance3.increment());

  console.log("Decrement 1 =>", Counter.decrement());
  console.log("Decrement 2 =>", Counter.decrement());
  console.log("Decrement 3 =>", Counter.decrement());
  //
}
