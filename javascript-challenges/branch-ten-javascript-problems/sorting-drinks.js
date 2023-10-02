// You will be given an array of drinks, with each drink being an object with two properties: name and price.
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

function sortDrinkByPrice(drinks) {
  drinks.sort((a, b) => a.price - b.price);
  return drinks;
}

const drinks = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 10 }
];

sortDrinkByPrice(drinks);
