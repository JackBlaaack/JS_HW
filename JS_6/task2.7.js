//7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

import { enterprises } from "./task2.1.js";

const deleteEnterprise = ((deletelId) => {
    try {
const index = enterprises.findIndex(ent => ent.id === deletelId)
if (index !== -1) {
enterprises.splice(index,1) // Удаляем предприятие
console.log(`Успешно удалили предприятие под id ${deletelId}`);
} else {
    throw new Error(`Предприятие не найдено с таким id ${deletelId}`);
}
    }catch (error) {
        console.error(error);
    }

})

deleteEnterprise(10);
console.log(enterprises);
