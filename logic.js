//more option for profile account

const Rbtn = document.getElementById("moreProfileOption");
const moreProfileOptionBox = document.getElementById("moreProfileOptionBox");
let RbtnState = false

Rbtn.addEventListener("click",() => {
    if(RbtnState == false){
        Rbtn.style.transform = "rotate("+180+"deg)";
        moreProfileOptionBox.style.height = 120 + "px";
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
    voloumRangeHelper.style.width = 90 + "px";
})
highVoloum.addEventListener("click",() => {
    noneVoloum.style.display = "block";
    highVoloum.style.display = "none";
    voloumBarValue.value = 0;
    voloumRangeHelper.style.width = 0 + "px";
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

// select the sideBar items

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

//pull and push of home made for you boxes slider 

const mfySong = document.querySelectorAll(".mfyLi");
const pullMfysong = document.querySelectorAll(".pullMfysong");
const pushMfysong = document.querySelectorAll(".pushMfysong");
const rightCursor = document.querySelectorAll(".rightCursor");
const leftCursor = document.querySelectorAll(".leftCursor");
let counter = 1;

rightCursor[0].addEventListener("mouseover",() => {
    pullMfysong[0].style.opacity = 1;
})
rightCursor[0].addEventListener("mouseout",() => {
    pullMfysong[0].style.opacity = 0;
})
pullMfysong[0].addEventListener("mouseover",() => {
    pullMfysong[0].style.opacity = 1;  
})
pullMfysong[0].addEventListener("mouseout",() => {
    pullMfysong[0].style.opacity = 0;  
})
leftCursor[0].addEventListener("mouseover",() => {
    if(counter != 1) pushMfysong[0].style.opacity = 1;
})
leftCursor[0].addEventListener("mouseout",() => {
    pushMfysong[0].style.opacity = 0;
})
pushMfysong[0].addEventListener("mouseover",() => {
    if(counter != 1) pushMfysong[0].style.opacity = 1;  
})
pushMfysong[0].addEventListener("mouseout",() => {
    pushMfysong[0].style.opacity = 0;  
})

pullMfysong[0].addEventListener("click",() => {
    if(counter == mfySong.length){
        return false;
    }
    else{
        mfySong[0].style.marginLeft= mfySong[0].clientWidth * -counter + 10 * -counter + "px";
        counter++;
    }
})
pushMfysong[0].addEventListener("click",() => {
    if(counter == 1){
        return false
    }
    else{
        mfySong[0].style.marginLeft = -mfySong[0].clientWidth * counter + mfySong[0].clientWidth + mfySong[0].clientWidth + 1 * counter + "px";
        counter--;    
    }

})

//pull and push of home Recently Played boxes slider

const rpSong = document.querySelector(".rpLi");
const pullRpsong = document.querySelector(".pullRpsong");
const pushRpsong = document.querySelector(".pushRpsong");
const rightCursor2 = document.querySelector(".rightCursor2");
const leftCursor2 = document.querySelector(".leftCursor2");
let counter2 = 1;

rightCursor2.addEventListener("mouseover",() => {
    pullRpsong.style.opacity = 1;
})
rightCursor2.addEventListener("mouseout",() => {
    pullRpsong.style.opacity = 0;
})
pullRpsong.addEventListener("mouseover",() => {
    pullRpsong.style.opacity = 1;  
})
pullRpsong.addEventListener("mouseout",() => {
    pullRpsong.style.opacity = 0;  
})
leftCursor2.addEventListener("mouseover",() => {
    if(counter2 != 1) pushRpsong.style.opacity = 1;
})
leftCursor2.addEventListener("mouseout",() => {
    pushRpsong.style.opacity = 0;
})
pushRpsong.addEventListener("mouseover",() => {
    if(counter2 != 1) pushRpsong.style.opacity = 1;  
})
pushRpsong.addEventListener("mouseout",() => {
    pushRpsong.style.opacity = 0;  
})

pullRpsong.addEventListener("click",() => {
    if(counter2 == rpSong.length){
        return false;
    }
    else{
        rpSong.style.marginLeft = rpSong.clientWidth * -counter2 + 10 * -counter2 + "px";
        counter2++;
    }
})
pushRpsong.addEventListener("click",() => {
    if(counter2 == 1){
        return false
    }
    else{
        rpSong.style.marginLeft = -rpSong.clientWidth * counter2 + rpSong.clientWidth + rpSong.clientWidth + 1 * counter2 + "px";
        counter2--;    
    }

})

//pull and push of home favorite artists boxes slider

const yfaSong = document.querySelector(".yfaLi");
const pullyfasong = document.querySelector(".pullyfasong");
const pushyfasong = document.querySelector(".pushyfasong");
const rightCursor3 = document.querySelector(".rightCursor3");
const leftCursor3 = document.querySelector(".leftCursor3");
let counter3 = 1;

rightCursor3.addEventListener("mouseover",() => {
    pullyfasong.style.opacity = 1;
})
rightCursor3.addEventListener("mouseout",() => {
    pullyfasong.style.opacity = 0;
})
pullyfasong.addEventListener("mouseover",() => {
    pullyfasong.style.opacity = 1;  
})
pullyfasong.addEventListener("mouseout",() => {
    pullyfasong.style.opacity = 0;  
})
leftCursor3.addEventListener("mouseover",() => {
    if(counter3 != 1) pushyfasong.style.opacity = 1;
})
leftCursor3.addEventListener("mouseout",() => {
    pushyfasong.style.opacity = 0;
})
pushyfasong.addEventListener("mouseover",() => {
    if(counter3 != 1) pushyfasong.style.opacity = 1;  
})
pushyfasong.addEventListener("mouseout",() => {
    pushyfasong.style.opacity = 0;  
})

pullyfasong.addEventListener("click",() => {
    if(counter3 == yfaSong.length){
        return false;
    }
    else{
        yfaSong.style.marginLeft = yfaSong.clientWidth * -counter3 + 10 * -counter3 + "px";
        counter3++;
    }
})
pushyfasong.addEventListener("click",() => {
    if(counter3 == 1){
        return false
    }
    else{
        yfaSong.style.marginLeft = -yfaSong.clientWidth * counter3 + yfaSong.clientWidth + yfaSong.clientWidth + 1 * counter3 + "px";
        counter3--;    
    }

})

//pull and push of home palylist boxes slider

const ypLi = document.querySelector(".ypLi");
const pullPlsong = document.querySelector(".pullPlsong");
const pushPlsong = document.querySelector(".pushPlsong");
const rightCursor4 = document.querySelector(".rightCursor4");
const leftCursor4 = document.querySelector(".leftCursor4");
let counter4 = 1;

rightCursor4.addEventListener("mouseover",() => {
    pullPlsong.style.opacity = 1;
})
rightCursor4.addEventListener("mouseout",() => {
    pullPlsong.style.opacity = 0;
})
pullPlsong.addEventListener("mouseover",() => {
    pullPlsong.style.opacity = 1;  
})
pullPlsong.addEventListener("mouseout",() => {
    pullPlsong.style.opacity = 0;  
})
leftCursor4.addEventListener("mouseover",() => {
    if(counter4 != 1) pushPlsong.style.opacity = 1;
})
leftCursor4.addEventListener("mouseout",() => {
    pushPlsong.style.opacity = 0;
})
pushPlsong.addEventListener("mouseover",() => {
    if(counter4 != 1) pushPlsong.style.opacity = 1;  
})
pushPlsong.addEventListener("mouseout",() => {
    pushPlsong.style.opacity = 0;  
})

pullPlsong.addEventListener("click",() => {
    if(counter4 == ypLi.length){
        return false;
    }
    else{
        ypLi.style.marginLeft = ypLi.clientWidth * -counter4 + 10 * -counter4 + "px";
        counter4++;
    }
})
pushPlsong.addEventListener("click",() => {
    if(counter4 == 1){
        return false
    }
    else{
        ypLi.style.marginLeft = -ypLi.clientWidth * counter4 + ypLi.clientWidth + ypLi.clientWidth + 1 * counter4 + "px";
        counter4--;    
    }

})

//home panel

const homeItem = document.querySelector("#homeItem");
homeItem.addEventListener("click",() => {
    homePnl.style.display = "block";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none"    
    accountPnl.style.display = "none";
    accountPnl2.style.display = "none";
    profilePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    canadaStylePnl.style.display = "none";
    calmnessStyle.style.display = "none";
        heavyStyle.style.display = "none";
        russianStyle.style.display = "none";
    classicStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    PopStyle.style.display = "none";

});

// library panel 

const libraryItem = document.querySelector("#libraryItem");
const libraryPnl = document.querySelector("#library");
const homePnl = document.querySelector("#home");
const libraryPnlItem1 = document.querySelector(".libraryPnlItem1");
const libraryPnlItem2 = document.querySelector(".libraryPnlItem2");
const libraryPnlItem3 = document.querySelector(".libraryPnlItem3");
const playlistPnl = document.querySelector(".playlistPnl");
const likesPnl = document.querySelector(".likesPnl");
const artistsPnl = document.querySelector(".artistsPnl")

libraryItem.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "block";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
});

libraryPnlItem1.addEventListener("click",() => {
    libraryPnlItem1.style.color = "#d80000";
    libraryPnlItem2.style.color = "rgb(233, 233, 233)";
    libraryPnlItem3.style.color = "rgb(233, 233, 233)";
    playlistPnl.style.display = "block";
    likesPnl.style.display = "none";
    artistsPnl.style.display = "none";
});
libraryPnlItem2.addEventListener("click",() => {
    libraryPnlItem1.style.color = "rgb(233, 233, 233)";
    libraryPnlItem2.style.color = "#d80000";
    libraryPnlItem3.style.color = "rgb(233, 233, 233)";
    likesPnl.style.display = "block";
    artistsPnl.style.display = "none"
    playlistPnl.style.display = "none";
});
libraryPnlItem3.addEventListener("click",() => {
    libraryPnlItem1.style.color = "rgb(233, 233, 233)";
    libraryPnlItem2.style.color = "rgb(233, 233, 233)";
    libraryPnlItem3.style.color = "#d80000";
    artistsPnl.style.display = "block";
    playlistPnl.style.display = "none";
    likesPnl.style.display = "none";
});
//create a playlist

const plDetailsPnlBtn = document.querySelector(".addPlaylist");
const plDetailsPnl = document.querySelector(".addPlaylistDetails");
const hiderPnl = document.querySelector(".hiderPnl");
const addPlaylistDetailsButton = document.querySelector("#addPlaylistDetailsButton");
const addPlaylistDetailsDescriptionBox = document.querySelector("#addPlaylistDetailsDescriptionBox");
const addPlaylistDetailsNameBox = document.querySelector("#addPlaylistDetailsNameBox");
const addPlaylistDetailsImageBox = document.querySelector("#addPlaylistDetailsImageBox");

plDetailsPnlBtn.addEventListener("click",() => {
    hiderPnl.style.display = "block";
    hiderPnl.style.opacity = 0.5;
    plDetailsPnl.style.display = "block";
    setTimeout(() =>{
        plDetailsPnl.style.transform = " translate("+-50+"%,"+-50+"%)";
        plDetailsPnl.style.opacity = 1;
    },10)
})
hiderPnl.addEventListener("click",() => {
    hiderPnl.style.display = "none";
    hiderPnl.style.opacity = 0;
    plDetailsPnl.style.transform = " translate("+-50+"%,"+-20+"%)";
    plDetailsPnl.style.opacity = 0;
    setTimeout(() =>{
        plDetailsPnl.style.display = "none";

    },100)
})

addPlaylistDetailsButton.addEventListener("click",() => {
    addPlaylistDetailsDescriptionBox.value = "";
    addPlaylistDetailsImageBox.value = "";
    addPlaylistDetailsNameBox.value = "";
    hiderPnl.style.display = "none";
    hiderPnl.style.opacity = 0;
    plDetailsPnl.style.transform = " translate("+-50+"%,"+-20+"%)";
    plDetailsPnl.style.opacity = 0;
    setTimeout(() =>{
        plDetailsPnl.style.display = "none";
    },100)
})

// search panel 

const searchItem = document.querySelector("#searchItem");
const searchPnl = document.querySelector("#search");
const searchBox = document.querySelector("#searchBox");
const searchTxtBox = document.querySelector("#searchTxtBox");
const searchBoxHelper = document.getElementById("searchBoxHelper");
const searchIcon = document.querySelector("#searchIcon");

searchItem.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "block";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
})
searchBox.addEventListener("mouseover",() => {
    searchBox.style.width = 370 + "px";
})
searchBox.addEventListener("click",() => {
    searchTxtBox.style.boxShadow = (0+"px "+5+"px "+5+"px rgba("+255+", "+0+", "+0+","+0.2+"),"+0+"px "+5+"px "+10+"px rgba("+255+", "+0+", "+0+","+0.2);
})
searchBoxHelper.addEventListener("click",() => {
    searchTxtBox.style.boxShadow = "none";
    searchBox.style.width = 60 + "px";
    searchTxtBox.style.color = "transparent";
})
searchBox.addEventListener("mouseout",() => {
    searchTxtBox.style.color = "rgb(185, 23, 23)";
})

