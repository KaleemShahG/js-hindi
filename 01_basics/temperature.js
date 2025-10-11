// converting temperature from celcius to fehrenheit and suggest him some thing 

const prompt = require("prompt-sync")();

console.log("Hi");
let name = prompt("Enter your name:");
console.log("Tell me what can i convert it for u " + name);

// let CelciustoFahrenheit = ;
// let fahrenheitToCelcius =

let Tempconvertions = prompt("Enter 1 for Celcius to Fahrenheit \t and 2 for fahrenheit To Celcius ");

if (Tempconvertions ==1) {
    CelciustoFahrenheit();
    
    
} else {
    CelciustoFahrenheit();
        
}

function CelciustoFahrenheit(){
    let Temp = (Tempconvertions * 9/5) + 32;

    console.log(Temp);
    
}

function fahrenheitToCelcius(){
    let temp2 = (Tempconvertions - 32) * 5/9;

    console.log(temp2);
    
}