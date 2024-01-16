//switch statements

//syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

//we use the break statement to end processing of a particular labeled statement within the switch statement.
//Without break , the program continues to the next labeled statement, 
//executing the statements until a break or the end of the statement is reached and it doesn't include default in this case