const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// Every
// 1. Determine if every number is greater than or equal to 0.
const isGreaterThanOrEqualTo = (currentValue) => currentValue >= 0;
console.log(nums.every(isGreaterThanOrEqualTo));

// 2. Determine if every word shorter than 8 characters.
const isShorterThanEight = (currentValue) => currentValue.length < 8;
console.log(panagram.every(isShorterThanEight));

// Filter
// 1. filter the array for numbers less than 4.
const result = nums.filter((num) => num < 4);
console.log(result);

// 2. Filter words that have an even length.
const result1 = panagram.filter((pan) => pan.length % 2 == 0);
console.log(result1);

// Find
// 1. Find the first value divisible by 5.
const found = nums.find((element) => element % 5 == 0);
console.log(found);

// 2. Find the first word that is longer than 5 characters.
const word = panagram.find((pan) => pan.length > 5);
console.log(word);

// Find Index
// 1. Find the index of the first number that is divisible by 3
const isDivByThree = (element) => element % 3 === 0;
console.log(nums.findIndex(isDivByThree));

// 2. Find the index of the first word that is less than 2 characters long.
const twoCharLong = (element) => element.length < 2;
console.log(panagram.findIndex(twoCharLong));

// For Each
// 1. Log each value of the array multiplied by 3.
nums.forEach((element) => console.log(element * 3));

// 2. Log each word with an exclamation point at the end of it.
panagram.forEach((element) => console.log(element.includes("!")));

// Map
// 1. Make a new array of each number multiplied by 100.
const map1 = nums.map((x) => x * 100);
console.log(map1);

// 2. Make a new array of all of the words in all uppercase.
const pan2 = panagram.map((x) => x.toUpperCase());
console.log(pan2);

// Some
// 1. Find out if some numbers are divisible by 7.
const isDivBy7 = (element) => element % 7 === 0;
console.log(nums.some(isDivBy7));

// 2. Find out if some words have the letter a in them.
const hasA = (element) => element.includes("a");
console.log(panagram.some(hasA));

// Reduce
// Add all of the numbers in the array together using the reduce method.
const sum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum);
// Concatenate all the words using reduce.
const sentence = panagram.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sentence);

// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
nums.sort();
console.log(nums);
// Try to sort without any arguments, do you get what you'd expect with the words array?
panagram.sort();
console.log(panagram);
// Sort the numbers in ascending order.
nums.sort((a, b) => a - b);

console.log(nums);
// Sort the numbers in descending order.
nums.sort((a, b) => b - a);

console.log(nums);
// Sort the words in ascending order.
panagram.sort((a, b) => a - b);

console.log(panagram);
// Sort the words in descending order.
panagram.sort((a, b) => b - a);

console.log(panagram);

// Working with data
const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];
//   Filter for products with a price that is less than 10
const product = products.filter((products) => products.price < 10);
console.log(product);
