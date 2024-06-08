// Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

function toggleFirstLetterCase(str) {
    const words = str.split(' ');
    let result = '';
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > 0) {
        const firstChar = word[0];
        const toggledChar = firstChar === firstChar.toUpperCase() ? firstChar.toLowerCase() : firstChar.toUpperCase();
        const toggledWord = toggledChar + word.substring(1);
        result += toggledWord;
      } else {
        result += ' ';
      }
    }
  
    return result;
  }
  
  console.log(toggleFirstLetterCase('I am super engineer'));
  
