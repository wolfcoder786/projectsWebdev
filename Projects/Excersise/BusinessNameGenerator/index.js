let random = Math.random();
let first, second, third;

//first word generate
if (random < 0.33) {
  first = "Crazy";
} 
else if (random < 0.66 && random >= 0.33) {
  first = "Amazing";
} 
else if (random < 100 && random >= 0.66) {
  first = "Fire";
}

//Second word generate
random = Math.random();

if (random < 0.33) {
  second = "Engine";
} 
else if (random < 0.66 && random >= 0.33) {
  second = "Foods";
} 
else if (random < 100 && random >= 0.66) {
  second = "Garments";
}

//Third word generate
random = Math.random();

if (random < 0.33) {
  third = "Bros";
} 
else if (random < 0.66 && random >= 0.33) {
  third = "Limited";
}
else if (random < 100 && random >= 0.66) {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);