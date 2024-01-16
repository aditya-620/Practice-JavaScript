const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);
//NOTE: forEach's function do not return any value
//-------------------------------------------------------------------

//filter - Returns the elements of an array that meet the condition specified in a callback function.
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4   //condition
// } )
//-------------------------------------------------------------------

//using forEach - but it doesn't return values
// const newNums1 = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums1.push(num)
//     }
// } )

// console.log(newNums);
//-------------------------------------------------------------------


//array having objects as its elements
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//user is filtering book with has genre as history
let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return (bk.publish > 1995) && (bk.genre === "History")
})

  console.log(userBooks);