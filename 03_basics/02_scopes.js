//var c = 300   //the var doesn't obey scope
let a = 300  //global 
if (true) {
    let a = 10  //block scope
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);
//-------------------------------------------------------

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);   //can access the parent scope properties
    }
    // console.log(website);   //error - cann't access child properties, as not in its scope

    two()
}
one()  //function call
//-------------------------------------------------------------

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    } 
    // console.log(website);   //error
}
// console.log(username);  //error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   //this will run as it normal function

function addone(num){
    return num + 1
}

//addTwo(5)  //this will give error 
//as the below function is stored in a variable (known as expression) 
//and can only be accessed after the defination
const addTwo = function(num){
    return num + 2
}
addTwo(5)  //this will work