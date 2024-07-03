// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)

class Zoo {
  constructor(address, title, ticketPrice, workers = [], animals = []) {
    this.address = address;
    this.title = title;
    this.ticketPrice = ticketPrice;
    this.workers = [];
    this.animals = [];
    workers.forEach((worker) => {
      this.addWorker(worker);
    });
    animals.forEach((animal) => {
      this.addAnimal(animal);
    });
  }

  addWorker(worker) {
    try {
      if (!(worker instanceof Worker)) {
        throw new Error("This is not a worker");
      }
      this.workers.push(worker);
    } catch (error) {
      console.log(error.message);
    }
  }

  addAnimal(animal) {
    try {
      if (!(animal instanceof Animal)) {
        throw new Error("This is not an animal");
      }
      if (animal instanceof Snake) {
        throw new Error(`There will be no snakes, mister Potter!`);
      }
      this.animals.push(animal);
      return `Success! Add ${JSON.stringify(animal)}`;
    } catch (error) {
      console.log(error.message);
    }
  }

  removeWorker(id) {
    try {
      const index = this.workers.findIndex((worker) => worker.id === id);
      if (index === -1) {
        throw new Error("Worker not found");
      } else {
        this.workers.splice(index, 1);
        return `Worker with id ${id} removed successfully`;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  removeAnimal(id) {
    try {
      const index = this.animals.findIndex((animal) => animal.id === id);
      if (index === -1) {
        throw new Error("Animal not found");
      } else {
        this.animals.splice(index, 1);
        return `Animal with id ${id} removed successfully`;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}

class Animal {
  constructor(name, id, color, weight) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.weight = weight;
  }
}

class Worker {
  constructor(name, id, position) {
    this.name = name;
    this.id = id;
    this.position = position;
  }
}

class Snake extends Animal {
  constructor(name, id, color, weight) {
    super(name, id, color, weight);
  }
}

const tiger = new Animal("tiger", 1, "yellow", 100);
const elephant = new Animal("elephant", 2, "blue", 1000);

const worker1 = new Worker("Jack", 1, "trainer");
const worker2 = new Worker("John", 2, "worker");

const zoo = new Zoo("Star St", "SuperZoo", "10$", [worker1, worker2], [tiger, elephant]);

console.log(zoo.removeWorker(2));
console.log(zoo.workers);

