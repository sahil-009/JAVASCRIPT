//const tinderuser = new Object() //singelton obj

const tinderuser = {}       //non singleton obj

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser ={
    email: "sahil@gmail.com",
    fullname:{
        userfullname:{
            fistname: "sahil",
            lastname: "mund"
        }
    }
}
console.log(regularuser.fullname.userfullname);

// assign objects through assign func

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}
const obj3 = {7:"g", 8:"h", 9:"i"}

// const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1,...obj2,...obj3} //spread operator mostly used

// console.log(obj4);

//arrays of objects from db
const users =[
    {
    id :1,
    email:"1@gmail.com"
    },
    {
    id :2,
    email:"2@gmail.com"
    },
    {
    id :3,
    email:"4@gmail.com"
    },

]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));



//destructure object
const course ={
    name:"web dev",
    price:999,
    courseinstructor:"sahil"
}
const {courseinstructor: instructor} = course   //give a name apporioriate name
console.log(instructor);

