//more option for profile account

const Rbtn = document.getElementById("moreProfileOption");
const moreProfileOptionBox = document.getElementById("moreProfileOptionBox");
let RbtnState = false

Rbtn.addEventListener("click",() => {
    if(RbtnState == false){
        Rbtn.style.transform = "rotate("+180+"deg)";
        moreProfileOptionBox.style.height = 140 + "px";
        RbtnState = true;
    }
    else if(RbtnState = true){
        Rbtn.style.transform = "rotate("+0+"deg)";
        moreProfileOptionBox.style.height = 0 + "px";
        RbtnState = false;
    }
})

//like the songs

const liked = document.querySelector("#like");
const unliked = document.querySelector("#unlike");

liked.addEventListener("click",() =>{
    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate("+103+"px,"+-18+"px)";
})
unliked.addEventListener("click",() =>{
    liked.style.display = "block";
    unliked.style.display = "none";
})

//play and pause the song

const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
let songStatus = false;

playBtn.addEventListener("click",() => {
    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";
    songStatus = true;
})
pauseBtn.addEventListener("click",() => {
    playBtn.style.display = "block";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "none";
    songStatus = false;
})

//voloum of song

const highVoloum = document.querySelector("#voloumHigh");
const easyVoloum = document.querySelector("#voloumEasy");
const noneVoloum = document.querySelector("#voloumNone");
const voloumbar = document.querySelector(".voloumBar");
const voloumBarValue = document.querySelector("#voloumBarValue")

//select controler option

const repeatBtn = document.querySelector("#repeat");
const orderPlayBtn = document.querySelector("#orderPlay");
let repeatBtnState = false;
let orderPlayBtnState = false;

repeatBtn.addEventListener("click",() =>{
    if(repeatBtnState == false){
        repeatBtn.style.fill = "red";
        orderPlayBtn.style.fill = "rgb(150, 0, 0)";
        repeatBtnState = true;
    }
    else{
        repeatBtn.style.fill = "rgb(150, 0, 0)";
        repeatBtnState = false;    
    }
})
orderPlayBtn.addEventListener("click",() =>{
    if(orderPlayBtnState == false){
        orderPlayBtn.style.fill = "red";
        repeatBtn.style.fill = "rgb(150, 0, 0)";
        orderPlayBtnState = true;
    }
    else{
        orderPlayBtn.style.fill = "rgb(150, 0, 0)";
        orderPlayBtnState = false;    
    }
})

// control the progress bar value

const progressBarValue = document.querySelector("#progressBarValue");
const progressBarValueHelper = document.querySelector("#rangeHelper");
const voloumValue = document.querySelector("#voloumBarValue");
const voloumRangeHelper = document.querySelector("#voloumRangeHelper");

function rangeChainger(){
    progressBarValueHelper.style.width = progressBarValue.value * 11 / 2 - 2 + "px";
}
function voloumRangeChainger(){
    voloumRangeHelper.style.width = voloumValue.value - 3 + "px";
}