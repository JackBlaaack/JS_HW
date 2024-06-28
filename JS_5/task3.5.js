// 5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
//   и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты. 
//   Решите эту задачу, используя эффективные методы массива.
const arr = [8,7,1,2,3,3,4,5];
const sortArr = Array.from(new Set(arr.sort((a, b) => a - b)));

const findMissingNumber = ((sortArr) => {
    const missingNumber = sortArr.find((element, index) => {
        return index < sortArr.length - 1 && (sortArr[index + 1] - element) !== 1;
      });
      if (missingNumber !== undefined) {
        return missingNumber + 1;
      }
      throw new Error("No missing number found");
});

console.log(findMissingNumber(sortArr));