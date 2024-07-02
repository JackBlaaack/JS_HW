// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price


class Zoo {
    constructor(address, title, ticketPrice, workers, animals) {
this._address = address;
this._title = title;
this._ticketPrice = ticketPrice;
this.workers = workers;
this._animals = animals;
    }
    get address() {
        return this._address;
    }

    set address(newAddress) {
this._address = newAddress;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
this._title = newTitle;
    }

    get ticketPrice() {
        return this._ticketPrice;
    }

    set ticketPrice(newTicketPrice) {
this._ticketPrice = newTicketPrice;
    }

    get animals() {
        return this._animals;
    }

    set animals(newAnimals) {
this._animals = newAnimals;
    }





}