// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 


interface ItEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: Grade;
    address?: IAddress;
    projectNames: string[];
}

type Grade = "junior" | "middle" | "senior" | "lead";
interface IEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    address?: IAddress;
    projectNames: string[];
}
 
interface IAddress {
    country: string;
    street: string;
    house: number;
    flat: number;
}

function isItEmployee(obj: IEmployee | ItEmployee): obj is ItEmployee {
    return "grade" in obj;
}

function getEmployeeInfo(employeeOrNot: IEmployee | ItEmployee): void {
    if (isItEmployee(employeeOrNot)) {
        const itEmployee = employeeOrNot;
        console.log(`ItEmployee: 
            Name: ${itEmployee.name}
            Surname: ${itEmployee.surname}
            Salary: ${itEmployee.salary}
            Grade: ${itEmployee.grade}
            ProjectNames: ${itEmployee.projectNames}
        `);
    } else {
        const employee = employeeOrNot;
        console.log(`Employee: 
            Name: ${employee.name}
            Surname: ${employee.surname}
            Salary: ${employee.salary}
            ProjectNames: ${employee.projectNames}
        `);
    }
}

const employee: IEmployee = {
    name: "Jack",
    surname: "Qashen",
    salary: 5000,
    projectNames: ["Project1", "Project2"],
};

const itEmployee: ItEmployee = {
    name: "Alice",
    surname: "Smith",
    salary: 6000,
    projectNames: ["Project3", "Project4"],
    grade: "senior",
};

getEmployeeInfo(employee);
getEmployeeInfo(itEmployee);