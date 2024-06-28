// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

import { enterprises } from "./task2.1.js";

// Пример:
// moveEmployees(2, 3)

const moveEmployees = ((fromDepId, toDepId) => {
    try {
        let fromDep, toDep;
        enterprises.forEach(enteprise => {
            enteprise.departments.forEach(dep => {
                if (dep.id === fromDepId) {
                    fromDep = dep;
                if (dep.id === toDepId) {
                    toDep = dep;
                }
                }
            })
        })
        if (fromDep && toDep) {
            toDep.employees_count += fromDep.employees_count;
            fromDep.employees_count = 0;
            console.log(`сотрудники перенесены из ${fromDep} в ${toDep}`)
            return;
        } else {
            throw new Error(`не нашли отделов`)
    }
   
    }catch (error) {
console.error(error);
    }
});

moveEmployees(2, 3);
console.dir(enterprises, {depth: 5});