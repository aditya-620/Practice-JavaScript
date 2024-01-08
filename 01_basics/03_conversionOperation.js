//type conversion in JavaScript
let score = 33

console.log(typeof score);
console.log(typeof(score));

console.log("---------------------");
console.log("33abc => number");
score = "33abc"
console.log("before:", typeof score);
let valueInNumber = Number(score)
console.log("after:", typeof valueInNumber);
console.log(valueInNumber);  //"33abc" => NaN(not a number) -not a pure number

console.log("---------------------");
console.log("null => number");
score = null
console.log("before:", typeof score);
valueInNumber = Number(score)
console.log("after:", typeof valueInNumber);
console.log(valueInNumber);

//Notes
/*
   "33" => 33
   "33abc" => NaN
   true => 1;  false => 0; 
*/

console.log("---------------------");
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//Notes
/*
   1 => true; 0 => false
   "" => false
   "aditya" =>true
*/

console.log("---------------------");
console.log("33 => string");
score = 33
console.log("before:", typeof score);
valueInNumber = String(score)
console.log("after:", typeof valueInNumber);
console.log(valueInNumber);

//If you like my code do give stars:-)
//Keep coding!!
//Thankyou;-)