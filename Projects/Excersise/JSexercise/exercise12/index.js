console.log("index.js initialization")
let boxes  = document.getElementsByClassName("boxes")
// console.log(boxes)
function getrandomcolor() {
    let val1  = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3  = Math.ceil(0+Math.random()*255);
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e =>{
    e.style.backgroundColor = getrandomcolor()
})