/**
 * this class we learn array method
 * 
 */
const fruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Grapes",
  "Pineapple",
  "Watermelon"
];
console.log('fruits=>', fruits);

// const person= ['apple' , 'banana', 'mango', 'Elu'];
// const cars = new Array(["Saab", "Volvo", "BMW"]);

// console.log(person.length);
// console.log(cars[0].length);

// let fruit = fruits.at(-3);
// console.log(fruit)


// constructor
console.log(fruits.constructor);

// copyWithin
let copyWithin = fruits.copyWithin(2 ,0);
console.log(copyWithin);



// every
// Create an Array
const ages = [32, 33, 12, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
console.log('every' , ages.every(checkAge));
console.log('some', ages.some(checkAge));

// fill
let filmethod= fruits.fill('kix' , 3);
console.log('filmethod' , filmethod);