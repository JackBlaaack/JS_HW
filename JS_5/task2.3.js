// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возврастанию количества гласных букв в слове.

const words = ["Masha", "Tolya", "Jack"];

function countVowels(words) {
    const match = words.match(/[aeiou]/gi);
    if (match) {
        return match.length
    } else {
        return 0;
    }
}

function sortWords(words) {
    return words.sort((a, b) => {
        const countVowelA = countVowels(a);
        const countVowelB = countVowels(b);
       return countVowelA - countVowelB;
    });


}

console.log(sortWords(words));