//config sideBar linking

itemPlaylist.addEventListener("click",() => {
    libraryPnl.style.display = "block";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    accountPnl.style.display = "none";    
    profilePnl.style.display = "none";
        heavyStyle.style.display = "none";
    rapStyle.style.display = "none";
    accountPnl2.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.tyle.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    PopStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    canadaStyle.style.display = "none";
        russianStyle.style.display = "none";
    classicStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    animeStyle.style.display = "none";
})
itemLikes.addEventListener("click",() => {
    libraryPnl.style.display = "block";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    accountPnl.style.display = "none";
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    rapStyle.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.tyle.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    PopStyle.style.display = "none";
        heavyStyle.style.display = "none";
        calmnessStyle.style.display = "none";
        russianStyle.style.display = "none";
    classicStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    canadaStyle.style.display = "none";
    animeStyle.style.display = "none";
    libraryPnlItem2.focus()
})
itemArtists.addEventListener("click",() => {
    libraryPnl.style.display = "block";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    accountPnl.style.display = "none";
    profilePnl.style.display = "none";
     rapStyle.style.display = "none";
    accountPnl2.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.tyle.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    heavyStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    canadaStyle.style.display = "none";
    PopStyle.style.display = "none";
    classicStyle.style.display = "none";
        russianStyle.style.display = "none";
    animeStyle.style.display = "none";
    libraryPnlItem3.focus()
})

