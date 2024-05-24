// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную

// n + nn + nnn, где n не перемножаются, а конкатенируются

let n = 9;
let result = n + +(n + '' + n) + +(n +'' + n + n )

if(Number.isInteger(n) && n >= 1 && n <= 9) {
console.log(`${n} + ${n + '' + n} + ${n +'' + n + n} = ${result}`)
} else {
    console.log("Invalid value")
}