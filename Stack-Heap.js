// stack (Primitive) get a copy
// heap (Non-Primitive) reference or get original value



// stack
let myname = "sahil";
let anothername = myname;
anothername="mund";

console.log(myname); //sahil
console.log(anothername); //mund

// heap
let userone = {
    email: "user@gmail.com",
    pass:123
}

let usertwo = userone;

usertwo.email = "sahil@gmail.com"
console.log(userone.email); //sahil@gmail.com
console.log(usertwo.email); //sahil@gmail.com