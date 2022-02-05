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
    liked.style.transform = "translate("+-10+"px,"+10+"px)";
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

noneVoloum.addEventListener("click",() => {
    noneVoloum.style.display = "none";
    highVoloum.style.display = "block";
    voloumBarValue.value = 100;
})
highVoloum.addEventListener("click",() => {
    noneVoloum.style.display = "block";
    highVoloum.style.display = "none";
    voloumBarValue.value = 0;
})
voloumBarValue.addEventListener("click",() => {
    if(voloumBarValue.value < 30){
        noneVoloum.style.display = "block"
        easyVoloum.style.display = "none";
        highVoloum.style.display = "none";
    }
    else if(voloumBarValue.value < 70){
        noneVoloum.style.display = "none"
        easyVoloum.style.display = "block";
        highVoloum.style.display = "none";
    }
    else if(voloumBarValue.value < 100){
        noneVoloum.style.display = "none"
        easyVoloum.style.display = "none";
        highVoloum.style.display = "block";    
    }
})

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

// select the sidebar items

const itemHome = document.querySelector("#homeItem");
const itemHomeSvg = document.querySelector("#homeItemSvg");
const itemLibrary = document.querySelector("#libraryItem");
const itemLibrarySvg = document.querySelector("#libraryItemSvg");
const itemSearch = document.querySelector("#searchItem");
const itemSearchSvg = document.querySelector("#searchItemSvg");
const itemProfile = document.querySelector("#profileItem");
const itemProfileSvg = document.querySelector("#profileItemSvg");
const itemPlaylist = document.querySelector("#playlistItem");
const itemPlaylistSvg = document.querySelector("#playlistItemSvg");
const itemLikes = document.querySelector("#likesItem");
const itemLikesSvg = document.querySelector("#likesItemSvg");
const itemArtists = document.querySelector("#artistsItem");
const itemArtistsSvg = document.querySelector("#artistsItemSvg");

itemHome.addEventListener("click",() => {
    itemHome.style.color = "rgba(255, 0, 0, 0.849)";
    itemHomeSvg.style.fill = "red";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemLibrary.addEventListener("click",() => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgba(255, 0, 0, 0.849)"
    itemLibrarySvg.style.fill = "red";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemSearch.addEventListener("click",() => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgba(255, 0, 0, 0.849)";
    itemSearchSvg.style.fill = "red"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemProfile.addEventListener("click",() => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    itemProfile.style.color = "rgba(255, 0, 0, 0.849)";
    itemProfileSvg.style.fill = "red";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemPlaylist.addEventListener("click",() => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgba(255, 0, 0, 0.849)";
    itemPlaylistSvg.style.fill = "red";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemLikes.addEventListener("click",() => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgba(255, 0, 0, 0.849)";
    itemLikesSvg.style.fill = "red";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemArtists.addEventListener("click",() => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgba(255, 0, 0, 0.849)";
    itemArtistsSvg.style.fill = "red";
})