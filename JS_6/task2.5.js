// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

import { enterprises } from "./task2.1.js";

const editEnterprise = ((entId, newName) => {
    try {
        const index = enterprises.findIndex(ent => ent.id === entId);
        if (index !==-1) {
            enterprises[index].name = newName;
            console.log(`Изменено имя предприятие на ${newName}`)
        } else {
            throw new Error(`Предприятие с таким id ${entId}  не найдено`)

        }
    } catch (error) {
        console.error(`message: ${error}`);
    }
});


editEnterprise(10, `newName`);
console.log(enterprises);
