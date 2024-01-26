let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//injecting our own method in Object
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

//injecting our own method in Array
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()    //have access to hitesh(), as heroPower is object
// myHeros.hitesh()      //have access to hitesh(), as myHeros is array
// myHeros.heyHitesh()   //have access to heyHitesh(), as myHeros is array
// heroPower.heyHitesh()  //do not have access to heyHitesh(), as heroPower is object

//---------------------------------------------------------------------

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport    //inheriting the property of TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


//--------------------------------------------------------

//injecting our own method into string, which tells the actual length of string

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()




//-------------------------------------------
//factory function?