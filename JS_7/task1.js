// Task 1
// 1. Создайте класс Animal
// 2. В конструкторе класс должен принимать следующие параметры:     
//   - type
//   - color
//   - weight
//   - height
//   - place of origin
// 3. Добавьте в класс метод: getInfo, который возвращает в строке полную информацию о животном (используйте шаблонные строки с `${}` синтаксисом)
// 4. Создайте геттер для поля color (get color), не забывая что при этом поле должно быть _color
// 5. Создайте сеттер для поля color (set color(newColor)). В сеттере проверяйте, является ли цвет одним из следующих:
//   - Красный
//   - Черный
//   - Белый
//   - Синий
// Если не является - кидаем ошибку через throw new Error('текст ошибки')

export class Animal {
    constructor (type, color, weight, height, placeOfOrigin) {
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }
    getInfo() {
        console.log(`Animal is ${this.type} with color ${this.color},weight ${this.weight}kg,height ${this.height}cm in ${this.placeOfOrigin} `)
    }
    get color() {
        return this._color;
    }

    set color(newColor) {
if (newColor === "Красный" || newColor === "Черный" || newColor === "Белый" || newColor === "СИний" ) 
    throw new Error("Не тот цвет")
   this._color = newColor;
    }
}

const tiger = new Animal("mammals", "yellow", 60, 100, "Africa");

tiger.getInfo();
tiger.color = "Красный";
console.log(tiger.color);

// 6. Создайте класс Snake, который будет наследовать класс Animal
// 7. Создайте конструктор в классе Snake, который будет принимать все необходимые поля из класса Animal, а также поле isPoisonous
// 8. С помощью super() вызовите конструктор родителя, передав необходимые параметры
// 9. В классе Snake создать метод checkPoisonous(), который возвращает true/false
// 10. Сделайте поле isPoisonous приватным в классе Snake

class Snake extends Animal {
    #isPoisonous;
constructor(type, color, weight, height, placeOfOrigin, isPoisonous) {
    super(type, color, weight, height, placeOfOrigin);
    this.#isPoisonous = isPoisonous;
}
checkPoisonous() {
return this.#isPoisonous;
}

}

const snake = new Snake()
console.log(snake.checkPoisonous());
