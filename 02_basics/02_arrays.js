//more on arrays

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  //change the original array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //didn't change original array, instead creates new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // in this method we can join two or more arrays

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

const real_Another_Array = anotherArray.flat(2); // Returns a new array with all sub-array 
//elements concatenated into it recursively up to the specified depth.
console.log(real_Another_Array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // convert given value in an array
console.log(Array.from({name: "hitesh"})) 
//interesting for interview purpose, you should tell them which type of array you want either keys or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));