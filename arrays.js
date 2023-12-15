// Arrays

const myarr =[0,9,2,3,4,5,6]
// const myarr2 = new Array(1,2,3,4)
// console.log(myarr2);
// console.log(myarr[0]);




/*myarr.push(7)
myarr.pop() //don't need parameter or value directly remove last value
console.log(myarr);
*/
/*myarr.unshift(9)    //it add value in first
myarr.shift()       //don't need parameter or value directly
console.log(myarr);
console.log(myarr.includes(9)); //false
console.log(myarr.indexOf(1));  //-1 means false
*/

// const newarr = myarr.join()
// console.log(myarr);          //array
// console.log(typeof newarr);  //string

// slice , splice
console.log("A ", myarr);
const myn1 = myarr.slice(1, 3)

console.log(myn1);
console.log("B", myarr);
const myn2 = myarr.splice(1, 3)
console.log(myn2);
