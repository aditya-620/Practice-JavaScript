// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [5, 4, 3, 2, 1]

for (const num of arr) {   //here num is the iterator
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
console.log("------------------------------------------------");
// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")   //do not take repeated key

console.log(map);

console.log();

for (const key of map) {   //here key is iterator, and can be of any name
    console.log(key);
}
//every key-value has been made as element in array
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

console.log("");

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//seperate 
// IN :- India
// USA :- United States of America
// Fr :- France

console.log("------------------------------------------------");
//objects

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
//this upper code will give errr as we cann't iterate objects from for-of loop