//pull and push of home palylist boxes slider

const rsLi = document.querySelector(".rsLi");
const pullRSsong = document.querySelector(".pullRSsong");
const pushRSsong = document.querySelector(".pushRSsong");
const rightCursor5 = document.querySelector(".rightCursor5");
const leftCursor5 = document.querySelector(".leftCursor5");
let counter5 = 1;

rightCursor5.addEventListener("mouseover",() => {
    pullRSsong.style.opacity = 1;
})
rightCursor5.addEventListener("mouseout",() => {
    pullRSsong.style.opacity = 0;
})
pullRSsong.addEventListener("mouseover",() => {
    pullRSsong.style.opacity = 1;  
})
pullRSsong.addEventListener("mouseout",() => {
    pullRSsong.style.opacity = 0;  
})
leftCursor5.addEventListener("mouseover",() => {
    if(counter5 != 1) pushRSsong.style.opacity = 1;
})
leftCursor5.addEventListener("mouseout",() => {
    pushRSsong.style.opacity = 0;
})
pushRSsong.addEventListener("mouseover",() => {
    if(counter5 != 1) pushRSsong.style.opacity = 1;  
})
pushRSsong.addEventListener("mouseout",() => {
    pushRSsong.style.opacity = 0;  
})

pullRSsong.addEventListener("click",() => {
    if(counter5 == rsLi.length){
        return false;
    }
    else{
        rsLi.style.marginLeft = rsLi.clientWidth * -counter5 + 10 * -counter5 + "px";
        counter5++;
    }
})
pushRSsong.addEventListener("click",() => {
    if(counter5 == 1){
        return false
    }
    else{
        rsLi.style.marginLeft = -rsLi.clientWidth * counter5 + rsLi.clientWidth + rsLi.clientWidth + 1 * counter5 + "px";
        counter5--;    
    }

})

