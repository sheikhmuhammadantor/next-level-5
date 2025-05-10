{
  // Instanceof Guard
  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log("I am making sound");
    }
  }

  //   Dog InstanceOf - Extends
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am Dog, I can barking");
    }
  }

  //   Cat InstanceOf - Extends
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("I am Cat, I can mewaing");
    }
  }

  // Smart Way - Use Function;
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Bhai", "dog");
  const cat = new Cat("Cat Bhai", "cat");

  getAnimal(dog);
  getAnimal(cat);

  //
}
