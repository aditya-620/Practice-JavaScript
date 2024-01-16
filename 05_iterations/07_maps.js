const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


//chaining concept
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

/*
Note: maps return all kind of values where as filter only retuns when the condition is true

Note: In the concept of chaining the 2nd map will get the output as its inout of the first map and
similarly the filter will get the output of the 2nd map as its input 
*/