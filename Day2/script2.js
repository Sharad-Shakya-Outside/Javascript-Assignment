/*
Create an array. Remove 3 elements starting from index 4, and insert 5 new elements at that position using the appropriate method.
*/

let numbers = [10, 20, 30, 40, 50, 60, 70, 80]; //Array definition

numbers.splice(4, 3, "el-1", "el-2", "el-3", "el-4", "el-5"); //Using slice to remove 3 elements at index 4 and insert 5 elements at that position

console.table(numbers); //modified array is displayed on the console