// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["ironman", "spiderman"]
const arr = [1, 2, "hello", true] 

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2);
console.log("element at index 1:",myArr[1]);   //access the elements

// // Array methods

// myArr.push(6)
// myArr.push(7) //[0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop()   //[0, 1, 2, 3, 4, 5, 6]
// console.log(myArr);

// myArr.unshift(9)  //[9, 0, 1, 2, 3, 4, 5, 6]
// myArr.shift()    //[0, 1, 2, 3, 4, 5, 6]

console.log(myArr.includes(9));   //false
console.log(myArr.indexOf(3));  //3 (returns index)
console.log("---------------------");


const newArr = myArr.join()  // bind the array and converts it into a string

console.log(myArr);
console.log(newArr);  //add all the element to string - typeof => string


//slice, splice
console.log("original array before slice:", myArr);
const myn1 = myArr.slice(1, 3)  //doesn't include last index

console.log("slice (1,3):", myn1);
console.log("original array after slice:", myArr);  //[ 0, 1, 2, 3, 4, 5 ]
console.log("---------------------");


console.log("original array before splice:", myArr); //[ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1, 3)
console.log("splice (1,3):",myn2);
console.log("original array after splice:", myArr);  //[ 0, 4, 5 ]
// splice removes the given portion in an original array, and also change in the original array

//If you like my code do give stars:-)
//Keep coding!!
//Thankyou;-) 