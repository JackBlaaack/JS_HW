// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")
import { enterprises } from "./task2.1.js";

function generateNewId() {
  const newId =
    Math.max(
      ...enterprises.flatMap((ent) => {
        return ent.departments.map((dep) => dep.id);
      })
    ) + 1;
  return newId;
}
const addDepartments = (entId, departName) => {
  try {
    const enterprise = enterprises.find((ent) => ent.id === entId); // находим предприятие по id
    if (!enterprise) {
      throw new Error("Такого предприятия нет");
    }

    const newId = generateNewId();
    const newDep = {
      id: newId,
      name: departName,
      employees_count: 0,
    };
    enterprise.departments.push(newDep);
    console.log(`добавлен ${departName}`);
  } catch (error) {
    console.error(`message: ${error}`);
  }
};

addDepartments(11,"Отдел программирования");
console.dir(enterprises, {depth: 5});