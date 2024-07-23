// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
interface IEmployee2 {
    name: string;
    salary: number;
    isManager: boolean;
}

const QA: IEmployee2 = {
    name: "Jack",
    salary: 3000,
    isManager: false
};

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)

type EmployeeKeys = keyof IEmployee2;

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)

type QaKeys = keyof typeof QA;

// 4. Создайте тип UserType из объекта QA (используйте typeof)

type UserType = typeof QA;

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными

type OptionalEmployee = Partial<IEmployee2>;

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee

type NameAndSalary = Pick<IEmployee2, "name" | "salary">;

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager

type WithoutIsManager = Omit<IEmployee2, "isManager">;

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)

type ReadOnlyEmployee = Readonly<IEmployee2>;

// 9. Создайте тип, для массива объектов, где в ключах могут быть строки, в значениях number, string или boolean

type ArrayOfObjects = {[key: string]: number | string | boolean}[];



