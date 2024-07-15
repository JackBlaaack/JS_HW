"use strict";
// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 
const employee1 = {
    name: "Jack",
    surname: "Qashen",
    salary: 5000,
    grade: "middle",
    projectNames: ["Project1", "Project2"],
};
function getEmployeeInfo(employee) {
    console.log(`
        Name: ${employee.name}
        Surname: ${employee.surname}
        Salary: ${employee.salary}
        Grade: ${employee.grade}
        ProjectNames: ${employee.projectNames}
        `);
}
getEmployeeInfo(employee1);
