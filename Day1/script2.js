//Function to convert celsius to Fahrenheit
const celsiusToFahrenheit = (num) => {
    let fahrenheitValue = (num / 10) * 18 + 32; //celsius to fahrenheit formula

    return fahrenheitValue;
}

//Function to convert fahrenheit to celsius
const fahrenheitToCelsius = (num) => {
    let celsiusValue = (num - 32)*10/18; //fahrenheit ot celsius formula

    return celsiusValue;
}

//Assign variables for conversion
let result1 = celsiusToFahrenheit(28);
let result2 = fahrenheitToCelsius(96);

//Display the converted values
console.log(`28 C = ${result1} F`);
console.log(`96 F = ${result2} C`);