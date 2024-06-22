function uniqueListOfPizza(array) {
  const competitorPizzas = [
    "Peperoni",
    "Caprichosa",
    "Diablo",
    "4 cheeses",
    "hawai",
  ].map((el) => el.toLowerCase());
  const uniqueArray = [];
  array = array.map((el) => el.toLowerCase());
  for (let pizza of array) {
    if (!competitorPizzas.includes(pizza)) {
uniqueArray.push(pizza)
    } 
    }

  return uniqueArray.length ? uniqueArray : null;
}

console.log(uniqueListOfPizza(["Peperoni","Caprichosa", "Diablo", 'Margarita']))
