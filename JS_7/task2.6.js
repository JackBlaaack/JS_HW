// 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers.
//     На вход метод должен принимать объект класса Worker.
//     Если объект не является инстансом класса Worker - выкинуть ошибку
class Worker {
  constructor(name) {
    this.name = name;
  }
}
class Employee {
  constructor(name) {
    this.name = name;
  }
}
class Zoo {
  constructor(workers) {
    this.workers = workers;
  }

  addWorker(worker) {
    try {
      if (!(worker instanceof Worker)) {
        throw new Error('this is not a worker');
      }
      if (this.workers?.length === 0) this.workers = [];
      this.workers.push(worker);
    } catch (error) {
      console.log(error);
    }
  }
}

const worker = new Worker("abcd");
const employee = new Employee("Jack");
const zoo = new Zoo([]);
zoo.addWorker(worker);
console.log(zoo.workers);
zoo.addWorker(employeel);

