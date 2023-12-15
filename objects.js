//singleton

//object literals
// Object.create   //singleton method

const mysym = Symbol("sym1")
const JsUser = {
    name: "sahil" , //key and value pair
    "full name": "sahil mund",
    age: 19,
    [mysym]: "value1",  //symbols used
    location: "India",
    email: "sahilmund@gmail.com",
    isLoggedin: false,
    lastLoginDay: ["Monday" , "Saturday"]

}
// console.log(JsUser.name);   //to access
// console.log(JsUser["full name"]);   //line 7 cant access in 15 num method
// console.log(JsUser[mysym]);


JsUser.email = ("sahil@microsoft.com")
// Object.freeze(JsUser)
// JsUser.email = ("sahil@google.com")
// console.log(JsUser);

JsUser.greeting =  function(){
    console.log("Hello js user");
}
JsUser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
