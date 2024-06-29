// forloop method
let a = 3
function Factfor(number) {
   let fact = 1 ;
   for (let index = 1; index <= number; index++) {
      fact = fact * index ;
    
   }
   return fact
}
console.log(Factfor(a));