// account linking page

const accountPnl = document.querySelector(".account");
const accountPnl2 = document.querySelector(".account2")

function accountLink(){

    if(atenticationState == false){
        accountPnl.style.display = "block";
        accountPnl2.style.display = "none";
        libraryPnl.style.display = "none";
        searchPnl.style.display = "none";
        homePnl.style.display = "none";    
        profilePnl.style.display = "none";
        gameStyle.style.display = "none";
        rapStyle.style.display = "none";
        chillStyle.style.display = "none";
       focusStyle.style.display = "none";
        studyStyle.style.display = "none";
        PopStyle.style.display = "none";
        calmnessStyle.style.display = "none";
        canadaStyle.style.display = "none";
    classicStyle.style.display = "none";
    rANDbStyle.style.display = "none";
        heavyStyle.style.display = "none";
        russianStyle.style.display = "none";
        animeStyle.style.display = "none";
    }
    else{
        accountPnl2.style.display = "block";
        accountPnl.style.display = "none";
        libraryPnl.style.display = "none";
        searchPnl.style.display = "none";
        homePnl.style.display = "none";     
        profilePnl.style.display = "none";
        gameStyle.style.display = "none";
        rapStyle.style.display = "none";
        chillStyle.style.display = "none";
       focusStyle.style.display = "none";
        studyStyle.style.display = "none";
         PopStyle.style.display = "none";
         calmnessStyle.style.display = "none";
         canadaStyle.style.display = "none";
    rANDbStyle.style.display = "none";
        russianStyle.style.display = "none";
    classicStyle.style.display = "none";
        heavyStyle.style.display = "none";
        animeStyle.style.display = "none";
    }
}

