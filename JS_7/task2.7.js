// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников.
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
class Animal {
    constructor(name) {
        this.name = name;
    }

}
class Snake extends Animal {
    constructor(name){
        super(name);
    }
}
class Zoo {
    constructor(name, animals) {
        this.name = name;
      this.animals = animals;
    }
  
    addAnimal(animal) {
      try {
        if (!(animal instanceof Animal)) {
          throw new Error('error');
        }
        if (animal instanceof Snake) {
            throw new Error(`There will be no snakes, mister Potter!`)
        }
        if (this.animals?.length === 0) this.animals = [];
        this.animals.push(animal);
      } catch (error) {
        console.log(error);
      }
    }
  }
// const animal = new Animal("tiger");
const zoo = new Zoo("superZoo", []);
const animal = new Snake("snake");
console.log(zoo.addAnimal(animal));
console.log(zoo.animals);