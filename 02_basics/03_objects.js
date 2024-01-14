//there are two ways to declare the objects
//1. literals - does not create singleton
//2. constructors - creates singletons

//object literals
const mySym = Symbol("key1")  //a symbol

const JsUser = {
    name: "Hitesh",  //by default all the keys are taken as strings by js
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  //using symbol as key in objects
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//some access methods
console.log(JsUser.email)  //using '.' operator
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])  //symbol access

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)   //this will not let you to do any changes further

// JsUser.email = "hitesh@microsoft.com"  //it will not change as we are using freeze
// console.log(JsUser);

console.log("---------------------");
//functions
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log("---------------------");
console.log(JsUser);