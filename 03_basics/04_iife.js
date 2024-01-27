// Immediately Invoked Function Expressions (IIFE)

// (function () {
//     // …
//   })();
  
//   (() => {
//     // …
//   })();
  
//   (async () => {
//     // …
//   })();
//IIFE is basically used to remove the global scope pollution on that particular function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //we have to use the semi-colon to end the IIFE

( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
} )('ADITA');

// () First parenthesis is used for function definition
// () second parenthesis is used for function execution