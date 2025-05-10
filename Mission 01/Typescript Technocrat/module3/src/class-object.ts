{
  // OOP - Class
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`Thi ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("Titten", "Bangla Kutta", "Ghow Ghaw");
  const cat = new Animal("Ketti", "Dasi Cat", "Meow Meaw");

  cat.makeSound();
  dog.makeSound();
}
