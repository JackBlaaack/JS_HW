// Сделать из "*" в консоли равнобедренный треугольник и ромб

const height = 5;

for (let i = 0; i < height; i++) {
  let stars = '';
  for (let space = 0; space < height - i - 1; space++) {
    stars += ' ';
  }
  for (let star = 0; star < (2 * i + 1); star++) {
    stars += '*';
  }
  console.log(stars);
}


// const stars = '*'
// const space = ' '
// for(let i = 1; i <= height; i++) {
//  const offset = space.repeat(height - i + 1)
//  const  stars2 = i > 1 ? ' ' + stars: ''
//  const rowOfStars =  stars2 + stars.repeat(i - 1)
//  console.log(offset + rowOfStars + offset)
// }

const rows = 5
const star = '*'
const space = ' '

for(let i = 1; i <= rows; i++) {
  const offset = space.repeat(rows - i + 1)
  const stars = i > 1 ? ' ' + star : ''
  const rowOfStarsUp =  star + stars.repeat(i - 1)
  console.log(offset + rowOfStarsUp + offset)
}

for(let j = rows - 1; j > 0; j--) {
  const offset = space.repeat(rows - j + 1)
  const stars = j > 1 ? ' ' +  star : star
const rowOfStarsDown =  star + stars.repeat(j - 1)
  console.log(offset + rowOfStarsDown + offset)
}