//set sing up

const singUpBtn = document.querySelector("#singUpBtn");
let atenticationState = false;

singUpBtn.addEventListener("click",() => {
    atenticationState = true
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "block";   
    profilePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.tyle.display = "none";
    animeStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    PopStyle.style.display = "none";
    canadaStyle.style.display = "none";
    classicStyle.style.display = "none";
        heavyStyle.style.display = "none";
        russianStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    rapStyle.style.display = "none";
})

//profile setting

const profilePnl = document.querySelector(".profilePnl");

itemProfile.addEventListener("click",() => {
    profilePnl.style.display = "block";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.tyle.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    PopStyle.style.display = "none";
    canadaStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    classicStyle.style.display = "none";
    studyStyle.style.display = "none";
})

// song style linking

const canadaStyle = document.querySelector(".canadaStyle");
const heavyStyle = document.querySelector(".heavyStyle");
const russianStyle = document.querySelector(".russianStyle");
const classicStyle = document.querySelector(".classicStyle")
const calmnessStyle = document.querySelector(".calmnessStyle");
const rANDbStyle = document.querySelector(".rANDbStyle");
const PopStyle = document.querySelector(".PopStyle");
const rapStyle = document.querySelector(".rapStyle");
const animeStyle = document.querySelector(".animeStyle");
const studyStyle = document.querySelector(".studyStyle");
const focusStyle = document.querySelector(".focusStyle");
const chillStyle = document.querySelector(".chillStyle");
const gameStyle = document.querySelector(".gameStyle");
const gameStylePnl = document.querySelector("#gameStylePnl");
const studyStylePnl = document.querySelector("#studyStylePnl");
const canadaStylePnl = document.querySelector("#canadaStylePnl");
const focusStylePnl = document.querySelector("#focusStylePnl");
const heavyStylePnl = document.querySelector("#heavyStylePnl");
const russianStylePnl = document.querySelector("#russianStylePnl");
const classicStylePnl = document.querySelector("#classicStylePnl");
const calmnessStylePnl = document.querySelector("#calmnessStylePnl");
const rANDbStylePnl = document.querySelector("#rANDbStylePnl");
const popStylePnl = document.querySelector("#popStylePnl");
const rapStylePnl = document.querySelector("#rapStylePnl");
const animeStylePnl = document.querySelector("#animeStylePnl");
const chillStylePnl = document.querySelector("#chillStylePnl");


gameStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "block";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
})
chillStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "block";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
})
focusStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "block";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
})
studyStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "block";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
})
animeStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "block";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
})
rapStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    PopStyle.style.display = "none";
    classicStyle.style.display = "none";
    calmnessStyle.style.display = "none";
        heavyStyle.style.display = "none";
    rANDbStyle.style.display = "none";
        russianStyle.style.display = "none";
        canadaStyle.style.display = "none";
    rapStyle.style.display = "block";
})
popStylePnl.addEventListener("click",() =>{
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    rANDbStyle.style.display = "none";
        heavyStyle.style.display = "none";
        russianStyle.style.display = "none";
        canadaStyle.style.display = "none";
    PopStyle.style.display = "block";
})
rANDbStylePnl.addEventListener("click",() =>{
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    canadaStyle.style.display = "none";
        heavyStyle.style.display = "none";
        russianStyle.style.display = "none";
    rANDbStyle.style.display = "block";
})
calmnessStylePnl.addEventListener("click",() =>{
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    classicStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    canadaStyle.style.display = "none";
        heavyStyle.style.display = "none";
        russianStyle.style.display = "none";
    calmnessStyle.style.display = "block";
})
classicStylePnl.addEventListener("click",() =>{
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
        heavyStyle.style.display = "none";
        canadaStyle.style.display = "none";
    russianStyle.style.display = "none";
    classicStyle.style.display = "block";
})
russianStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
    russianStyle.style.display = "block";
})
heavyStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    canadaStyle.style.display = "none";
    heavyStyle.style.display = "block";
})
canadaStylePnl.addEventListener("click",() => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";   
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "block";
})

