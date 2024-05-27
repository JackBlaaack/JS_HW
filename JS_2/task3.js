// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
const age = +prompt("Enter your age, please");
const minAge = 18;
const maxAge = 60;
if (!isNaN(age) && age > 0) {
  switch (true) {
    case age < minAge:
      alert(
        `You don’t have access cause your age is ${age}. It’s less then ${minAge}`
      );
      break;
  
    case age >= minAge && age < maxAge:
      alert("Welcome!");
      break;
  
    case age > maxAge:
      alert("Keep calm and look Culture channel");
      break;
  
    default:
      alert("Technical work");
  }
} else {
  alert(`Incorrect value`);
}

