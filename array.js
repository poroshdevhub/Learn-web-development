//  Array, index, set by index, indexOf

// Array
let fruits = [
    "apple",
    "banana",
    "mango",
    "orange",
    "grape",
    "pineapple",
];

// index 

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// set by index
fruits[1] = 'many Banana';
console.log(fruits);

// indexOf find Position
let findIndex = fruits.indexOf('mango');
console.log(findIndex);




// 3 Array advanced, Push, pop, unshift , shift, array length, slice

// push add 
fruits.push('comla');
console.log('push=>', fruits);

// pop remove
fruits.pop();
console.log('pop=>', fruits);

// unshift first add item 
fruits.unshift('newApple');
console.log('unshift=>', fruits);

// shift remove first element item
fruits.shift();
console.log('shift=>', fruits);

// array length
console.log('array length=>', fruits.length);

// slice
let slice = fruits.slice(1, 4);
console.log('slice=>', slice);