// control the progress bar value 2

const progressBarValue2 = document.querySelector("#progressBarValue2");
const progressBarValueHelper2 = document.querySelector("#rangeHelper2");
const voloumBarValue2 = document.querySelector("#voloumBarValue2");
const voloumRangeHelper2 = document.querySelector("#voloumRangeHelper2");

function rangeChainger2(){
    progressBarValueHelper2.style.width = progressBarValue2.value * 11 / 3.5 - 1 + "px";
}
function voloumRangeChainger2(){
    voloumRangeHelper2.style.height = voloumBarValue2.value - 30 + "px";
    let i = -voloumBarValue2.value + 40;
    voloumRangeHelper2.style.transform = "translateY("+ i+"px"+")";
}

// audio vollom 

const audioLowBtn = document.querySelector("#audioLowBtn");
const audioMiddleBtn = document.querySelector("#audioMiddleBtn");
const audioUpBtn = document.querySelector("#audioUpBtn");

audioLowBtn.addEventListener("click",() => {
    audioLowBtn.style.display = "none";
    audioUpBtn.style.display = "block";
    voloumBarValue2.value = 100;
    voloumRangeHelper2.style.height = 72 + "px";
    voloumRangeHelper2.style.transform = "translateY("+ -63 +"px"+")";
})
audioUpBtn.addEventListener("click",() => {
    audioLowBtn.style.display = "block";
    audioUpBtn.style.display = "none";
    voloumBarValue2.value = 0;
    voloumRangeHelper2.style.height = 0 + "px";
})
voloumBarValue.addEventListener("click",() => {
    if(voloumBarValue.value < 30){
        audioLowBtn.style.display = "block"
        audioMiddleBtn.style.display = "none";
        audioUpBtn.style.display = "none";
    }
    else if(voloumBarValue.value < 70){
        audioLowBtn.style.display = "none"
        audioMiddleBtn.style.display = "block";
        audioUpBtn.style.display = "none";
    }
    else if(voloumBarValue.value < 100){
        audioLowBtn.style.display = "none"
        audioMiddleBtn.style.display = "none";
        audioUpBtn.style.display = "block";    
    }
})

//close the middel player Box

const closeBtn = document.querySelector("#closeBtn");
const screenHider = document.querySelector("#screenHider");
const songPlayerMiddleBox = document.querySelector(".songPlayerMiddleBox");

closeBtn.addEventListener("click",() => {
    songPlayerMiddleBox.style.opacity = 0;
    songPlayerMiddleBox.style.transform = "translate(-50%,-40%)"
    screenHider.style.opacity = 0;
    setTimeout(() => {
        screenHider.style.display = "none";
        songPlayerMiddleBox.style.display = "none";
    },100)
})

// order play song setting

const songRepeatBtn = document.querySelector("#songRepeatBtn");
const songOrderBtn = document.querySelector("#songOrderBtn");
let songOrderState = false;
let songRepeatState = false;

songRepeatBtn.addEventListener("click",() =>{
    if(songRepeatState == false){
        songRepeatBtn.style.fill = "red";
        songOrderBtn.style.fill = "rgb(150, 0, 0)";
        songRepeatState = true;
    }
    else{
        songRepeatBtn.style.fill = "rgb(150, 0, 0)";
        songRepeatState = false;    
    }
})
songOrderBtn.addEventListener("click",() =>{
    if(songOrderState == false){
        songOrderBtn.style.fill = "red";
        songRepeatBtn.style.fill = "rgb(150, 0, 0)";
        songOrderState = true;
    }
    else{
        songOrderBtn.style.fill = "rgb(150, 0, 0)";
        songOrderState = false;    
    }
})

//like the middle songs

const likeFullBtn = document.querySelector("#likeFullBtn");
const likeEmptyBtn = document.querySelector("#likeEmptyBtn");

likeFullBtn.addEventListener("click",() =>{
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
})
likeEmptyBtn.addEventListener("click",() =>{
    likeFullBtn.style.display = "block";
    likeEmptyBtn.style.display = "none";
})