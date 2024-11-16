//What is the difference between function scoping and block scoping. Write a code for differentiating them.

//Global scope

var x = 4; //Global scoping. Accessible globally/everywhere

function display() {
    //Function scope

    var y = 6; //Function scoped var, accessible only in this function

    console.log(y); //Displays 6 as output, no errors
}

display();
console.log(y); //Uncaught reference error, y is not defined here

{
    //Inside block scope
    let a = 7;
    const b = 8;

    console.log(a); //Displays 7
    console.log(b); //Displays 8
}

console.log(a); //Uncaught reference error
console.log(b); //Uncaught reference error