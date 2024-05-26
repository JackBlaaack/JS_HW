// Создать переменную “age” и присвоить ей значение 10

const age = 10;

//  Создать переменную “age_2” и присвоить ей значение 18

const age_2 = 18;

// Создать переменную “age_3” и присвоить ей значение 60

const age_3 = 60;

// Создать if в котором будите проверять значение переменной age

if(age === 10) {
    console.log(age)
} else {
    console.log("wrong age")
}

// Если “age” < age_2, вывести в консоль “You don’t have access cause your age is ” + “age” + “ It’s less then age_2 ”

if (age < age_2){ 
    console.log(`You don’t have access cause your age is ${age}. It’s less then ${age_2}`)

} else if (age >= age_2 && age < age_3) {
console.log("Welcome!")
} else if (age > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log( "Technical work")
}



