// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
//     который будет использоваться для проверки каждого числа на соответствие требованиям. 
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.


const numbers = [1, -5, 2, 3, 4, 133];

function myFilter<T>(arr: T[], func: (value: T, index: number, array: T[]) => boolean): T[] {
    let filteredArr: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log(myFilter(numbers, (n) => n > 3));