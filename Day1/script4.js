console.log(a);

console.log(b);

console.log(c);

var a = 5;

console.log(a);

let b = 6;
const c = 7;

console.log(b);
console.log(c);

hoistingExample1();

function hoistingExample1() {
    let i = 1;
    console.log(i);
}

hoistingExample2();

const hoistingExample2 = () => {
    let j = 2;
    console.log(j);
}

hoistingExample2();