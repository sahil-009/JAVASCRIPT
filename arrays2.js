const marvel_heros = ["tony" ,"steve" ,"Thor"]
const dc_heros = ["superman", "batman" ,"flash"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros);  //[ 'tony', 'steve', 'Thor', [ 'superman', 'batman', 'flash' ] ]
                                 // 0     1        2                   [3]    
//console.log(marvel_heros[3][1]);    //batman

// const all_heros = marvel_heros.concat(dc_heros)  //here is limitation of one value
// console.log(all_heros);     //[ 'tony', 'steve', 'Thor', 'superman', 'batman', 'flash' ]

const all_new_heros = [...marvel_heros, ...dc_heros] //no limitations
// console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,8,9]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("sahil"));    //false
console.log(Array.from("sahil"));   //from() create any thing to array
console.log(Array.from({name: "sahil"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


