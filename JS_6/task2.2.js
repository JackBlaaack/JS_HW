// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

import { enterprises } from "./task2.1.js";


const getEnterpriseName = ((search) => {
    for (const enterprise of enterprises) {
        for (const department of enterprise.departments) {
            if (department.id === search || department.name === search) {
                return enterprise.name;
            }
        }
    }
    return `Предприятие не найдено`

});

console.log(getEnterpriseName("Отдел тестирования"));
console.log(getEnterpriseName(4));