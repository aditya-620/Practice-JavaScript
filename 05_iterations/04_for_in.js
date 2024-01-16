const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// for (const key in myObject) {
//     console.log(key);
// }
// console.log("------------------------------------");
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
console.log("------------------------------------");
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key, programming[key]);
}
//the arrays also have its own keys, starting from 0 only
//when we print the key(iterator) it simply print the 'key' (0,1,2,..)

console.log("------------------------------------");
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

//we cann't iterate the map using this loop