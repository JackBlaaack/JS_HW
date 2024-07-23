// 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()

class Worker {
  constructor(firstName, lastName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const worker = new Worker("Joe", "Doe", 1234567);

console.log(worker.getFullName());
console.log(worker.phone);
