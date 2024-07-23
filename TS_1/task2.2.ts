// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.

type ValueType = string | number | boolean;

interface ICountResult {
    string: number;
    number: number;
    boolean: number;
}

const countTypes = (obj: Record<string, ValueType>, result: ICountResult): void => {
    for (const key in obj) {
        const value = obj[key];
        if (typeof value === 'string') {
            result.string++;
        } else if (typeof value === 'number') {
            result.number++;
        } else if (typeof value === 'boolean') {
            result.boolean++;
        }
    }
};

function countValueTypes(input: Record<string, ValueType> | Record<string, ValueType>[]): ICountResult {
    const result: ICountResult = {
        string: 0,
        number: 0,
        boolean: 0
    };

  

    if (Array.isArray(input)) {
        input.forEach(item => countTypes(item, result));
    } else {
        countTypes(input, result);
    }

    return result;
}

const obj1 = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

const obj2 = {
    name: "Bob",
    age: 25,
    isEmployed: false,
    city: "New York"
};

const arrayOfObjects = [obj1, obj2];

console.log(countValueTypes(obj1));
console.log(countValueTypes(arrayOfObjects)); 





