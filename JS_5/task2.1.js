// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

const str = "I am the best AQA ever!";

const countOfChar = (str) => {
  const arrOfChar = str.split("");
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const result = arrOfChar.map((el) => {
    if (abc.includes(el.toLowerCase())) {
      const count = arrOfChar.filter(
        (char) => char.toLowerCase() === el.toLowerCase()
      ).length;
      return count;
    } else {
      return el;
    }
  });
  return result.join("");
};

console.log(countOfChar(str));
