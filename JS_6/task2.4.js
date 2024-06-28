// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")
import { enterprises } from "./task2.1.js";

const addDepartments = (entId, departName) => {
    try {
        const enterprise = enterprises.find(ent => ent.id === entId); // находим предприятие по id
        if (!enterprise) {
            throw new Error('Такого предприятия нет');
        }

        const newId = Math.max(...enterprises.flatMap(ent => {
            return ent.departments.map(dep => dep.id)
        })) + 1;
        const newDep = {
            id: newId,
            name: departName,
            employees_count: 0,

        };
        enterprises.push(newDep);
        console.log(`добавлен ${departName}`);
    } catch (error) {
        console.error(`message: ${error}`)
    }

}

addDepartments(1, "Отдел программирования");
console.log(enterprises);