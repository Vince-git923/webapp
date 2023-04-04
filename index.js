let powerB = document.querySelector(".powerB")
let tempB = document.querySelector(".tempB")
let disp = document.querySelector(".displaybox")
let tempval = document.querySelector(".tempTag")
let powerval = document.querySelector(".powerTag")
let slider = document.querySelector(".out")
let slideCont = document.querySelector(".in")
console.log(slideCont)
let hello = document.querySelector(".helloText")

tempval.classList.add("hidden")
powerval.classList.add("hidden")





tempB.addEventListener("click",()=>{
    tempB.classList.add("position")
    powerB.classList.remove("position")
    powerval.classList.add("hidden")
    tempval.classList.remove("hidden")
    hello.style.display = "none"
    
})
powerB.addEventListener("click",()=>{
    powerB.classList.add("position")
    tempB.classList.remove("position")
    tempval.classList.add("hidden");
    powerval.classList.remove("hidden")
    hello.style.display = "none"
})


slider.classList.add("slideback")

slider.addEventListener("click",()=>{
    slider.classList.toggle("slide")
    if(slider.classList.contains("slide")){
        slideCont.style.border = "4px solid red"
        
    }else{
        slideCont.style.border = "4px solid green"
        
    }
})

