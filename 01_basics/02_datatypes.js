//datatypes

"use strict";  //treat all JS code as newer version

// alert(3 + 3)  -- works on browser only

/* Primitive - call by value
7 types: String
         Number
         Boolean
         null
         undefined
         Symbol => unique
         BigInt => standalone value
*/

let name = "aditya"   //string
let age = 20         //number
let check = true    //boolean
const outsideTemp = null
let userName;  //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);   //false
//both variables might be same but have different return value 

const bigNumber = 345874568345634534545n
//by writing 'n' at end makes the number as bigInt

//Non-Primitive - call by reference
//array 
const heros = ["shaktiman", "naagraj", "doga"]
//objects
let myObj = {
    name: "aditya",
    age: 22,
}
//functions
const myFunc = function(){
    console.log("hello world");
}

//typeof keyword - tells the type of the variables
console.log(typeof null);  // =>object
console.log(typeof undefined);  // =>undefined
console.log(typeof myFunc);  // => function object
console.log(typeof myObj);  // => object
console.log(typeof bigNumber); 

//link: https://262.ecma-international.org/5.1/#sec-11.4.3 

//If you like my code do give stars:-)
//Keep coding!!
//Thankyou;-)