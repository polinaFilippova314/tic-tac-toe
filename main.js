'use strict'
let classes = ["circle","cross"]
let switcher = true
const buttons = document.querySelectorAll(".play-field_item")
let gamers = [[0,0,0,0,0,0,0,0,0]]
let final = false
let startButton = document.querySelector(".start")
let winner = document.getElementById("winner")
let nameOfWinner = ""
let crossCount = 0
let circleCount = 0
let crossField = document.querySelector(".cross .number")
let circleField = document.querySelector(".circle .number")
function CheckSum(base){
    let first = base[0]+base[1]+base[2]
    let second = base[3]+base[4]+base[5]
    let third = base[6]+base[7]+base[8]
    let fourth = base[0]+base[3]+base[6]
    let fifth = base[1]+base[4]+base[7]
    let sixth = base[2]+base[5]+base[8]
    let seventh = base[0]+base[4]+base[8]
    let eight = base[2]+base[4]+base[6]
    if (first == 3 || second == 3|| third == 3 || fourth == 3 || fifth == 3 || sixth  == 3|| seventh == 3 || eight == 3){
        nameOfWinner = "Crosses"
        crossCount++
        return true
    } else if (first == -3 || second == -3|| third == -3 || fourth == -3 || fifth == -3 || sixth  == -3|| seventh == -3 || eight == -3){
        nameOfWinner = "Circles"
        circleCount++
        return true
    } else{
        return false
    }
}
function DisableAll(){
    for (let i=0; i<buttons.length; i++){
        buttons[i].disabled = true
    }
}
function ClickButton(classes, index){
    let i 
    if (switcher){
        i = 1
        switcher=false
    }  else{
        i=0
        switcher = true
    }
    if (buttons[index].disabled === false){
        buttons[index].classList.add(classes[i])
        if (i==1){
            gamers[index] = 1
        } else{
            gamers[index] = -1
        }
        if (CheckSum(gamers)){
            final = true
            DisableAll()
            startButton.classList.add("block")
            winner.textContent = nameOfWinner
            crossField.textContent = crossCount
            circleField.textContent = circleCount
        }
    }
    buttons[index].disabled = true
};
for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", ()=>{
        ClickButton(classes, i)
        if (final){
            document.querySelector(".final").classList.add("block")
        }
    })
}
function StartAgain(){
    for (let i=0; i<buttons.length; i++){
       buttons[i].disabled = false
       buttons[i].classList.remove("circle")
       buttons[i].classList.remove("cross")
    }
    document.querySelector(".final").classList.remove("block")
    startButton.classList.remove("block")
    gamers = [0,0,0,0,0,0,0,0,0]
    final = false
    switcher = true
}
startButton.addEventListener("click", StartAgain)