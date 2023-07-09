let gasB = document.querySelector(".gasB")
let tempB = document.querySelector(".tempB")
let disp = document.querySelector(".displaybox")
let tempval = document.querySelector(".tempTag")
let senBox = document.querySelector(".gasVal")
let slider = document.querySelector(".out")
let slideCont = document.querySelector(".in")
console.log(slideCont)
let hello = document.querySelector(".helloText")

tempval.classList.add("hidden")
senBox.classList.add("hidden")





tempB.addEventListener("click",()=>{
    tempB.classList.add("position")
    gasB.classList.remove("position")
    senBox.classList.add("hidden")
    tempval.classList.remove("hidden")
    hello.style.display = "none"
    
})
gasB.addEventListener("click",()=>{
    gasB.classList.add("position")
    tempB.classList.remove("position")
    tempval.classList.add("hidden");
    senBox.classList.remove("hidden")
    hello.style.display = "none"
})




