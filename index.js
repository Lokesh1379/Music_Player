let circle = document.getElementById("outer-circle");
let btn = document.getElementById("btn")
let play = document.getElementById("audio-player")
btn.addEventListener("click", () => {
    circle.style.animation = "none"
    console.log("Stoped")
})

console.log(play.querySelector('button[data-id="play-button"]'))