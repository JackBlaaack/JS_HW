// 1. Напишите функцию, реализующую методы массивов map. Функции принимают на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]



function map<T, U>(arr: T[], callback:(num: T, index: number, array: T[]) => U): U[] {

return arr.map(callback);
}

const inputArr = [1,2,3,4,5];

const callback = (num: number, index: number): number => {
    return num * index;
}

const res = map(inputArr, callback);

console.log(res)