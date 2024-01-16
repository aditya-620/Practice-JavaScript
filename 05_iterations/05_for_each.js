const coding = ["js", "ruby", "java", "python", "cpp"]

//here we are using the call back functions, so name of the function is not required
coding.forEach( function (val){    //val is the parameter(each element of the array)
    console.log(val);
} )

//---------------------------------------
//using arrow funciton
coding.forEach( (item) => {
    console.log(item);
} )

//---------------------------------------
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)   //function is declared somewhere else, so just give the name

coding.forEach( (item, index, arr)=> {   //the forEach have different access of parameters
    console.log(item, index, arr);
} )

//---------------------------------------------------------------

//[{}, {}, {}]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )