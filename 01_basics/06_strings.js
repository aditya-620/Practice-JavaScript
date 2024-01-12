const name = "aditya"
const repoCount = 7

//old way to concatinate string
//console.log(name + repoCount);

//new way - using backticks(``)
//using this we create string interpolation - which provide us place holders and we can inject any varibles
console.log(`my name is ${name} and my repo count is ${repoCount}`);

console.log("---------------------");
const gameName = new String('hitesh-hc-com')

console.log("at index 0:", gameName[0]);
console.log(gameName.__proto__);  
//to use string method we have to use proto, but now the js is smart and no need to write

console.log("---------------------");
console.log("length of string:", gameName.length);
console.log("uppercase:", gameName.toUpperCase());
console.log("char at index 2:", gameName.charAt(2));
console.log(gameName.indexOf('t'));

console.log("---------------------");
const newString = gameName.substring(0, 4)
console.log("string from index 0 to 4:", newString);

const anotherString = gameName.slice(-8, 4)
console.log("string from index -8 to 4:", anotherString);

console.log("---------------------");
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log("removing spaces using trim method:", newStringOne.trim());

console.log("---------------------");
const url = "https://hitesh.com/hitesh%20choudhary"

console.log("replacing %20 with -:", url.replace('%20', '-'))

console.log("checking is 'sunder' is in string:", url.includes('sundar'))

console.log("split the string when '-' appears:", gameName.split('-'));
console.log("---------------------");

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4
console.log("---------------------");

//LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//If you like my code do give stars:-)
//Keep coding!!
//Thankyou;-)