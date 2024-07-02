// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

import { enterprises } from "./task2.1.js";

const deleteDepartment = ((deletelId) => {
    try {
        for (const ent of enterprises) {
            const index = ent.departments.findIndex(ent => ent.id === deletelId)
            console.log(index)
            if (index !== -1 && ent.departments[index].employees_count === 0) {
            ent.departments.splice(index,1) // Удаляем предприятие
            console.log(`Успешно удалили предприятие под id ${deletelId} :`);
            return
            } 
                
        }
    }catch (error) {
        throw new Error(error.message);
    }


})

deleteDepartment(10);
console.dir(enterprises, {depth:5});