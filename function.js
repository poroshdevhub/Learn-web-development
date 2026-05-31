

function myFun(a = 0, b = 0) {
    return result = a + b;

}
// const result = myFun();
console.log(myFun(2, 3));


// function Expression
const sayHello = function (num1 = 1, num2 = 0) {
    console.log('Expression=> ', num1 * num2);
}
sayHello(5, 10);


// return

function add(a,b){
    return a +b;
}
function minus(x,y){
    return x-y;
}

const value = add(minus(25,50), 10);
console.log('return=>',value);
