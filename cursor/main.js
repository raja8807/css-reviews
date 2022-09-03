let boxes = document.querySelectorAll(".box")
let bx = document.getElementById("box1")
// console.log(bx.style.cursor);

let i = 1;

function curs(box){
    // console.log(box);
    // console.log(
    box.firstElementChild.innerText =i+"- "+ window.getComputedStyle(box).cursor;
    i++
    
}

boxes.forEach(curs)