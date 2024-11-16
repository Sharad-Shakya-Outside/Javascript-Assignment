//How do var, let, and const differ in terms of scope and hoisting? Write a code differentiating them.

// console.log(a); //As var is hoisted to the top, this outputs undefined as var is declared at the top but not defined yet

// console.log(b); //Uncaught reference error as variable defined by let is not hoisted

// console.log(c); //Uncaught reference error as variable defined by const is not hoisted

var a = 5; //Variable is finally defined

console.log(a); //Now the output is 5 instead of undefined

const c = 7; //variables defind outside block scope
let b = 10; //variables defind outside block scope

console.log(b); //Here, output is 10

{
    //variables defined inside block scope
    let b = 6; 

    console.log(b); //Here, output is 6
    console.log(c);
}

console.log(b); //No errors here as variables are already defined and declared above. The output is 10 here again.
console.log(c); //No errors here as variables are already defined and declared above

hoistingExample1(); //The function is executed as it is declared at the top

function hoistingExample1() {
    //This type of function is always hoisted at the top

    let i = 1;
    console.log(i);
}

hoistingExample2(); //Uncaught reference error

const hoistingExample2 = () => {
    //Such arrow functions defined by let or const are not hoisted.

    let j = 2;
    console.log(j);
}

hoistingExample2(); //Finally executed as this is called after the function's declaration