const score = 400
console.log(score);  //400

const balance = new Number(100)
console.log(balance);   //[Number: 100]
console.log("---------------------");

console.log(balance.toString().length);  //converted to string => 3
console.log(balance.toFixed(2));  //100.00
console.log("---------------------");

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));
console.log("---------------------");

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log("---------------------");

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));   //absolute value (-ve to +ve)
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //round off to upper value => 5
console.log(Math.floor(4.9));  //rounf off to lower value => 4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log("---------------------");  
console.log(Math.random());  //range: [0,1]

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


//using this method we can set our set of range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log("---------------------");

//If you like my code do give stars:-)
//Keep coding!!
//Thankyou;-) 