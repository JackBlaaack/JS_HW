// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
import { Animal } from "./task1.js";

class CatLike extends Animal {

    constructor(type, color, weight, height, placeOfOrigin,isSafeToPet) {
      super(type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet;
    }
}

