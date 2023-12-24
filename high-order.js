//for-of

// const arr = [1, 2, 3, 4 ,5]

// for (const num of arr) {    //num is iterator like i in for loop variable
//     console.log(arr);
// }

// const greeting = "hell o world !"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
// }


//  Maps
// const map = new Map()
// map.set('IN' ,'India')
// map.set('Fr' ,'France')
// map.set('IN' ,'India')
// console.log(map);

//it donot print duplicate values

// for (const [key , value] of map) {
//     console.log(key, ":-", value);
// }

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman',
// }
// for (const [key, value] of myobject) {
//     console.log(key, ':-' ,value);
// } error

const myObject = {
    js: "javascript",
    cpp: "c++",
    kt: "kotlin",
}

for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);

}

const pr = ["js" ,"rb" ,"py" ,"java"]
for (const key in pr) {
    console.log(pr[key]);
}

//map is not iteratable