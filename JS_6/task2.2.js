// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать название предприятия, к которому относится).

// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

import { enterprises } from "./task2.1.js";

const getEnterpriseName = (search) => {
  try {
    for (const enterprise of enterprises) {
      for (const department of enterprise.departments) {
        if (department.id === search || department.name === search) {
          return enterprise.name;
        }
      }
    }
  } catch (error) {
    throw new Error(error);
  }
};

console.log(getEnterpriseName("Отдел тестирования"));
console.log(getEnterpriseName(11));
