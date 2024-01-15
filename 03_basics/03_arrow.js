//'this' refer to the current context
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  //hitesh, welcome to the website
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   //=> {} 
//as we are in node environment, so the current global context is empty (empty object)
//where as in browser the global object is window

//---------------------------------------------------------------------------------------------


// function chai(){
//     let username = "hitesh"
//     console.log(this);   //gives a lot of values
// }

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   //undefined
// }

// chai()
 
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);   //undefined
// }

//chai()
//this means that 'this' cann't access context inside the scope in functions
//---------------------------------------------------------------------------------------------


//arrow function

const chai =  () => {
    let username = "hitesh"
    console.log(this);     //{}  (nodejs environment)
}
// chai()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//if we use '{}' braces then we have to write the return keyword, whereas
//if we do not use the '{}'braces then we do not have to write the return keyword to return the statements

// const addTwo = (num1, num2) =>  num1 + num2   //implicit return arrow function

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "aditya"})   //object return implicitely and should be wrapped in '()'
console.log(addTwo(3, 4))
