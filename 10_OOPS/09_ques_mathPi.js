
//getOwnPropertyDescriptor() - tells the hidden properties of the object
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")  

// console.log(descripter);

// console.log(Math.PI);   //3.14..
// Math.PI = 5   //we cannot overide the propert of PI
// console.log(Math.PI);  //3.14..

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* {
    value: 'ginger chai',
    writable: true,
    enumerable: true,
    configurable: true
   }
*/


Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* {
    value: 'ginger chai',
    writable: true,
    enumerable: false,
    configurable: true
   }
*/

for (let [key, value] of Object.entries(chai)) {   //we cann't iterate object, so we use object.entries
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
// price : 250
// isAvailable : true
//as enumerable is false in name property so, cann't iterate to name