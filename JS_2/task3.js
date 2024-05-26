// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
const age = +prompt("Enter your age, please")
const age_2 = 18;
const age_3 = 60;
switch (true) {
    case age < age_2:
      alert(
        `You don’t have access cause your age is ${age}. It’s less then ${age_2}`
      );
      break;
  
    case age >= age_2 && age < age_3:
      alert("Welcome!");
      break;
  
    case age > age_3:
      alert("Keep calm and look Culture channel");
      break;
  
    default:
      alert("Technical work");
  }