// Scope (global, block, lexical, access outer scope)

// global scope

const name = 'Porosh';

function show() {
    console.log(name);
    
}

show();
console.log(name);


// block scope

{
    let age = 23;
    console.log(age);
    
}
// console.log(age); // error

// lexical scope
// 👉 inner function → outer variable can access;
// 👉 outer function → inner variable can't access;
function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();