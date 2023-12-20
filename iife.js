// iife ->Immedietly Invoked Function Expression

// () ->iife function
// () ->normal function
(function name(){
    console.log("sahil");
})(); //-> this () is iife function
//to remove global variable problems iife functions is used.
/*  ; colon is used in iife function because,
 it don't /know where to stop the function
  so after completion of function ;(semi-colon) is used .
*/
(function addr(){
    console.log("india");
})();

( (marvel) => {
    console.log(`DB connected to ${marvel}`);
} )('steve rogers')