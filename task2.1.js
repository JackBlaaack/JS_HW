/* Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>"

x2 - 6x + 9 = 0. - один корень */

const a = 1;
const b = -6;
const c = 9;
const disc = b ** 2 - 4 * a * c;

console.log(`Дискриминант: ${disc}`);

const root = -b / (2 * a);

console.log(`Ответ к уравнению 1: корень: ${root}`)

