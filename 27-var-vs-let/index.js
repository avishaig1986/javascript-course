// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = is declared outside any function
// (if global, var will CHANGE browser's windows properties)

// messes with window property
var name = "Somename" // global variable

doSomething();

function doSomething(){

for (var index = 0; index < 3; index++) {
    //console.log(index)
}
}

console.log(index)




/*
// changing
let name = "whatevername"
console.log(this.name)
*/


// not changing
let name = "whatevername"
console.log(this.name)
