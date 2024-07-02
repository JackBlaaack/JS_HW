// 4. Создайте класс Zoo, реализующий следующий интерфейс:
//     class Zoo
//       address
//       title
//       ticket price
//       workers: []
//       animals: [],

 class Zoo {
    constructor(address, title, ticketPrice, workers, animals) {
this.address = address;
this.title = title;
this.ticketPrice = ticketPrice;
this.workers = workers;
this.animals = animals;
    }
}

const zoo = new Zoo("Star St","New York Zoo", "5$", ["trainer", "cleaner"],["lion", "tiger", "alligator"]);

console.log(zoo.address);
console.log(zoo.title);
console.log(zoo.ticketPrice);
console.log(zoo.workers);
console.log(zoo.animals);