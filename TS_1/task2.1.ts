// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 



// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
//     который будет использоваться для проверки каждого числа на соответствие требованиям. 
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.


interface IEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: Grade;
    address?: IAddress;
    projectNames: string[];
}

const employee1: IEmployee = {
    name: "Jack",
    surname: "Qashen",
    salary: 5000,
    grade: "middle",
    projectNames: ["Project1", "Project2"],
}
function getEmployeeInfo(employee: IEmployee): void {
    console.log(`
        Name: ${employee.name}
        Surname: ${employee.surname}
        Salary: ${employee.salary}
        Grade: ${employee.grade}
        ProjectNames: ${employee.projectNames}
        `);

}

getEmployeeInfo(employee1);