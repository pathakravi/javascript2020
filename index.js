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

