// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  

  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

const totalOrder = ((prices) => {
    const result = prices.reduce((curr, result) => curr + result, 0);
    return result;
});

console.log(totalOrder(prices));

const avgOrder = ((prices) => {
    const avg = totalOrder(prices)/prices.length;
    return avg;
});

console.log(avgOrder(prices));