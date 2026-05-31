

// Integer float parseInt parseFloat type conversion

let num1 = 10;
let num2 = '15.5';

console.log('parseInt=>' , num1 + parseInt(num2));

console.log('parseFloat=>' , num1 + parseFloat(num2));

// modern way Number() and sortCut +value

console.log('Number=>' , Number(num1) + Number(num2));
console.log('sortCut +=>' , +num1 + +num2);
