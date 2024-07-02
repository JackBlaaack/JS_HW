// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")

import { enterprises } from "./task2.1.js";
const editDepartment = ((idDep, newNameDep) => {
    try {
        let findId = -1;
        for (const ent of enterprises) {
             findId = ent.departments.findIndex(dep => dep.id === idDep);
             console.log(findId)
            if(findId !== -1) {
                ent.departments[findId].name = newNameDep;
                console.log(`Имя отдела изменено на ${newNameDep}`);
                return;
            } 
            
        }
        if (findId === -1) {
            throw new Error(`Не найдено отдел с таким Id ${idDep}`)
        }
    } catch (error) {
        console.error(`message: ${error}`)
    }
      
    
})

editDepartment(4, "new department");
console.dir(enterprises, {depth:5});