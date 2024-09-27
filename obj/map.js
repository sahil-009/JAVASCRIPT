// const obj ={
//     name : 'sahil',
//     age : 20
// }
// console.log(obj.name);

// const map = new map()
// map.set('name' , 'sahil')
// map.set('age', 20)
// console.log(map.get('name'))


function waitfor3s(resolve) {
    setTimeout(resolve , 3000)
}
function main(){
    console.log("main is called");
    
}
waitfor3s(main)
