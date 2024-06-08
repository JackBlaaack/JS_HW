// Создайте цикл, который выведет в консоль цифры от 10 до 0

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
const height = 5

for (let i = 1; i <= height; i++) {
    let str = ""
    for (let j = 1; j <= i; j++) {
         str += ":)"
    }
    console.log(str)
}

// while
let i = 1;
while ( i <= height) {
    let str2 = "";
    str2 += ":)".repeat(i)
    console.log(str2)
    i++
}