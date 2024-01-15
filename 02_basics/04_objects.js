// const tinderUser = new Object()  //singleton object
const tinderUser = {}   //not a singleton objects

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aditya",
            lastname: "rastogi"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2, obj4) //here obj1 acts as target and rest as source
// const obj3 = Object.assign({}, obj1, obj2, obj4) //here {} acts as target and rest as source
//we are storing in obj3 as object.assign returns an object

const obj3 = {...obj1, ...obj2}   // '...' is called as spread operator
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));   //output in form of array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  //every key: value pair become array insode an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if the  property exists

console.log("---------------------");
//destructure concept
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
} 

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);   //hitesh

const {courseInstructor: instructor} = course
console.log(instructor);   //hitesh
console.log("---------------------");

//below is a format for json - used for API
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]