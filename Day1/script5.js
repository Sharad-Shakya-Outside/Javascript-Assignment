/*
Write a function scopingExample() that demonstrates the following:
    a. A global variable x accessible throughout the script.	
    b. A local variable x inside a function that shadows the global variable.
    c. A block-level variable x that is scoped to an if block inside the function.
*/

let x = 'x-global'; //Global vairable
var y = 'y-global'; //Global variable

console.log(x); //Output: 'x-global' ; accesses global variable
console.log(y); //Output: 'y-global' ; accesses global variable

function scopingExample() {
    let x = 'x-local'; //Local variable
    var y = 'y-local'; //Local variable. Here, the value of variable y is changed to 'y-local' throughout the script

    console.log(x); //Output: 'x-local' ; accesses local variable 
    console.log(y); //Output: 'x-local' ; accesses local variable

    if(true) {
        let x = 'x-if-block'; //Block-level variable
        var y = 'y-if-block'; //Block-level variable. Here, the value of variable y is changed to 'y-if-block' throughout the script

        console.log(x); //Output: 'x-if-block' ; accesses block-level variable
        console.log(y); //Output: 'y-if-block' ; accesses block-level variable
    }

    console.log(x); //Output: 'x-local' ; Due to block scoping of let, the local variable is accessed
    console.log(y); //Output: 'y-if-block' ; Due to function scoping of var
}

scopingExample();

console.log(x); //Output: 'x-global' ; accesses global variable
console.log(y); //Output: 'y-if-block'