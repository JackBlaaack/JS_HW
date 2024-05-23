// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную

// n + nn + nnn, где n не перемножаются, а конкатенируются

function getConcateNumber(n) {
    let str = ''
    for (let i = 1; i <=n; i++) {
         str += n * i
    }
    return str
}

console.log(getConcateNumber(5))