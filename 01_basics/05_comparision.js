//comparision operators gives out as true and false

//comparision with same datatype
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

//comparision with different datatype
console.log("---------------------");
console.log("2" > 1);
console.log("02" > 1);
//here js automatically converted string to number

console.log("---------------------");
console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null >= 0);   //true
//the reason is that an equality check == and comparision >, <, >=, <= works differently
//comparision convert null to a number, treating it as 0. that's why (3) null >= 0 is true and (1) null>0 is false

console.log("---------------------");
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("---------------------");
// ===  -> strict comparision
console.log("2" === 2);

//If you like my code do give stars:-)
//Keep coding!!
//Thankyou;-)