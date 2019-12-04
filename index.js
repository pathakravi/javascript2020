// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/*
Destructuring :
Destructuring is a Javascript expression that makes it possible to unpack values from array or properties from object to distinct values.
Destrcuturing examples :
*/
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

let a, b;
[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]

/* Parsing an array returned from function */
function f() {
  return [1, 2];
}
let a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2

/* Ignore values */
function f() {
  return [1, 2, 3];
}
const [a, , b] = f(); // const [,,] = f();
console.log(a); // 1
console.log(b); // 3

const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

/* Object destruturing */
const o = {p: 42, q: true};
const {p, q} = o;
console.log(p); // 42
console.log(q); // true 

/* Assignment without decalration */
({a, b} = {a: 1, b: 2});
console.log(a); //1

/* Assigning to a new variable */
const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
console.log(foo); // 42 
console.log(bar); // true

/* Assignig new variable name with default value */
const {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa); // 3
console.log(bb); // 5

/* Unpacking fields passed as an object parameter */
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
};
function userId({id}) {
  return id;
}
function whois({displayName, fullName: {firstName: name}}) {
  return `${displayName} is ${name}`;
}
console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"

/* Computed object property name and destructuring */
let key = 'z';
let {[key]: foo} = {z: 'bar'};
console.log(foo); // "bar"

/* Invalied Javscript Identifier */
const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;
console.log(fizzBuzz); // "true"

const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];
for (const {id, name} of props) {
console.log(name); // "Buzz"
console.log(id);
}

/* Prototype chain is looked up when object is deconstructed */
let obj = {self: '123'};
//obj.__proto__.prot = '456';
//const {self, prot} = obj;
console.log(self);// self "123"
//console.log(prot);// prot "456"（Access to the prototype chain）



