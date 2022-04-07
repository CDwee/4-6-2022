// Started at 5:20 4-6-2022

// Coding Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
if (dogSarah.curFood > dogSarah.recFood) {
  console.log('Your dog is eating too much!');
} else if (dogSarah.curFood < dogSarah.recFood) {
  console.log("Your dog isn't eating enough!");
} else if (dogSarah.curFood === dogSarah.recFood) {
  console.log('Your dog is eating perfectly fine!');
}

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch, ownersEatTooLittle);

// 4.
console.log(
  `${ownersEatTooMuch[0]}, ${ownersEatTooMuch[1]}, and ${ownersEatTooMuch[2]}'s dogs all eat too much!`
);
console.log(
  `${ownersEatTooLittle[0]}, ${ownersEatTooLittle[1]}, and ${ownersEatTooLittle[2]}'s dogs all eat too little!`
);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Converison
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('    2.5rem       '));
console.log(Number.parseFloat('    2.5rem  '));

// console.log(parseFloat('    2.5rem  '));

// Ended at 6:25 4-6-2022
