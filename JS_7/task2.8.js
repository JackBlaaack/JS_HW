// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)

class Zoo {
  constructor(address, title, ticketPrice, workers, animals) {
    this._address = address;
    this._title = title;
    this._ticketPrice = ticketPrice;
    this.workers = workers;
    this._animals = animals;
  }

  removeWorker(id) {
    const index = this.workers.findIndex((worker) => worker.id === id);
    if (index === -1) {
      throw new Error("error");
    } else {
      return this.workers.splice(index, 1);
    }
  }

  removeAnimal(id) {
    const index = this._animals.findIndex((animal) => animal.id === id);
    if (index === -1) {
      throw new Error("error");
    } else {
      return this._animals.splice(index, 1);
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

const tiger = new Animal("tiger", 1, "yellow", 100);
const elephant = new Animal("elephant", 2, "blue", 1000);

const worker1 = new Worker("Jack", 1, "trainer");
const worker2 = new Worker("John", 2, "worker");

const zoo = new NewZoo(
  " Star St",
  "SuperZoo",
  "10$",
  [worker1, worker2],
  [tiger, elephant]
);

console.log(zoo.removeWorker(2));
console.log(zoo.workers);