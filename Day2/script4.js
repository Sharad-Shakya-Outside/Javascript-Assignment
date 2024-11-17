/*
Create a new array element.
    a. Create a new array with the multiplication of 5
    b. Create a new array finding the maximum number of new array (task number 4.a)
    c. Also list out the even numbers of both new and original array.
*/

let integers = [1, 4, 3, 6, 2, 15, 10, 14]; //Array created

console.table(integers); //Original array is displayed in the console

//Using map to multiply the elements of array by 5
let multiplicationOfFive = integers.map((integer, index) => {

    return integer * 5; //Multiplies elements in the array by 5
})
console.table(multiplicationOfFive); //Output: [5, 20, 15, 30, 10, 75, 50, 70]

//Using reduce function to find the greatest number in the new array
let maximumNumber = multiplicationOfFive.reduce((acc, item) => {

    acc = item > acc ? item : acc; //In every iteration, accumulator stores the greater element between the current value of accumulator and current element in the array

    return acc;
}, 0)
console.log("The maximum number in the new array is: ", maximumNumber);

//Using filter method to find the even numbers
let evenNumbersOfIntegers = integers.filter((x) => x % 2 === 0);
console.table(evenNumbersOfIntegers)

let evenNumbersOfFiveTimesIntegers = multiplicationOfFive.filter((x) => x % 2 === 0);
console.table(evenNumbersOfFiveTimesIntegers);