

// let a =10;
// const b =20;
// var c =30;
// console.log(a);
// console.log(b);
// console.log(c);

// {} ->scope

if (true) {
    let a =10;
    const b =20;
    var c =30;
}
console.log(a); //error
console.log(b);     //error
console.log(c); 30

// global scope acts diferent in browser and node
