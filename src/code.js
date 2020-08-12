const { type } = require("os");

let a = 10;
let b = a;
a = 0;
console.log(a, b);
console.log( typeof(typeof(null)), typeof(null),typeof([]), typeof({}), typeof(x => x*2))
let reaction = 'yikes';
reaction[0]= 't';
console.log(reaction);

/*function cannot change value, because because It is passed by value
* but, if we, instead, pass an object or an array, you could have changed
* values within the object or the array.
*/
function double(x) {
  x = x * 2;
}
let money = 10;
double(money);

console.log(money);
let numberOftuntacles = 10;
numberOftuntacles = 'xx'
console.log(typeof(numberOftuntacles))
//null = 10;
//console.log(null);
// undefined different from ReferenceError
// we cannot attach a property to a primitive value such as null, undefined, even if the type of null is an object
let shampoo
console.log(shampoo)


let isSad = false;
let isHappy = !isSad; // true
let isFeeling = isSad || isHappy; // true
let isConfusing = isSad && isHappy; // false
isSad = true;

let countDwarves = function() { return 7; };
let dwarves = countDwarves;
console.log(dwarves, dwarves());
