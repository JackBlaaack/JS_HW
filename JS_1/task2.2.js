/* Вывести в консоль ответы в виде "Ответ к уравнению 2: <корень> и <корень>"

x2 - 4x - 5 = 0. - два корня */

const a = 1;
const b = -4;
const c = -5;
const disc = b ** 2 - 4 * a * c;

console.log(`Дискриминант: ${disc}`);

const root1 = (-b + Math.sqrt(disc) / (2 * a));

const root2 = (-b - Math.sqrt(disc) / (2 * a));

console.log(`Ответ к уравнению 2: корень1: ${root1} и корень2: ${root2}`)