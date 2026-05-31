
// JSON, JSON Structure, parse, stringify, JSON properties
const user = {
    id:1,
    name: 'Porosh',
    age:23
}
// console.log(user);

const JSONStringify = JSON.stringify(user);
console.log(JSONStringify);


// parse
const jsonParse = JSON.parse(JSONStringify);
console.log(jsonParse);
