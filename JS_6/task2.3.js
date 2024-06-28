// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

import { enterprises } from "./task2.1.js";

const addEnterprise = (name => {

    const newId = Math.max(...enterprises.map(enterprise => enterprise.id)) + 1;
    const newEnterprise = {
        id: newId,
        name: name,
        departments: [],
    };
    enterprises.push(newEnterprise);
    console.log(`${name} добавлен`)

});

addEnterprise('newEnterprise');
console.dir(enterprises, { depth: 5 });
