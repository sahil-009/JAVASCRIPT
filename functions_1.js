// function sayMyName(){
//     console.log("S");
//     console.log("A");
//     console.log("H");
//     console.log("I");
//     console.log("L");
// }

// sayMyName   //this is function reference
// sayMyName()

// function addTwoNumbers(number1, number2){   //num1 ,num2 are parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)     //3,4 are called aguments

// function addTwoNumbers(number1, number2){  
//     // let result = number1 + number2
//     // return result 
//         //or
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 4)

// console.log(result);    //undefined
// console.log("Result: ",result);     //after adding line: 19

/*  if user have to return something then he have to declare in a var(25)
 then consle.log var(28) :line  */


// function loginUserMessage(username){
//     return `${username} just logged in `
// }

// console.log(loginUserMessage("sahil"))

function loginUserMessage(username){
    if (username === undefined) {   //username is not given so it is undefined
        console.log("Enter a username :");
        return
    }

    return `${username} just logged in `
}

console.log(loginUserMessage())



