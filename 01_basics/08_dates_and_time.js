// Dates and time in JavaScript

let myDate = new Date()   //created date object
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(typeof myDate);
console.log("---------------------");

// different ways to initialize dates
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());
console.log("---------------------");


let myTimeStamp = Date.now()

console.log(myTimeStamp);   //in miliseconds
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  //in seconds

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getMonth() + 1);  //months satrts from 0 in js
console.log(newDate.getDay());  //days also start from 0(sunday)
console.log(newDate.getFullYear());
console.log("---------------------");

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "numeric"
}));

//If you like my code do give stars:-)
//Keep coding!!
//Thankyou;-) 