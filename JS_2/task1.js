// Создать переменную “age” и присвоить ей значение 10

// const age = 10;

//  Создать переменную “age_2” и присвоить ей значение 18

const minAge = 18;

// Создать переменную “age_3” и присвоить ей значение 60

const maxAge = 60;

// Создать if в котором будите проверять значение переменной age

// Если “age” < age_2, вывести в консоль “You don’t have access cause your age is ” + “age” + “ It’s less then age_2 ”
function checkAge(age) {
if (typeof age === 'number') {
if (age < minAge){ 
    console.log(`You don’t have access cause your age is ${age}. It’s less then ${minAge}`);

} else if (age >= minAge && age < maxAge) {
console.log("Welcome!");
} else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
} else {
    console.log( "Technical work");
}
} else {
    console.log('Incorrect value');
}
}

checkAge(10);
checkAge(17);
checkAge(18);
checkAge(19);
checkAge(59);
checkAge(60);
checkAge(61);
checkAge('61');


