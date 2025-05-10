"use strict";
{
    // OOP - Class
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`Thi ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("Titten", "Bangla Kutta", "Ghow Ghaw");
    const cat = new Animal("Ketti", "Dasi Cat", "Meow Meaw");
    cat.makeSound();
    dog.makeSound();
}
