// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 

interface IEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    address?: IAddress;
    projectNames: string[];
}
 
function isItEmployee(obj: object): obj is ItEmployee {
    return "ItEmployee" in obj;
}

function getEmployeeInfo(employeeOrNot: IEmployee | ItEmployee): void {
    if (isItEmployee(employeeOrNot)) {
        console.log(` ItEmployee: 
            Name: ${itEmployee.name}
            Surname: ${itEmployee.surname}
            Salary: ${itEmployee.salary}
            Grade: ${itEmployee.grade}
            ProjectNames: ${itEmployee.projectNames}
            `);
    } else {
console.log(`Employee: 
     Name: ${itEmployee.name}
            Surname: ${employee.surname}
            Salary: ${employee.salary}
            ProjectNames: ${employee.projectNames}
    `)
    }
   

}

const employee: IEmployee = {
    name: "Jack",
    surname: "Qashen",
    salary: 5000,
    projectNames: ["Project1", "Project2"],
}

getEmployeeInfo(employee);
getEmployeeInfo(itEmployee);