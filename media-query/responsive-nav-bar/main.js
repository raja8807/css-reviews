var nav = document.querySelector(".nav")
let toogleBtn = document.querySelector(".toogle")
let bars = document.querySelectorAll(".bar")

let deg = 90;

toogleBtn.addEventListener("click" , ()=>{

    let navDisplay = window.getComputedStyle(nav).display;
    
    if(navDisplay == "none"){
        nav.style.display = "block"

        bars.forEach((bar)=>{
            bar.style.backgroundColor = "#eeeeee"
        })

    }else if(navDisplay == "block"){
        nav.style.display = "none"

        bars.forEach((bar)=>{
            bar.style.backgroundColor = "#ff5f00"
        })
    }

    toogleBtn.style.transform = "rotate("+deg+"deg)"
    deg = deg + 90;
})

// setInterval(()=>{
//     toogleBtn.style.transform = "rotate("+deg+"deg)"
//     deg = deg + 90;
// },100)