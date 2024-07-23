// Task 2.
// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal


// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price


import { Animal } from "./task1.js";

class Bird extends Animal {
    #isFlying;
  constructor(type, color, weight, height, placeOfOrigin, isFlying) {
    this.type = type;
    this.color = color;
    this.weight = weight;
    this.height = height;
    this.placeOfOrigin = placeOfOrigin;
    this.#isFlying = isFlying;
  }
}
