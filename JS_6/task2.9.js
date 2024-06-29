// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

import { enterprises } from "./task2.1.js";

// Пример:
// moveEmployees(2, 3)

const moveEmployees = ((fromDepId, toDepId) => {
    try {
        let fromDep,toDep;
        
        enterprises.forEach(enterprise => {
            const foundFromDep = enterprise.departments.find(dep => dep.id === fromDepId);
            const foundToDep = enterprise.departments.find(dep => dep.id === toDepId);
                if (foundFromDep) {
                    fromDep = foundFromDep;
                if (foundToDep) {
                    toDep = foundToDep;
                }
                }
            })
        if (fromDep && toDep) {
            toDep.employees_count += fromDep.employees_count;
            fromDep.employees_count = 0;
            console.log(`сотрудники перенесены из ${fromDep.name} в ${toDep.name}`)
            return;
        } else {
            throw new Error(`не нашли отделы`)
    }
   
    }catch (error) {
console.error(error);
    }
});

moveEmployees(2, 3);
console.dir(enterprises, {depth: 5});