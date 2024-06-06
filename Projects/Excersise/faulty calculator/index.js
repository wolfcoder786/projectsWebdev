let random = Math.random();

let a = prompt("Enter number1");   
let b = prompt("Enter number2");            
let c = prompt("Enter operation"); 

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

// its shows fault only 10% of the times

if (random>0.1) {
    // performing the right calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}
else{
    // performing the wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}