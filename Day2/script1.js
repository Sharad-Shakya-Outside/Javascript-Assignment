/*
Find the even numbers from 1 to 100.
*/

let resultArray = []; //An empty array declared

for (let i = 1; i <= 100; i++) {
    //This for loop iterates from integers 1 to 100
    
    if (i % 2 == 0) {
        //If the iterator variable is divisible by 2, it is pushed to the resultArray

        resultArray.push(i); //Here the array stores even numbers
    }
}

console.table(resultArray); //The output of even numbers from 1 to 100 is displayed in the console