

const persons = {
    name:'Porosh Hossain',
    age:23,
    location: {
        city:'jhenida',
        zip:7320
    },
    sayHello: function(){
         return ('hello Porosh!');
        
    }
}

console.log(persons.name);

const getName = 'name';
const getAge = 'age';
console.log(persons[getAge]);

console.log('sayHello=>' , persons.sayHello());

