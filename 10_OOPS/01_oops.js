const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this   //this is inplicitly defined - means if we don't return this then also by default it is returned 
}

const userOne = new User("hitesh", 12, true)          //new keyword is a constructor                                                                s function
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);   //constructor is basically refrence to itself
//console.log(userTwo);

//whenever we use a new keyword an object is created called as instance 
//a constructor function is called due to new keyword, and combine all the arguments in this keyword
//and then we can access it

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof