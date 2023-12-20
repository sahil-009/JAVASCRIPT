const user = {
    username : "sahil",
    price : 999,

    welcomeMessage: function () {
        console.log(`${this.username} ,welcome to website`);
    }   //this keyword is used to print current context 
}

// user.welcomeMessage()
// user.username = "mund"
// user.welcomeMessage()

function anything(){
    let username = "sahil";
    console.log(this.username);
}
// anything()  //undefined

/*

this kwrd canot use inside a function it only use inside a object

*/

const sahil = function(){
    let username = "sahil"
    console.log(this.username); //undefined
}
// sahil()


        //arrow function

    const abc = () => {
    let username = "sahil"
    console.log(this); 
}

// const addtwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addtwo(4,5));


// implicit return
const addtwo = (num1,num2) =>  (num1+num2)  
//used in react
// console.log(addtwo(4,5));



//return object
const value = (val1 , val2) => ({name:"sahil"})
console.log(value());
