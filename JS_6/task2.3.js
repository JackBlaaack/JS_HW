// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

import { enterprises } from "./task2.1.js";
function generateNewId() {
    const newId = Math.max(...enterprises.flatMap(ent => {
        return ent.departments.map(dep => dep.id)
    })) + 1;
    return newId;
}
const addEnterprise = (name => {
   const newId = generateNewId();
    const newEnterprise = {
        id: newId,
        name: name,
        departments: [],
    };
    enterprises.push(newEnterprise);
    console.log(`${name} добавлен`);

});

addEnterprise('newEnterprise');
console.dir(enterprises, { depth: 5 });
