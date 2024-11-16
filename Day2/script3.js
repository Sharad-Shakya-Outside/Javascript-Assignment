/*
Create an array.
    a. Remove first element
    b. Remove last element
    c. Add new element at the beginning
    d. Add a new element at the end
    e. Console log all the arrays along with the original modified array.
*/

let laptops = ['Lenovo', 'Dell', 'Acer', 'Apple']; //An array of laptop brands

let originalArray = laptops.map((x) => x); //A new array is created that resembles original array of laptops. The map method allows to create a new array using pass by value method.

console.table(laptops); //Outputs the array

laptops.shift(); //Removes first element
console.log('Modified Array (First element removed):') 
console.table(laptops);
console.log('Original Array:') 
console.table(originalArray);

laptops.pop(); //Removes last element
console.log('Modified Array (Last element removed):');
console.table(laptops);
console.log('Original Array:');
console.table(originalArray);

laptops.unshift('MSI'); //New element added at the beginning
console.log('Modified Array (New element added at the beginning):');
console.table(laptops);
console.log('Original Array:');
console.table(originalArray);

laptops.push('Asus'); //New element added at the end
console.log('Modified Array (New element added at the end):');
console.table(laptops);
console.log('Original Array:');
console.table(originalArray);