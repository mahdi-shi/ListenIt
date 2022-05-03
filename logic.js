//more option for profile account

const Rbtn = document.getElementById("moreProfileOption");
const moreProfileOptionBox = document.getElementById("moreProfileOptionBox");
let RbtnState = false;
const navBar = document.querySelector(".navBar");
let likedSongsArray = [];
let likedSongsArrayCounter = 1;

Rbtn.addEventListener("click", () => {
    if (RbtnState == false) {
        Rbtn.style.transform = "rotate(" + 180 + "deg)";
        moreProfileOptionBox.style.height = 120 + "px";
        RbtnState = true;
    }
    else if (RbtnState = true) {
        Rbtn.style.transform = "rotate(" + 0 + "deg)";
        moreProfileOptionBox.style.height = 0 + "px";
        RbtnState = false;
    }
})

//like the songs

const  likedSongControler = document.querySelector("#likedSongControler");
const liked = document.querySelector("#like");
const unliked = document.querySelector("#unlike");
let songStatusLiked = false;
let likedSongIndex;

liked.addEventListener("click", () => {
    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
})
unliked.addEventListener("click", () => {
    liked.style.display = "block";
    unliked.style.display = "none";

    var ALikedSong = document.createElement("div");
    var LikedSongName = document.createElement("H3");
    var LikedSongArtistName = document.createElement("p");
    var LikedSongArtistNameContent = document.createTextNode(songArtistName.innerHTML)
    var LikedSongNameSongContent = document.createTextNode(songName.innerHTML);
    var LikedSongImageBox = document.createElement("div");
    var LikedSongDefulfImage = document.createElement("p");
    var LikedSongDefulfImageContent = document.createTextNode("Lt");
    var playSongLikedImage = document.createElement("img");
    var LikedSongImage = document.createElement("img");

    LikedSongImage.classList.add("likedSongImage");
    LikedSongImage.src = sourceSongImg.innerHTML;
    LikedSongImageBox.appendChild(LikedSongImage);
    playSongLikedImage.classList.add("mfyPlayBox");
    playSongLikedImage.classList.add("playSongLikedImage");
    playSongLikedImage.style.zIndex = 100000;
    playSongLikedImage.src = "images/play-64.png";
    LikedSongImageBox.appendChild(playSongLikedImage);
    playSongLikedImage.dataset.src = sourceSong.innerHTML;
    playSongLikedImage.dataset.img = songImage.src;
    playSongLikedImage.dataset.name = songName.innerHTML;
    playSongLikedImage.dataset.artist = songArtistName.innerHTML;
    playSongLikedImage.dataset.index = likedSongsArrayCounter;
    ALikedSong.classList.add("AsongLiked");
    LikedSongImageBox.classList.add("image");
    LikedSongImageBox.appendChild(LikedSongDefulfImage)
    LikedSongName.appendChild(LikedSongNameSongContent)
    LikedSongName.classList.add("AlikedSongName");
    LikedSongDefulfImage.appendChild(LikedSongDefulfImageContent);
    LikedSongDefulfImage.classList.add("likedSongDefulfImage");
    LikedSongArtistName.appendChild(LikedSongArtistNameContent);
    LikedSongArtistName.classList.add("AplayListSongArtistName");
    LikedSongImageBox.appendChild(LikedSongImage);
    ALikedSong.appendChild(LikedSongName);
    ALikedSong.appendChild(LikedSongImageBox);
    ALikedSong.appendChild(LikedSongArtistName);

    likesPnl.appendChild(ALikedSong);

    likedSongsArray[likedSongsArrayCounter] = { name : songName.innerHTML, artist : songArtistName.innerHTML, img: sourceSongImg.innerHTML, src: sourceSong.innerHTML};
    likedSongsArrayCounter++;

    messageBoxTxt.innerHTML = "the song liked";
    messageBoxTxt.style.opacity = 1;

    setTimeout(() => {
        messageBoxTxt.style.opacity = 0;
    }, 5000)
    setTimeout(() => {
        messageBoxTxt.innerHTML = "";
    }, 5500)

    // play songs in liked song panel

    var playSongLikedButtons = document.querySelectorAll(".playSongLikedImage"); 

    for(let i = 0;i < playSongLikedButtons.length;i++){
        playSongLikedButtons[i].addEventListener("click",() => {

            likedSongIndex = playSongLikedButtons[i].dataset.index

            function loadLikedMusic(){
                likedSongControler.src = likedSongsArray[likedSongIndex].src + ".mp3";
                likedSongControler.play();
    
                //let x = likedSongsArray[playSongLikedButtons[i].dataset.index].src
    
                /*for(let j = 0;j < likedSongsArray.length;j++){
                    if(playSongLikedButtons[i].dataset.index == )
                }*/
    
                songImage.src = playSongLikedButtons[likedSongIndex].dataset.img;
                songName.innerHTML = playSongLikedButtons[likedSongIndex].dataset.name;
                songArtistName.innerHTML = playSongLikedButtons[likedSongIndex].dataset.artist;
    
                liked.style.display = "block";
                unliked.style.display = "none";
    
                songStylesIndexClear();
                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();
                likedSongControler.play()
    
                playBtn.style.display = "none";
                playBtn.style.fill = "red";
                pauseBtn.style.fill = "red";
                pauseBtn.style.display = "block";
    
                songStatusFocus = false;
                songStatusStudy = false;
                songStatusPop = false;
                songStatusChill = false;
                songStatusGame = false;
                songStatusRAndb = false;
                songStatusRap = false;
                songStatusAnime = false;
                songStatusCalmness = false;
                songStatusPlaylist = false;
                songStatusClassic = false;
                songStatusRussian = false;
                songStatusHeavy = false;
                songStatusCanada = false;
                songStatusLiked = true;
            }

            loadLikedMusic()

            playBtn.addEventListener("click", () => {
                likedSongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                likedSongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            likedSongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                likedSongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = likedSongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = likedSongControler.duration;

                    likedSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });
            skipNext.addEventListener("click", () => {
                if (songStatusLiked == true) {
                    nextLikedSong();
                }
            })
            
            skipBack.addEventListener("click", () => {
                if (songStatusLiked == true) {
                    beforeLikedSong();
                }
            })
            
            //click next song button developing
            
            function nextLikedSong() {
                likedSongIndex++;
                likedSongIndex > likedSongsArray.length ? likedSongIndex = 1 : likedSongsArray = likedSongsArray;
            
                loadLikedMusic(likedSongIndex);
            
            }
            
            //click before song button developing
            
            function beforeLikedSong() {
                likedSongIndex--;
                likedSongIndex < 1 ? likedSongIndex = likedSongsArray.length : likedSongIndex = likedSongIndex;
            
                loadLikedMusic(likedSongIndex);
            
            }
            let repeatStateLiked = false;
            let randomStateLiked = false;

            repeatPlayButton.addEventListener("click", () => {              
            if (repeatStateLiked == false) {
                repeatStateLiked = true;
            }
            else {
                repeatStateLiked = false;
            }
                })
                randomPlayButton.addEventListener("click", () => {              
                    if (randomStateLiked == false) {
                        randomStateLiked = true;
                    }
                    else {
                        randomStateLiked = false;
                    }
                })

    likedSongControler.addEventListener("ended", () => {
    if (randomStateLiked == false && repeatStateLiked == false) {
        nextLikedSong();
    }
    else if (randomStateLiked == false && repeatStateLiked == true) {
        likedSongControler.currentTime = 0;
        loadLikedMusic(likedSongIndex);
        likedSongControler.play();
    }
    else if (randomStateLiked == true && repeatStateLiked == false) {
        let randomIndexLiked = Math.floor((Math.random() * focusStyleSongs.length) + 1);

        do {
            randomIndexLiked = Math.floor((Math.random() * focusStyleSongs.length) + 1);
        }
        while (likedSongIndex == randomIndexLiked)

        likedSongIndex = randomIndexLiked;
        loadLikedMusic(likedSongIndex);
        likedSongControler.play();
    }
    })
   })
    }
    })

//play and pause the song

const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
let songStatus = false;

playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";
    songStatus = true;

    playSongBtn.style.display = "none";
    pauseSongBtn.style.display = "block";
})
pauseBtn.addEventListener("click", () => {
    playBtn.style.display = "block";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "none";
    songStatus = false;

    playSongBtn.style.display = "block";
    pauseSongBtn.style.display = "none";
})

let playSongBtn = document.querySelector("#playSongBtn");
let pauseSongBtn = document.querySelector("#pauseSongBtn");

playSongBtn.addEventListener("click",() => {
    playSongBtn.style.display = "none";
    pauseSongBtn.style.display = "block";

    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";
    songStatus = true;
})

pauseSongBtn.addEventListener("click",() => {
    playSongBtn.style.display = "block";
    pauseSongBtn.style.display = "none";

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

noneVoloum.addEventListener("click", () => {
    noneVoloum.style.display = "none";
    highVoloum.style.display = "block";
    voloumBarValue.value = 100;
    voloumRangeHelper.style.width = 90 + "px";
})
highVoloum.addEventListener("click", () => {
    noneVoloum.style.display = "block";
    highVoloum.style.display = "none";
    voloumBarValue.value = 0;
    voloumRangeHelper.style.width = 0 + "px";
})
voloumBarValue.addEventListener("click", () => {
    if (voloumBarValue.value < 30) {
        noneVoloum.style.display = "block"
        easyVoloum.style.display = "none";
        highVoloum.style.display = "none";
    }
    else if (voloumBarValue.value < 70) {
        noneVoloum.style.display = "none"
        easyVoloum.style.display = "block";
        highVoloum.style.display = "none";
    }
    else if (voloumBarValue.value < 100) {
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

repeatBtn.addEventListener("click", () => {
    if (repeatBtnState == false) {
        repeatBtn.style.fill = "red";
        orderPlayBtn.style.fill = "rgb(150, 0, 0)";
        repeatBtnState = true;
    }
    else {
        repeatBtn.style.fill = "rgb(150, 0, 0)";
        repeatBtnState = false;
    }
})
orderPlayBtn.addEventListener("click", () => {
    if (orderPlayBtnState == false) {
        orderPlayBtn.style.fill = "red";
        repeatBtn.style.fill = "rgb(150, 0, 0)";
        orderPlayBtnState = true;
    }
    else {
        orderPlayBtn.style.fill = "rgb(150, 0, 0)";
        orderPlayBtnState = false;
    }
})

// control the progress bar value

const progressBarValue = document.querySelector("#progressBarValue");
const progressBarValueHelper = document.querySelector("#rangeHelper");
const voloumValue = document.querySelector("#voloumBarValue");
const voloumRangeHelper = document.querySelector("#voloumRangeHelper");

function rangeChainger() {
    progressBarValueHelper.style.width = progressBarValue.value * 11 / 2 - 2 + "px";
}
function voloumRangeChainger() {
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

itemHome.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";

    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    moreProfileOptionBox.style.height = 0 + "px";
})
itemLibrary.addEventListener("click", () => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgba(255, 0, 0, 0.849)"
    itemLibrarySvg.style.fill = "red";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    moreProfileOptionBox.style.height = 0 + "px";

    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    moreProfileOptionBox.style.height = 0 + "px";
})
itemSearch.addEventListener("click", () => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgba(255, 0, 0, 0.849)";
    itemSearchSvg.style.fill = "red"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    moreProfileOptionBox.style.height = 0 + "px";

    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemProfile.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";

    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemPlaylist.addEventListener("click", () => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    moreProfileOptionBox.style.height = 0 + "px";

    itemPlaylist.style.color = "rgba(255, 0, 0, 0.849)";
    itemPlaylistSvg.style.fill = "red";
    itemLikes.style.color = "rgb(192, 192, 192)";
    itemLikesSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";

})
itemLikes.addEventListener("click", () => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemSearch.style.color = "rgb(192, 192, 192)";
    itemSearchSvg.style.fill = "rgba(255, 0, 0, 0.651)"
    moreProfileOptionBox.style.height = 0 + "px";

    itemProfile.style.color = "rgb(192, 192, 192)";
    itemProfileSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemPlaylist.style.color = "rgb(192, 192, 192)";
    itemPlaylistSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLikes.style.color = "rgba(255, 0, 0, 0.849)";
    itemLikesSvg.style.fill = "red";
    itemArtists.style.color = "rgb(192, 192, 192)";
    itemArtistsSvg.style.fill = "rgba(255, 0, 0, 0.651)";
})
itemArtists.addEventListener("click", () => {
    itemHome.style.color = "rgb(192, 192, 192)";
    itemHomeSvg.style.fill = "rgba(255, 0, 0, 0.651)";
    itemLibrary.style.color = "rgb(192, 192, 192)"
    itemLibrarySvg.style.fill = "rgba(255, 0, 0, 0.651)";
    moreProfileOptionBox.style.height = 0 + "px";

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

rightCursor[0].addEventListener("mouseover", () => {
    pullMfysong[0].style.opacity = 1;
})
rightCursor[0].addEventListener("mouseout", () => {
    pullMfysong[0].style.opacity = 0;
})
pullMfysong[0].addEventListener("mouseover", () => {
    pullMfysong[0].style.opacity = 1;
})
pullMfysong[0].addEventListener("mouseout", () => {
    pullMfysong[0].style.opacity = 0;
})
leftCursor[0].addEventListener("mouseover", () => {
    if (counter != 1) pushMfysong[0].style.opacity = 1;
})
leftCursor[0].addEventListener("mouseout", () => {
    pushMfysong[0].style.opacity = 0;
})
pushMfysong[0].addEventListener("mouseover", () => {
    if (counter != 1) pushMfysong[0].style.opacity = 1;
})
pushMfysong[0].addEventListener("mouseout", () => {
    pushMfysong[0].style.opacity = 0;
})

pullMfysong[0].addEventListener("click", () => {
    if (counter == mfySong.length) {
        return false;
    }
    else {
        mfySong[0].style.marginLeft = mfySong[0].clientWidth * -counter + 10 * -counter + "px";
        counter++;
    }
})
pushMfysong[0].addEventListener("click", () => {
    if (counter == 1) {
        return false
    }
    else {
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

rightCursor2.addEventListener("mouseover", () => {
    pullRpsong.style.opacity = 1;
})
rightCursor2.addEventListener("mouseout", () => {
    pullRpsong.style.opacity = 0;
})
pullRpsong.addEventListener("mouseover", () => {
    pullRpsong.style.opacity = 1;
})
pullRpsong.addEventListener("mouseout", () => {
    pullRpsong.style.opacity = 0;
})
leftCursor2.addEventListener("mouseover", () => {
    if (counter2 != 1) pushRpsong.style.opacity = 1;
})
leftCursor2.addEventListener("mouseout", () => {
    pushRpsong.style.opacity = 0;
})
pushRpsong.addEventListener("mouseover", () => {
    if (counter2 != 1) pushRpsong.style.opacity = 1;
})
pushRpsong.addEventListener("mouseout", () => {
    pushRpsong.style.opacity = 0;
})

pullRpsong.addEventListener("click", () => {
    if (counter2 == rpSong.length) {
        return false;
    }
    else {
        rpSong.style.marginLeft = rpSong.clientWidth * -counter2 + 10 * -counter2 + "px";
        counter2++;
    }
})
pushRpsong.addEventListener("click", () => {
    if (counter2 == 1) {
        return false
    }
    else {
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

rightCursor3.addEventListener("mouseover", () => {
    pullyfasong.style.opacity = 1;
})
rightCursor3.addEventListener("mouseout", () => {
    pullyfasong.style.opacity = 0;
})
pullyfasong.addEventListener("mouseover", () => {
    pullyfasong.style.opacity = 1;
})
pullyfasong.addEventListener("mouseout", () => {
    pullyfasong.style.opacity = 0;
})
leftCursor3.addEventListener("mouseover", () => {
    if (counter3 != 1) pushyfasong.style.opacity = 1;
})
leftCursor3.addEventListener("mouseout", () => {
    pushyfasong.style.opacity = 0;
})
pushyfasong.addEventListener("mouseover", () => {
    if (counter3 != 1) pushyfasong.style.opacity = 1;
})
pushyfasong.addEventListener("mouseout", () => {
    pushyfasong.style.opacity = 0;
})

pullyfasong.addEventListener("click", () => {
    if (counter3 == yfaSong.length) {
        return false;
    }
    else {
        yfaSong.style.marginLeft = yfaSong.clientWidth * -counter3 + 10 * -counter3 + "px";
        counter3++;
    }
})
pushyfasong.addEventListener("click", () => {
    if (counter3 == 1) {
        return false
    }
    else {
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

rightCursor4.addEventListener("mouseover", () => {
    pullPlsong.style.opacity = 1;
})
rightCursor4.addEventListener("mouseout", () => {
    pullPlsong.style.opacity = 0;
})
pullPlsong.addEventListener("mouseover", () => {
    pullPlsong.style.opacity = 1;
})
pullPlsong.addEventListener("mouseout", () => {
    pullPlsong.style.opacity = 0;
})
leftCursor4.addEventListener("mouseover", () => {
    if (counter4 != 1) pushPlsong.style.opacity = 1;
})
leftCursor4.addEventListener("mouseout", () => {
    pushPlsong.style.opacity = 0;
})
pushPlsong.addEventListener("mouseover", () => {
    if (counter4 != 1) pushPlsong.style.opacity = 1;
})
pushPlsong.addEventListener("mouseout", () => {
    pushPlsong.style.opacity = 0;
})

pullPlsong.addEventListener("click", () => {
    if (counter4 == ypLi.length) {
        return false;
    }
    else {
        ypLi.style.marginLeft = ypLi.clientWidth * -counter4 + 10 * -counter4 + "px";
        counter4++;
    }
})
pushPlsong.addEventListener("click", () => {
    if (counter4 == 1) {
        return false
    }
    else {
        ypLi.style.marginLeft = -ypLi.clientWidth * counter4 + ypLi.clientWidth + ypLi.clientWidth + 1 * counter4 + "px";
        counter4--;
    }

})

//home panel

const homeItem = document.querySelector("#homeItem");
homeItem.addEventListener("click", () => {
    homePnl.style.display = "block";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none"
    accountPnl.style.display = "none";
    accountPnl2.style.display = "none";
    profilePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";

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

libraryItem.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";

    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
});

libraryPnlItem1.addEventListener("click", () => {
    libraryPnlItem1.style.color = "#d80000";
    libraryPnlItem2.style.color = "rgb(233, 233, 233)";
    moreProfileOptionBox.style.height = 0 + "px";

    libraryPnlItem3.style.color = "rgb(233, 233, 233)";
    playlistPnl.style.display = "block";
    likesPnl.style.display = "none";
    artistsPnl.style.display = "none";
});
libraryPnlItem2.addEventListener("click", () => {
    libraryPnlItem1.style.color = "rgb(233, 233, 233)";
    libraryPnlItem2.style.color = "#d80000";
    libraryPnlItem3.style.color = "rgb(233, 233, 233)";
    moreProfileOptionBox.style.height = 0 + "px";

    likesPnl.style.display = "block";
    artistsPnl.style.display = "none"
    playlistPnl.style.display = "none";
});
libraryPnlItem3.addEventListener("click", () => {
    libraryPnlItem1.style.color = "rgb(233, 233, 233)";
    libraryPnlItem2.style.color = "rgb(233, 233, 233)";
    moreProfileOptionBox.style.height = 0 + "px";

    libraryPnlItem3.style.color = "#d80000";
    artistsPnl.style.display = "block";
    playlistPnl.style.display = "none";
    likesPnl.style.display = "none";
});
//create a playlist

let playlistLiListGoz;

var playListPnl = document.querySelector(".playListPnl");
var plDetailsPnlBtn = document.querySelector(".addPlaylist");
var plDetailsPnl = document.querySelector(".addPlaylistDetails");
var hiderPnl = document.querySelector(".hiderPnl");
var addPlaylistDetailsButton = document.querySelector("#addPlaylistDetailsButton");
var addPlaylistDetailsDescriptionBox = document.querySelector("#addPlaylistDetailsDescriptionBox");
var addPlaylistDetailsNameBox = document.querySelector("#addPlaylistDetailsNameBox");
var addPlaylistDetailsImageBox = document.querySelector("#addPlaylistDetailsImageBox");
let hh = document.querySelector("#addPlaylistDetailsNameBox").value;

plDetailsPnlBtn.addEventListener("click", () => {
    hiderPnl.style.display = "block";
    hiderPnl.style.opacity = 0.5;
    plDetailsPnl.style.display = "block";
    setTimeout(() => {
        plDetailsPnl.style.transform = " translate(" + -50 + "%," + -50 + "%)";
        plDetailsPnl.style.opacity = 1;
    }, 10)
})
hiderPnl.addEventListener("click", () => {
    hiderPnl.style.display = "none";
    hiderPnl.style.opacity = 0;
    plDetailsPnl.style.transform = " translate(" + -50 + "%," + -20 + "%)";
    plDetailsPnl.style.opacity = 0;
    setTimeout(() => {
        plDetailsPnl.style.display = "none";

    }, 100)
})
let playlistBoxGoz;
let addPlaylistDetailsErrorText = document.querySelector(".addPlaylistDetailsErrorText");
let playlistTop = 0;
const playlistsSongControler = document.querySelector("#playlistsSongControler");
let playlistsArray = [];
let playlistsArrayCount = 0;
let playlistSongArrayCount = 0;
let playlistSongCounter = 0;
let playlistSongsCounter = 1;


addPlaylistDetailsButton.addEventListener("click", () => {
    if (addPlaylistDetailsNameBox.value == "") {
        addPlaylistDetailsErrorText.style.opacity = 1;
        addPlaylistDetailsErrorText.style.transform = "tarnslate(0,0)";
    }
    else {
        addPlaylistDetailsErrorText.style.opacity = 0;
        addPlaylistDetailsDescriptionBox.value = "";
        hiderPnl.style.display = "none";
        hiderPnl.style.opacity = 0;
        plDetailsPnl.style.transform = " translate(" + -50 + "%," + -20 + "%)";
        plDetailsPnl.style.opacity = 0;
        setTimeout(() => {
            plDetailsPnl.style.display = "none";
        }, 100)

        try {

            var Aplaylist = document.createElement("div");
            var playlistName = document.createElement("H3");
            var playlistNameContent = document.createTextNode(addPlaylistDetailsNameBox.value);
            var playlistImageBox = document.createElement("div");
            var playlistDefulfImage = document.createElement("p");
            var playlistDefulfImageContent = document.createTextNode("Lt");
            var playSongImage = document.createElement("img");
            var playlistImage = document.createElement("img");
            var playlistImagePath = addPlaylistDetailsImageBox.value;

            var input = addPlaylistDetailsImageBox;
            var fReader = new FileReader();
            fReader.readAsDataURL(input.files[0]);
            fReader.onloadend = function (event) {
                var img = playlistImage
                img.src = event.target.result;
            }


            playlistImage.classList.add("playlistImage");
            playlistImage.src = playlistImagePath;
            playlistImageBox.appendChild(playlistImage);
            playSongImage.classList.add("mfyPlayBox");
            playSongImage.classList.add("playSongsPlaylistButton")
            playSongImage.src = "images/play-64.png";
            playSongImage.dataset.playlistname = addPlaylistDetailsNameBox.value;
            playlistImageBox.appendChild(playSongImage);
            Aplaylist.classList.add("AplayList");
            playlistImageBox.classList.add("image");
            playlistImageBox.appendChild(playlistDefulfImage)
            playlistName.appendChild(playlistNameContent)
            playlistName.classList.add("mfySongName");
            playlistDefulfImage.appendChild(playlistDefulfImageContent);
            Aplaylist.appendChild(playlistName);
            Aplaylist.appendChild(playlistImageBox);
            playListPnl.appendChild(Aplaylist);
            Aplaylist.dataset.songName = playlistName.innerHTML;

            playlistTop += 40;

            playlistsArray[playlistsArrayCount] = [Aplaylist.dataset.songName];
            playlistsArrayCount++;

            var playlistList = document.querySelector("#playlistList");
            var playlistUlList = document.querySelector(".playlistUlList");
            var playlistLiBox = document.createElement("li");
            var playlistLiBoxText = document.createTextNode(document.querySelector("#addPlaylistDetailsNameBox").value);

            playlistLiListGoz = document.querySelectorAll(".playlistLiList");

            playlistLiBox.classList.add("playlistLiList");
            playlistLiBox.appendChild(playlistLiBoxText);
            playlistUlList.appendChild(playlistLiBox);

            playlistList.style.transform = "translateY(" + -playlistTop + "px)";

            let playSongImageGoz = document.querySelectorAll(".playSongsPlaylistButton");
            let songStatusPlaylist = false;
            for (let t = 0; t < playSongImageGoz.length; t++){
                playSongImageGoz[t].addEventListener("click", () => {
                    for(let j = 0;j < playlistsArray.length;j++){
                        if(playSongImageGoz[t].dataset.playlistname == playlistsArray[j][j].playlistname){

                            unliked.style.display = "block";
                            liked.style.display = "none";
                            liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
                        
                            songStylesIndexClear();
                            loadPlaylistMusic(playlistSongsCounter);
                            
                            //load playlist songs
                            
                            function loadPlaylistMusic(indexNumber) {
                                songName.innerHTML = playlistsArray[j][indexNumber - 1].name;
                                songArtistName.innerHTML = playlistsArray[j][indexNumber - 1].artist;
                                songImage.src = playlistsArray[j][indexNumber - 1].img;
                                playlistsSongControler.src = playlistsArray[j][indexNumber - 1].src + ".mp3";
                                MiddleSongName.innerHTML = playlistsArray[j][indexNumber - 1].name;
                                middlePlayerimageBoxImg.src = playlistsArray[j][indexNumber - 1].img;;
                                middlePlayerimageBoxImg.style.display = "block";
                                songImage.style.display = "block";
                            
                                songStylesIndexClear();
                                focusSongControler.pause();
                                popSongControler.pause();
                                chillSongControler.pause();
                                studySongControler.pause();
                                gameSongControler.pause();
                                rAndbSongControler.pause();
                                rapSongControler.pause();
                                animeSongControler.pause()
                                calmnessSongControler.pause();
                                classicSongControler.pause();
                                recentlySongControler.pause();
                                russianSongControler.pause();
                                heavySongControler.pause();
                                canadaSongControler.pause();
                                playlistsSongControler.play();
                                likedSongControler.pause();
                            
                                playBtn.style.display = "none";
                                playBtn.style.fill = "red";
                                pauseBtn.style.fill = "red";
                                pauseBtn.style.display = "block";
                            
                                songStatusFocus = false;
                                songStatusStudy = false;
                                songStatusPop = false;
                                songStatusChill = false;
                                songStatusGame = false;
                                songStatusRAndb = false;
                                songStatusRap = false;
                                songStatusAnime = false;
                                songStatusCalmness = false;
                                songStatusClassic = false;
                                songStatusRussian = false;
                                songStatusHeavy = false;
                                songStatusCanada = false;
                                songStatusPlaylist = true;
                            }
                            
                            playBtn.addEventListener("click", () => {
                                playlistsSongControler.play();
                            })
                            pauseBtn.addEventListener("click", () => {
                                playlistsSongControler.pause();
                            })
                            
                            skipNext.addEventListener("click", () => {
                                if(songStatusPlaylist == true) {
                                    nextPlaylistSong();
                                }
                            })
                            
                            skipBack.addEventListener("click", () => {
                                if(songStatusPlaylist == true) {
                                    beforePlaylistSong();
                                }
                            })
                            
                            //click next song button developing
                            
                            function nextPlaylistSong() {
                                playlistSongsCounter += 1;
                                playlistSongsCounter > playlistsArray[j].length ? playlistSongsCounter = 1 : playlistsArray[j] = playlistsArray[j];
                            
                                loadPlaylistMusic(playlistSongsCounter);
                                alert(playlistSongsCounter);
                            }
                            
                            //click before song button developing
                            
                            function beforePlaylistSong() {
                                playlistSongsCounter -= 1;
                                playlistSongsCounter < 1 ? playlistSongsCounter = playlistsArray[j].length : playlistSongsCounter = playlistSongsCounter;
                            
                                loadPlaylistMusic(playlistSongsCounter);
                            
                            }
                            
                            //updata progressBar with songTime
                            
                            playlistsSongControler.addEventListener("timeupdate", (e) => {
                                const currentTime = e.target.currentTime;
                                const duration = e.target.duration;
                            
                                let progressWith = (currentTime / duration) * 100;
                                progressBar.style.width = progressWith + "%";
                            
                                let songCurrentTime = document.querySelector("#songTimeLeft"),
                                    songDurationTime = document.querySelector("#songTimeRemaining")
                            
                                    playlistsSongControler.addEventListener("loadeddata", () => {
                            
                                    //update song total duration
                            
                                    let songDuration = playlistsSongControler.duration;
                                    let totalMin = Math.floor(songDuration / 60);
                                    let totalSec = Math.floor(songDuration % 60);
                                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                                    if (totalSec < 10) {
                                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                                    }
                            
                                });
                            
                                //update song total current time 
                            
                                let currentMin = Math.floor(currentTime / 60);
                                let currentSec = Math.floor(currentTime % 60);
                                if (currentSec < 10) {
                                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                                }
                                else {
                                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                                }
                            
                                //update playing song current time with progress bar 
                            
                                progressArea.addEventListener("click", (e) => {
                                    let progressWithVal = progressArea.clientWidth;
                                    let clickedOffsetX = e.offsetX;
                                    let songDuration = playlistsSongControler.duration;
                            
                                    playlistsSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                                })
                            });
                            
                            //developed the repeatand random play button 
                            
                            let repeatStateZero = false;
                            let randomStateZero = false;
                            
                            repeatPlayButton.addEventListener("click", () => {
                                if (repeatStateZero == false) {
                                    repeatStateZero = true;
                                }
                                else {
                                    repeatStateZero = false;
                                }
                            })
                            randomPlayButton.addEventListener("click", () => {
                                if (randomStateZero == false) {
                                    randomStateZero = true;
                                }
                                else {
                                    randomStateZero = false;
                                }
                            })
                            
                            playlistsSongControler.addEventListener("ended", () => {
                                if (randomStateZero == false && repeatStateZero == false) {
                                    nextPlaylistSong(playlistSongsCounter);
                                }
                                else if (randomStateZero == false && repeatStateZero == true) {
                                    playlistsSongControler.currentTime = 0;
                                    loadPlaylistMusic(playlistSongsCounter);
                                    playlistsSongControler.play();
                                }
                                else if (randomStateZero == true && repeatStateZero == false) {
                                    let randomIndexZero = Math.floor((Math.random() * playlistsArray[j].length) + 1);
                            
                                    do {
                                        randomIndexZero = Math.floor((Math.random() * playlistsArray[j].length) + 1);
                                    }
                                    while (playlistSongsCounter == randomIndexZero)
                            
                                    playlistSongsCounter = randomIndexZero;
                                    loadPlaylistMusic(playlistSongsCounter);
                                    playlistsSongControler.play();
                                }
                            })

                       }
                    }
                })
            }

            var playlistPnlName = document.createElement("H3");
            var playlistPnlNameContent = document.createTextNode(addPlaylistDetailsNameBox.value);
            playlistPnlName.appendChild(playlistPnlNameContent);
            var AplaylistPnl = document.createElement("div");
            AplaylistPnl.classList.add("AplaylistPnl");
            let closeButton = document.createElement("img")
            closeButton.src = "images/close.png";
            AplaylistPnl.appendChild(closeButton);
            closeButton.classList.add("closeButtonStyle")
            var AplaylistImageBG = document.createElement("img");
            AplaylistImageBG.classList.add("AplaylistImageBG");
            AplaylistPnl.appendChild(AplaylistImageBG);
            playlistPnlName.classList.add("AplaylistPnlName");
            AplaylistPnl.appendChild(playlistPnlName);
            var playlistPnlImagePath = addPlaylistDetailsImageBox.value;
            AplaylistImageBG.src = playlistPnlImagePath;
            var AplaylistPnlImageHelper = document.createElement("div");
            AplaylistPnlImageHelper.classList.add("AplaylistPnlImageHelper");
            AplaylistPnl.appendChild(AplaylistPnlImageHelper);
            AplaylistPnl.dataset.PnlSongName = playlistName.innerHTML;
            playListPnl.appendChild(AplaylistPnl);

            AplaylistPnl.style.display = "none";

            var input2 = addPlaylistDetailsImageBox;
            var fReader2 = new FileReader();
            fReader2.readAsDataURL(input2.files[0]);
            fReader2.onloadend = function (event) {
                var img2 = AplaylistImageBG;
                img2.src = event.target.result;
            }

            let AplaylistPnls = document.querySelectorAll(".AplaylistPnl");

            Aplaylist.addEventListener("click", () => {
                AplaylistPnl.style.display = "block";
                hiderPnl.style.display = "block";
            })

            closeButton.addEventListener("click", () => {
                AplaylistPnl.style.display = "none";
                hiderPnl.style.display = "none";
            })

            addPlaylistDetailsNameBox.value = "";
            addPlaylistDetailsImageBox.value = "";
        }
        catch {
            let Aplaylist = document.createElement("div");

            let playlistName = document.createElement("H3");

            let playlistNameContent = document.createTextNode(addPlaylistDetailsNameBox.value);

            let playlistImageBox = document.createElement("div");

            let playlistDefulfImage = document.createElement("p");

            let playlistDefulfImageContent = document.createTextNode("Lt");

            let playSongImage = document.createElement("img");

            playSongImage.classList.add("mfyPlayBox");

            playSongImage.src = "images/play-64.png";

            playlistImageBox.append(playSongImage);

            Aplaylist.classList.add("AplayList");

            playlistImageBox.classList.add("image");

            playlistImageBox.appendChild(playlistDefulfImage)

            playlistName.appendChild(playlistNameContent)

            playlistName.classList.add("mfySongName");

            playlistDefulfImage.appendChild(playlistDefulfImageContent);
            Aplaylist.appendChild(playlistName);
            Aplaylist.appendChild(playlistImageBox);
            playListPnl.appendChild(Aplaylist);

            playlistTop += 40;

            var playlistList = document.querySelector("#playlistList");
            var playlistUlList = document.querySelector(".playlistUlList");
            var playlistLiBox = document.createElement("li");
            let hhh = document.getElementById("addPlaylistDetailsNameBox");
            var playlistLiBoxText = document.createTextNode(hhh.value);

            playlistLiListGoz = document.querySelectorAll(".playlistLiList");

            playlistLiBox.classList.add("playlistLiList");
            playlistLiBox.appendChild(playlistLiBoxText); playlistLiBox
            playlistUlList.appendChild(playlistLiBox);

            playlistList.style.transform = "translateY(" + -playlistTop + "px)"

            addPlaylistDetailsNameBox.value = "";
            addPlaylistDetailsImageBox.value = "";
        }
    }

    let songImageImg = document.querySelector("#songImageImg");

    for (let i = 0; i < playlistLiListGoz.length; i++) {
        playlistLiListGoz[i].addEventListener("click", () => {

            var AplaylistSong = document.createElement("div");
            var playlistSongName = document.createElement("H3");
            var playlistSongArtistName = document.createElement("p");
            var playlistSongArtistNameContent = document.createTextNode(songArtistName.innerHTML)
            var playlistSongNameSongContent = document.createTextNode(songName.innerHTML);
            var playlistSongImageBox = document.createElement("div");
            var playlistSongDefulfImage = document.createElement("p");
            var playlistSongDefulfImageContent = document.createTextNode("Lt");
            var playSongPlaylistImage = document.createElement("img");
            var playlistSongImage = document.createElement("img");

            playlistList.style.opacity = 1;
            playlistList.style.display = "none";

            playlistSongImage.classList.add("playlistSongImage");
            playlistSongImage.src = sourceSongImg.innerHTML;
            playlistSongImageBox.appendChild(playlistImage);
            playSongPlaylistImage.classList.add("playSongPlaylistImage");
            playSongPlaylistImage.src = "images/play-64.png";
            playlistSongImageBox.appendChild(playSongPlaylistImage);
            playSongPlaylistImage.dataset.src = sourceSong.innerHTML;
            playSongPlaylistImage.dataset.img = songImage.src;
            playSongPlaylistImage.dataset.name = songName.innerHTML;
            playSongPlaylistImage.dataset.artistname = songArtistName.innerHTML;
            AplaylistSong.classList.add("AplayListSong");
            playlistSongImageBox.classList.add("playlistSongImageBox");
            playlistSongImageBox.appendChild(playlistSongDefulfImage)
            playlistSongName.appendChild(playlistSongNameSongContent)
            playlistSongName.classList.add("AplayListSongName");
            playlistSongDefulfImage.appendChild(playlistSongDefulfImageContent);
            playlistSongDefulfImage.classList.add("playlistSongDefulfImage");
            playlistSongArtistName.appendChild(playlistSongArtistNameContent);
            playlistSongArtistName.classList.add("AplayListSongArtistName");
            playlistSongImageBox.appendChild(playlistSongImage);
            AplaylistSong.appendChild(playlistSongName);
            AplaylistSong.appendChild(playlistSongImageBox);
            AplaylistSong.appendChild(playlistSongArtistName);

            // add an song object to its own playlist array

            for (let j = 0; j < playlistsArray.length; j++) {
                if (playlistLiListGoz[i].innerHTML == playlistsArray[j]) {
                    playlistsArray[j][playlistSongArrayCount] = { name: songName.innerHTML,playlistname:playlistLiListGoz[i].innerHTML, artist: songArtistName.innerHTML, img: sourceSongImg.innerHTML, src: sourceSong.innerHTML };
                    zart = playlistsArray[j][playlistSongArrayCount];
                }
            }

            playlistSongArrayCount++;

            let AplayListSongGoz = document.querySelectorAll(".AplayListSong");
            let playSongPlaylistImageGoz = document.querySelectorAll(".playSongPlaylistImage");

            for (let p = 0; p < AplayListSongGoz.length; p++) {
                AplayListSongGoz[p].addEventListener("mousemove", () => {
                    playSongPlaylistImageGoz[p].style.opacity = 1;
                    playSongPlaylistImageGoz[p].style.transform = "translate(90px,70px)";
                    AplayListSongGoz[p].style.opacity = 1;
                })
                AplayListSongGoz[p].addEventListener("mouseout", () => {
                    AplayListSongGoz[p].style.opacity = 0.9;
                    playSongPlaylistImageGoz[p].style.opacity = 0;
                    playSongPlaylistImageGoz[p].style.transform = "translate(90px,100px)";
                })
            }

            for (let x = 0; x < playSongPlaylistImageGoz.length; x++) {
                playSongPlaylistImageGoz[x].addEventListener("mousemove", () => {
                    playSongPlaylistImageGoz[x].style.opacity = 1;
                    playSongPlaylistImageGoz[x].style.transform = "translate(90px,70px)";
                    AplayListSongGoz[x].style.opacity = 1;
                })
                playSongPlaylistImageGoz[x].addEventListener("click", () => {

                    playlistsSongControler.src = playSongPlaylistImageGoz[x].dataset.src + ".mp3";
                    playlistsSongControler.play();

                    songImage.src = playSongPlaylistImageGoz[x].dataset.img;
                    songName.innerHTML = playSongPlaylistImageGoz[x].dataset.name;
                    songArtistName.innerHTML = playSongPlaylistImageGoz[x].dataset.artistname;

                    songStylesIndexClear();
                    focusSongControler.pause();
                    popSongControler.pause();
                    chillSongControler.pause();
                    studySongControler.pause();
                    gameSongControler.pause();
                    rAndbSongControler.pause();
                    rapSongControler.pause();
                    animeSongControler.pause()
                    calmnessSongControler.pause();
                    classicSongControler.pause();
                    russianSongControler.pause();
                    heavySongControler.pause();
                    canadaSongControler.pause();
                    playlistsSongControler.play();
                    likedSongControler.pause();

                    unliked.style.display = "block";
                    liked.style.display = "none";
                    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

                    playBtn.style.display = "none";
                    playBtn.style.fill = "red";
                    pauseBtn.style.fill = "red";
                    pauseBtn.style.display = "block";

                    songStatusFocus = false;
                    songStatusStudy = false;
                    songStatusPop = false;
                    songStatusChill = false;
                    songStatusGame = false;
                    songStatusRAndb = false;
                    songStatusRap = false;
                    songStatusAnime = false;
                    songStatusCalmness = false;
                    songStatusPlaylist = true;
                    songStatusClassic = false;
                    songStatusRussian = false;
                    songStatusHeavy = false;
                    songStatusCanada = false;

                    playBtn.addEventListener("click", () => {
                        playlistsSongControler.play();
                    })
                    pauseBtn.addEventListener("click", () => {
                        playlistsSongControler.pause();
                    })

                    //updata progressBar with songTime

                    const progressBar = document.querySelector(".progressBar"),
                        progressArea = document.querySelector(".progressArea");

                    playlistsSongControler.addEventListener("timeupdate", (e) => {
                        const currentTime = e.target.currentTime;
                        const duration = e.target.duration;

                        let progressWith = (currentTime / duration) * 100;
                        progressBar.style.width = progressWith + "%";

                        let songCurrentTime = document.querySelector("#songTimeLeft"),
                            songDurationTime = document.querySelector("#songTimeRemaining")

                        playlistsSongControler.addEventListener("loadeddata", () => {

                            //update song total duration

                            let songDuration = playlistsSongControler.duration;
                            let totalMin = Math.floor(songDuration / 60);
                            let totalSec = Math.floor(songDuration % 60);
                            songDurationTime.innerHTML = totalMin + ":" + totalSec;
                            if (totalSec < 10) {
                                songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                            }

                        });

                        //update song total current time 

                        let currentMin = Math.floor(currentTime / 60);
                        let currentSec = Math.floor(currentTime % 60);
                        if (currentSec < 10) {
                            songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                        }
                        else {
                            songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                        }

                        //update playing song current time with progress bar 

                        progressArea.addEventListener("click", (e) => {
                            let progressWithVal = progressArea.clientWidth;
                            let clickedOffsetX = e.offsetX;
                            let songDuration = playlistsSongControler.duration;

                            playlistsSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                        })
                    });
                })
            }

            for (let y = 0; y < playlistSongImage.length; y++) {
                playlistSongImage[y].addEventListener("mousemove", () => {
                    playSongPlaylistImageGoz[y].style.opacity = 1;
                    playSongPlaylistImageGoz[y].style.transform = "translate(90px,70px)";
                    AplaylistSong[y].style.opacity = 1;
                })
                playlistSongImage[y].addEventListener("mouseout", () => {
                    AplaylistSong[y].style.opacity = 1;
                    playSongPlaylistImageGoz[y].style.opacity = 0;
                    playSongPlaylistImageGoz[y].style.transform = "translate(90px,100px)";
                })
            }

            let AllPlaylists = document.querySelectorAll(".AplaylistPnl");

            for (let j = 0; j < AllPlaylists.length; j++) {

                if (playlistLiListGoz[i].innerHTML == AllPlaylists[j].dataset.PnlSongName) {
                    AllPlaylists[j].appendChild(AplaylistSong);
                    messageBoxTxt.innerHTML = "the song added to playlist"
                    messageBoxTxt.style.opacity = 1;

                    setTimeout(() => {
                        messageBoxTxt.style.opacity = 0;
                    }, 5000)
                    setTimeout(() => {
                        messageBoxTxt.innerHTML = "";
                    }, 5500)
                }

            }

        })
    }

});

let zart;
// show AplaylistPnl with clicking AplalylistBox

// search panel 

const searchItem = document.querySelector("#searchItem");
const searchPnl = document.querySelector("#search");
const searchBox = document.querySelector("#searchBox");
const searchTxtBox = document.querySelector("#searchTxtBox");
const searchBoxHelper = document.getElementById("searchBoxHelper");
const searchIcon = document.querySelector("#searchIcon");

searchItem.addEventListener("click", () => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "block";
    homePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";

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
searchBox.addEventListener("mouseover", () => {
    searchBox.style.width = 370 + "px";
})
searchBox.addEventListener("click", () => {
    searchTxtBox.style.boxShadow = (0 + "px " + 5 + "px " + 5 + "px rgba(" + 255 + ", " + 0 + ", " + 0 + "," + 0.2 + ")," + 0 + "px " + 5 + "px " + 10 + "px rgba(" + 255 + ", " + 0 + ", " + 0 + "," + 0.2);
})
searchBoxHelper.addEventListener("click", () => {
    searchTxtBox.style.boxShadow = "none";
    searchBox.style.width = 60 + "px";
    searchTxtBox.style.color = "transparent";
})
searchBox.addEventListener("mouseout", () => {
    searchTxtBox.style.color = "rgb(185, 23, 23)";
})

//config sideBar linking

itemPlaylist.addEventListener("click", () => {
    libraryPnl.style.display = "block";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    accountPnl.style.display = "none";
    profilePnl.style.display = "none";
    heavyStyle.style.display = "none";
    rapStyle.style.display = "none";
    accountPnl2.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";

    PopStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    canadaStyle.style.display = "none";
    russianStyle.style.display = "none";
    classicStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    animeStyle.style.display = "none";
})
itemLikes.addEventListener("click", () => {
    libraryPnl.style.display = "block";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    accountPnl.style.display = "none";
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    rapStyle.style.display = "none";
    gameStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";

    chillStyle.style.display = "none";
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
itemArtists.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";

    calmnessStyle.style.display = "none";
    canadaStyle.style.display = "none";
    PopStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    animeStyle.style.display = "none";
    libraryPnlItem3.focus()
})

//pull and push of home palylist boxes slider

const rsLi = document.querySelectorAll(".rsLi");
const pullRSsong = document.querySelector(".pullRSsong");
const pushRSsong = document.querySelector(".pushRSsong");
const rightCursor5 = document.querySelector(".rightCursor5");
const leftCursor5 = document.querySelector(".leftCursor5");
let counter5 = 1;

rightCursor5.addEventListener("mouseover", () => {
    pullRSsong.style.opacity = 1;
})
rightCursor5.addEventListener("mouseout", () => {
    pullRSsong.style.opacity = 0;
})
pullRSsong.addEventListener("mouseover", () => {
    pullRSsong.style.opacity = 1;
})
pullRSsong.addEventListener("mouseout", () => {
    pullRSsong.style.opacity = 0;
})
leftCursor5.addEventListener("mouseover", () => {
    if (counter5 != 1) pushRSsong.style.opacity = 1;
})
leftCursor5.addEventListener("mouseout", () => {
    pushRSsong.style.opacity = 0;
})
pushRSsong.addEventListener("mouseover", () => {
    if (counter5 != 1) pushRSsong.style.opacity = 1;
})
pushRSsong.addEventListener("mouseout", () => {
    pushRSsong.style.opacity = 0;
})

pullRSsong.addEventListener("click", () => {
    counter5++;

    if (counter5 == rsLi.length) {
        return false;
    }
    else {
        counter5++;
        for (let i = 0; i < rsLi.length; i++) {
            rsLi[i].style.marginLeft = rsLi[i].clientWidth * -counter5 + rsLi[i].clientWidth + rsLi[i].clientWidth + "px";
        }
        counter5++;
    }

})
pushRSsong.addEventListener("click", () => {
    counter5--;
    if (counter5 == 1) {
        return false
    }
    else {
        for (let i = 0; i < rsLi.length; i++) {
            rsLi[i].style.marginLeft = -rsLi[i].clientWidth * counter5 + rsLi[i].clientWidth + rsLi[i].clientWidth + 1 * counter5 + "px";
        }
        //counter5--;    
    }

})

//profile setting

const profilePnl = document.querySelector(".profilePnl");


itemProfile.addEventListener("click", () => {
    profilePnl.style.display = "block";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    animeStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";

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

gameStylePnl.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";

    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
})
chillStylePnl.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";

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
focusStylePnl.addEventListener("click", () => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "block";
    moreProfileOptionBox.style.height = 0 + "px";

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
studyStylePnl.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";

    rapStyle.style.display = "none";
    PopStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    russianStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
})
animeStylePnl.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";

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
rapStylePnl.addEventListener("click", () => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";

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
popStylePnl.addEventListener("click", () => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "block";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";
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
rANDbStylePnl.addEventListener("click", () => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";

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
calmnessStylePnl.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";
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
classicStylePnl.addEventListener("click", () => {
    profilePnl.style.display = "none";
    accountPnl2.style.display = "none";
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    moreProfileOptionBox.style.height = 0 + "px";
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
russianStylePnl.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";
    rANDbStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    classicStyle.style.display = "none";
    heavyStyle.style.display = "none";
    canadaStyle.style.display = "none";
    russianStyle.style.display = "block";
})
heavyStylePnl.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";
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
canadaStylePnl.addEventListener("click", () => {
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
    moreProfileOptionBox.style.height = 0 + "px";
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

function rangeChainger2() {
    progressBarValueHelper2.style.width = progressBarValue2.value * 11 / 3.5 - 1 + "px";
}
function voloumRangeChainger2() {
    voloumRangeHelper2.style.height = voloumBarValue2.value - 30 + "px";
    let i = -voloumBarValue2.value + 40;
    voloumRangeHelper2.style.transform = "translateY(" + i + "px" + ")";
}

// audio vollom 

const audioLowBtn = document.querySelector("#audioLowBtn");
const audioMiddleBtn = document.querySelector("#audioMiddleBtn");
const audioUpBtn = document.querySelector("#audioUpBtn");

audioLowBtn.addEventListener("click", () => {
    audioLowBtn.style.display = "none";
    audioUpBtn.style.display = "block";
    voloumBarValue2.value = 100;
    voloumRangeHelper2.style.height = 72 + "px";
    voloumRangeHelper2.style.transform = "translateY(" + -63 + "px" + ")";
})
audioUpBtn.addEventListener("click", () => {
    audioLowBtn.style.display = "block";
    audioUpBtn.style.display = "none";
    voloumBarValue2.value = 0;
    voloumRangeHelper2.style.height = 0 + "px";
})
voloumBarValue.addEventListener("click", () => {
    if (voloumBarValue.value < 30) {
        audioLowBtn.style.display = "block"
        audioMiddleBtn.style.display = "none";
        audioUpBtn.style.display = "none";
    }
    else if (voloumBarValue.value < 70) {
        audioLowBtn.style.display = "none"
        audioMiddleBtn.style.display = "block";
        audioUpBtn.style.display = "none";
    }
    else if (voloumBarValue.value < 100) {
        audioLowBtn.style.display = "none"
        audioMiddleBtn.style.display = "none";
        audioUpBtn.style.display = "block";
    }
})

//close the middel player Box

const closeBtn = document.querySelector("#closeBtn");
const screenHider = document.querySelector("#screenHider");
const songPlayerMiddleBox = document.querySelector(".songPlayerMiddleBox");

closeBtn.addEventListener("click", () => {
    songPlayerMiddleBox.style.opacity = 0;
    songPlayerMiddleBox.style.transform = "translate(-50%,-40%)"
    screenHider.style.opacity = 0;
    setTimeout(() => {
        screenHider.style.display = "none";
        songPlayerMiddleBox.style.display = "none";
    }, 100)
})

// order play song setting

const songRepeatBtn = document.querySelector("#songRepeatBtn");
const songOrderBtn = document.querySelector("#songOrderBtn");
let songOrderState = false;
let songRepeatState = false;

songRepeatBtn.addEventListener("click", () => {
    if (songRepeatState == false) {
        songRepeatBtn.style.fill = "red";
        songOrderBtn.style.fill = "rgb(150, 0, 0)";
        songRepeatState = true;
    }
    else {
        songRepeatBtn.style.fill = "rgb(150, 0, 0)";
        songRepeatState = false;
    }
})
songOrderBtn.addEventListener("click", () => {
    if (songOrderState == false) {
        songOrderBtn.style.fill = "red";
        songRepeatBtn.style.fill = "rgb(150, 0, 0)";
        songOrderState = true;
    }
    else {
        songOrderBtn.style.fill = "rgb(150, 0, 0)";
        songOrderState = false;
    }
})

//like the middle songs

const likeFullBtn = document.querySelector("#likeFullBtn");
const likeEmptyBtn = document.querySelector("#likeEmptyBtn");

likeFullBtn.addEventListener("click", () => {
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
})
likeEmptyBtn.addEventListener("click", () => {
    likeFullBtn.style.display = "block";
    likeEmptyBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(0px,0px)"
})

// order play song setting for fullScreen page 

const songRepeatFullSBtn = document.querySelector("#songRepeatFullSBtn");
const songOrderFullSBtn = document.querySelector("#songOrderFullSBtn");
let songOrderFullSState = false;
let songRepeatFullStState = false;

songRepeatFullSBtn.addEventListener("click", () => {
    if (songRepeatFullStState == false) {
        songRepeatFullSBtn.style.fill = "red";
        songOrderFullSBtn.style.fill = "rgb(150, 0, 0)";
        songRepeatFullStState = true;
    }
    else {
        songRepeatFullSBtn.style.fill = "rgb(150, 0, 0)";
        songRepeatFullStState = false;
    }
})
songOrderFullSBtn.addEventListener("click", () => {
    if (songOrderFullSState == false) {
        songOrderFullSBtn.style.fill = "red";
        songRepeatFullSBtn.style.fill = "rgb(150, 0, 0)";
        songOrderFullSState = true;
    }
    else {
        songOrderFullSBtn.style.fill = "rgb(150, 0, 0)";
        songOrderFullSState = false;
    }
})

// control the progress bar value 2

const progressBarFullSValue2 = document.querySelector("#progressBarFullSValue2");
const progressBarValueFullSHelper2 = document.querySelector("#rangeHelper2FullS");
const voloumBarFullSValue2 = document.querySelector("#voloumBarFullSValue2");
const voloumRangeFullSHelper2 = document.querySelector("#voloumRangeHelper2FullS");

function rangeChainger2FullS() {
    progressBarValueFullSHelper2.style.width = progressBarFullSValue2.value * 30 / 3.5 + "px";
    if (progressBarFullSValue2.value > 30) {
        progressBarValueFullSHelper2.style.width = progressBarFullSValue2.value * 30 / 3.5 + "px";
    }
}
function voloumRangeChainger2FullS() {
    voloumRangeFullSHelper2.style.width = voloumBarFullSValue2.value / 1.2 + "px";
}

// audio vollom Full Screen 

const audioLowBtn2 = document.querySelector("#audioLowBtn2");
const audioMiddleBtn2 = document.querySelector("#audioMiddleBtn2");
const audioUpBtn2 = document.querySelector("#audioUpBtn2");

audioLowBtn2.addEventListener("click", () => {
    audioLowBtn2.style.display = "none";
    audioUpBtn2.style.display = "block";
    voloumBarFullSValue2.value = 100;
    voloumRangeFullSHelper2.style.width = 72 + "px";
})
audioUpBtn2.addEventListener("click", () => {
    audioLowBtn2.style.display = "block";
    audioUpBtn2.style.display = "none";
    voloumBarFullSValue2.value = 0;
    voloumRangeFullSHelper2.style.width = 0 + "px";
})
voloumBarFullSValue2.addEventListener("click", () => {
    if (voloumBarFullSValue2.value < 30) {
        audioLowBtn2.style.display = "block"
        audioMiddleBtn2.style.display = "none";
        audioUpBtn2.style.display = "none";
    }
    else if (voloumBarFullSValue2.value < 70) {
        audioLowBtn2.style.display = "none"
        audioMiddleBtn2.style.display = "block";
        audioUpBtn2.style.display = "none";
    }
    else if (voloumBarFullSValue2.value < 100) {
        audioLowBtn2.style.display = "none"
        audioMiddleBtn2.style.display = "none";
        audioUpBtn2.style.display = "block";
    }
})

//close the full Screen panel

const closeBtnFullS = document.querySelector("#closeFullSBtn");
const fullScreenSongPlayer = document.querySelector(".fullScreenSongPlayer");

closeBtnFullS.addEventListener("click", () => {
    fullScreenSongPlayer.style.opacity = 0;
    fullScreenSongPlayer.style.transform = "translateY(" + 100 + "px)";

    setTimeout(() => {
        fullScreenSongPlayer.style.display = "none";
    }, 111);
})

// touch Full Screen panel for hide the element

const elements = document.querySelectorAll(".show");
const PlayerimageBoxFullS = document.querySelector(".PlayerimageBoxFullS")
let FullSElementState = false;

PlayerimageBoxFullS.addEventListener("click", () => {
    if (!FullSElementState) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("show2");
            elements[i].classList.remove("show");
            FullSElementState = true;
        }
    }
    else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("show");
            elements[i].classList.remove("show2");
            FullSElementState = false;
        }
    }
})

//show the middle Box

const middlePlayerOpener = document.querySelector("#middlePlayerOpener");

middlePlayerOpener.addEventListener("click", () => {
    screenHider.style.display = "block";
    songPlayerMiddleBox.style.display = "block";
    setTimeout(() => {
        songPlayerMiddleBox.style.opacity = 1;
        songPlayerMiddleBox.style.transform = "translate(-50%,-50%)"
        screenHider.style.opacity = 0.7;

    }, 100)
})

//show the fullScreen box 

const fullScreenBtn = document.querySelector("#fullScreenBtn");

fullScreenBtn.addEventListener("click", () => {
    fullScreenSongPlayer.style.display = "block";
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("show");
        elements[i].classList.remove("show2");
        FullSElementState = false;
    }

    setTimeout(() => {
        fullScreenSongPlayer.style.opacity = 1;
        fullScreenSongPlayer.style.transform = "translateY(" + 0 + "px)";
    }, 111);
})

// sing up developing

const logUpBtn = document.querySelector("#singUpBtn");
const emailTxtBox = document.querySelector("#Email");
const userNameTxtBox = document.querySelector("#Uname");
const passwordTxtBox = document.querySelector("#Pass");
const rePasswordTxtBox = document.querySelector("#rePass");
const singUpErrorTxt = document.querySelector("#singUpError");

logUpBtn.addEventListener("click", () => {
    if (passwordTxtBox.value == rePasswordTxtBox.value) {
        console.log("goz");
    }
    else {
        singUpErrorTxt.innerHTML = "yout password and rePass not match"
    }
})



// account linking page

const accountPnl = document.querySelector(".account");
const accountPnl2 = document.querySelector(".account2")

function accountLink() {

    if (atenticationState == false) {
        accountPnl.style.display = "block";
        accountPnl2.style.display = "none";
        libraryPnl.style.display = "none";
        searchPnl.style.display = "none";
        homePnl.style.display = "none";
        profilePnl.style.display = "none";
        gameStyle.style.display = "none";
        animeStyle.style.display = "none";
        rapStyle.style.display = "none";
        chillStyle.style.display = "none";
        focusStyle.style.display = "none";
        moreProfileOptionBox.style.height = 0 + "px";
        studyStyle.style.display = "none";
        PopStyle.style.display = "none";
        calmnessStyle.style.display = "none";
        canadaStyle.style.display = "none";
        classicStyle.style.display = "none";
        rANDbStyle.style.display = "none";
        heavyStyle.style.display = "none";
        russianStyle.style.display = "none";
    }
    else {
        accountPnl2.style.display = "block";
        accountPnl.style.display = "none";
        libraryPnl.style.display = "none";
        searchPnl.style.display = "none";
        homePnl.style.display = "none";
        profilePnl.style.display = "none";
        gameStyle.style.display = "none";
        rapStyle.style.display = "none";
        moreProfileOptionBox.style.height = 0 + "px";
        chillStyle.style.display = "none";
        focusStyle.style.display = "none";
        classicStyle.style.display = "none";
        studyStyle.style.display = "none";
        PopStyle.style.display = "none";
        calmnessStyle.style.display = "none";
        canadaStyle.style.display = "none";
        rANDbStyle.style.display = "none";
        russianStyle.style.display = "none";
        heavyStyle.style.display = "none";
        animeStyle.style.display = "none";
    }
}

//set sing up

function panelsHider() {
    accountPnl.style.display = "none";
    libraryPnl.style.display = "none";
    searchPnl.style.display = "none";
    homePnl.style.display = "none";
    profilePnl.style.display = "none";
    gameStyle.style.display = "none";
    chillStyle.style.display = "none";
    focusStyle.style.display = "none";
    studyStyle.style.display = "none";
    animeStyle.style.display = "none";
    calmnessStyle.style.display = "none";
    PopStyle.style.display = "none";
    canadaStyle.style.display = "none";
    classicStyle.style.display = "none";
    heavyStyle.style.display = "none";
    russianStyle.style.display = "none";
    rANDbStyle.style.display = "none";
    rapStyle.style.display = "none";
    accountPnl2.style.display = "none";
}

const singUpBtn = document.querySelector("#singUpBtn");
let atenticationState = false;
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let user;

singUpBtn.addEventListener("click", () => {

    if (passwordTxtBox.value == "" || userNameTxtBox.value == "" || emailTxtBox.value == "" || rePasswordTxtBox.value == "") {
        singUpErrorTxt.innerHTML = "please complite the fields";
    }
    else {
        if (passwordTxtBox.value == rePasswordTxtBox.value) {
            if (emailTxtBox.value.match(mailFormat)) {
                atenticationState = true

                user = {
                    email: emailTxtBox.value,
                    userName: userNameTxtBox.value,
                    password: passwordTxtBox.value,
                };

                accountPnl.style.display = "none";
                libraryPnl.style.display = "none";
                searchPnl.style.display = "none";
                homePnl.style.display = "block";
                profilePnl.style.display = "none";
                gameStyle.style.display = "none";
                chillStyle.style.display = "none";
                focusStyle.style.display = "none";
                studyStyle.style.display = "none";
                animeStyle.style.display = "none";
                calmnessStyle.style.display = "none";
                moreProfileOptionBox.style.height = 0 + "px";
                PopStyle.style.display = "none";
                canadaStyle.style.display = "none";
                classicStyle.style.display = "none";
                heavyStyle.style.display = "none";
                russianStyle.style.display = "none";
                rANDbStyle.style.display = "none";
                rapStyle.style.display = "none";
                accountPnl2.style.display = "none";
            }
            else {
                singUpErrorTxt.innerHTML = "your email is not formating to standard";
            }
        }
        else {
            singUpErrorTxt.innerHTML = "yout password and rePass not match";
        }
    }
})

//loging developing

const userTxtBox2 = document.querySelector("#Uname2");
const passwordTxtBox2 = document.querySelector("#Pass2")
const singInBtn = document.querySelector("#singInBtn");
let accountTxt = document.querySelector("#accountTxt");
const singInError = document.querySelector("#singInError");

singInBtn.addEventListener("click", () => {
    if (userTxtBox2.value == "" || passwordTxtBox2.value == "") {
        singInError.innerHTML = "please complite the fields";
    }
    else {
        if (userTxtBox2.value == user.userName && passwordTxtBox2.value == user.password) {
            accountPnl.style.display = "none";
            libraryPnl.style.display = "none";
            searchPnl.style.display = "none";
            homePnl.style.display = "none";
            profilePnl.style.display = "block";
            gameStyle.style.display = "none";
            chillStyle.style.display = "none";
            focusStyle.style.display = "none";
            studyStyle.style.display = "none";
            animeStyle.style.display = "none";
            calmnessStyle.style.display = "none";
            moreProfileOptionBox.style.height = 0 + "px";

            PopStyle.style.display = "none";
            canadaStyle.style.display = "none";
            classicStyle.style.display = "none";
            heavyStyle.style.display = "none";
            russianStyle.style.display = "none";
            rANDbStyle.style.display = "none";
            rapStyle.style.display = "none";
            accountPnl2.style.display = "none";
            accountTxt.innerHTML = user.userName;
            profileUsernameValue.value = user.userName;
        }
        else {
            singInError.innerHTML = "you are not register please sing-Up";
        }
    }
})
// edit the profile details

const profileEditBtn = document.querySelector("#profileEditBtn");
let profEditState = false;
const profileBioValue = document.querySelector(".profileBioValue");
const editorHider = document.querySelector("#editHider");
const profileUsernameValue = document.querySelector(".profileUsernameValue");
const messageBoxTxt = document.querySelector("#messageBoxTxt");

profileEditBtn.addEventListener("click", () => {
    if (atenticationState == true) {
        if (profEditState == false) {
            editorHider.style.display = "none";
            profileEditBtn.style.backgroundColor = "#8c87a5";
            profileEditBtn.style.color = "black";
            profEditState = true;
            profileEditBtn.addEventListener("mouseover", () => {
                profileEditBtn.style.color = "#8c87a5";
                profileEditBtn.style.backgroundColor = "transparent";
                profileEditBtn.style.border = "2px solid #8c87a5"
            })
            profileEditBtn.addEventListener("mouseout", () => {
                profileEditBtn.style.color = "black";
                profileEditBtn.style.backgroundColor = "#8c87a5";
                profileEditBtn.style.border = "none"
            })
        }
        else {
            editorHider.style.display = "block";
            profileEditBtn.style.backgroundColor = "transparent";
            profileEditBtn.style.color = "#8c87a5";
            profEditState = false;
            accountTxt.innerHTML = profileUsernameValue.value;
            profileEditBtn.addEventListener("mouseover", () => {
                profileEditBtn.style.color = "black";
                profileEditBtn.style.backgroundColor = "#8c87a5";
                profileEditBtn.style.border = "none"
            })
            profileEditBtn.addEventListener("mouseout", () => {
                profileEditBtn.style.color = "#8c87a5";
                profileEditBtn.style.backgroundColor = "transparent";
                profileEditBtn.style.border = "2px solid #8c87a5"
            })
        }
    }
    else {
        messageBoxTxt.innerHTML = "please create an account first"
        messageBoxTxt.style.opacity = 1;
        messageBoxTxt.style.transform = "translateY(" + 0 + "px)";
        setTimeout(() => {
            messageBoxTxt.style.transition = 0.3 + "s";
            messageBoxTxt.style.opacity = 0;
            messageBoxTxt.style.transform = "translateY(" + -30 + "px)";
        }, 5000)
    }

})

const profImgUpload = document.querySelector("#profImgUpload");
const profImgUploadSelect = document.querySelector("#profImgUploadSelect");
const profImg = document.querySelector(".profImg");
const account = document.querySelector("#account");
const accountProfileImage = document.querySelector("#accountProfileImage");

profImgUpload.addEventListener("click", () => {
    profImgUploadSelect.click();
})
profImgUploadSelect.addEventListener("change", () => {
    profImg.style.opacity = 1;
    profImg.src = profImgUploadSelect.value;

    var input3 = profImgUploadSelect;
    var fReader3 = new FileReader();
    fReader3.readAsDataURL(input3.files[0]);
    fReader3.onloadend = function (event) {
        var img3 = profImg;
        img3.src = event.target.result;
    }

    var input4 = profImgUploadSelect;
    var fReader4 = new FileReader();
    fReader4.readAsDataURL(input3.files[0]);
    fReader4.onloadend = function (event) {
        var img4 = accountProfileImage;
        img4.src = event.target.result;
    }
})

// set the songs in pop sont style

let focusSongsIndex = 1;
let studySongsIndex = 1;
let gameSongsIndex = 1;
let chillSongsIndex = 1;
let heavySongsIndex = 1;
let russianSongsIndex = 1;
let animeSongsIndex = 1;
let canadaSongsIndex = 1;
let classicSongsIndex = 1;
let popSongsIndex = 1;
let rapSongsIndex = 1;
let rAndbSongsIndex = 1;

function songStylesIndexClear() {
    focusSongsIndex = 1;
    studySongsIndex = 1;
    gameSongsIndex = 1;
    chillSongsIndex = 1;
    heavySongsIndex = 1;
    russianSongsIndex = 1;
    animeSongsIndex = 1;
    canadaSongsIndex = 1;
    classicSongsIndex = 1;
    popSongsIndex = 1;
    rapSongsIndex = 1;
    rAndbSongsIndex = 1;
    playlistSongsCounter = 1;
}

var sourceSong = document.querySelector(".sourceSong");
var sourceSongImg = document.querySelector(".sourceSongImg")

const popSongsImg = document.querySelectorAll(".popSongsImg");
const popSongsNames = document.querySelectorAll(".popSongsNames");
const popSongsArtistsNames = document.querySelectorAll(".popSongsArtistName");
const popSongsbuttonPlayer = document.querySelectorAll(".popSongsbuttonPlayer");
const popSongControler = document.querySelector("#popSongControler");
const popSongControlerSrc = document.querySelector("#popSongControlerSrc");
let popRecently = 0;
let popName;
let popImage;
let popSong;
let popArtistName;
let recentlySongControler = document.querySelector("#recentlySongControler");

for (let i = 0; i < popSongsbuttonPlayer.length; i++) {
    popSongsbuttonPlayer[i].addEventListener("click", () => {
        popRecently++;
        songStylesIndexClear();
        for (let j = 0; j < popStyleSongs.length; j++) {
            if (popSongsbuttonPlayer[i].dataset.songname == popStyleSongs[j].src) {



                popName = popStyleSongs[j].name;
                popImage = "images/" + popStyleSongs[j].img + ".jpg";
                popSong = "tracks/pop/" + popStyleSongs[j].src + ".mp3";
                popArtistName = popStyleSongs[j].artist;
                songName.innerHTML = popStyleSongs[j].name;
                sourceSong.innerHTML = "tracks/pop/" + popStyleSongs[j].src;
                sourceSongImg.innerHTML = "images/" + popStyleSongs[j].img + ".jpg" || ".png";

                songArtistName.innerHTML = popStyleSongs[j].artist;
                songImage.src = "images/" + popStyleSongs[j].img + ".jpg";
                popSongControler.src = "tracks/pop/" + popStyleSongs[j].src + ".mp3";
                songImage.style.display = "block";
                MiddleSongName.innerHTML = popStyleSongs[j].name;
                middlePlayerimageBoxImg.src = "images/" + popStyleSongs[j].img + ".jpg";
                middlePlayerimageBoxImg.style.display = "block";

                focusSongControler.pause();
                popSongControler.play();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();
                likedSongControler.pause();

                unliked.style.display = "block";
                liked.style.display = "none";
                liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


                popSongsIndex++;

            }
        }

        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";
        songStatusPop = true;

        if (popRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(popName);

            resentlyPlayImage.dataset.rpopsongname = popSong;
            resentlyPlayImage.dataset.rpopnamesong = popName;
            resentlyPlayImage.dataset.rpopsongartistname = popArtistName;
            resentlyPlayImage.dataset.rpopsongimage = popImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = popImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            popRecently = 0;

        }

    })

}

searchItem.addEventListener("click", () => {
    var gozBazar = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazar.length; i++) {
        gozBazar[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazar[i].dataset.rpopsongname;
            songName.innerHTML = gozBazar[i].dataset.rpopnamesong;
            songImage.src = gozBazar[i].dataset.rpopsongimage
            songArtistName.innerHTML = gozBazar[i].dataset.rpopsongartistname;
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            likedSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

//set song in the boxes 

popSongsNames[1].innerHTML = "Alien";
popSongsNames[2].innerHTML = "Alien2";
popSongsNames[3].innerHTML = "Another love";
popSongsNames[4].innerHTML = "Bad habits";
popSongsNames[5].innerHTML = "Christmas";
popSongsNames[6].innerHTML = "Dont forget my love";
popSongsNames[7].innerHTML = "Dont forget my love 2";
popSongsNames[8].innerHTML = "Light switch";
popSongsNames[9].innerHTML = "Love Enwantiti";
popSongsNames[10].innerHTML = "Motley Crew";
popSongsNames[11].innerHTML = "Never say never";
popSongsNames[12].innerHTML = "Rose";
popSongsNames[13].innerHTML = "Skate";
popSongsNames[14].innerHTML = "Smack that";
popSongsNames[15].innerHTML = "We car reach start";
popSongsNames[16].innerHTML = "Rose";
popSongsNames[17].innerHTML = "Light switch";
popSongsNames[18].innerHTML = "Rose";
popSongsNames[19].innerHTML = "Christmas";
popSongsNames[20].innerHTML = "Rose";
popSongsNames[21].innerHTML = "Smack that";
popSongsNames[22].innerHTML = "Alien";

popSongsArtistsNames[1].innerHTML = "School brich";
popSongsArtistsNames[2].innerHTML = "Dinero";
popSongsArtistsNames[3].innerHTML = "Tom odell";
popSongsArtistsNames[4].innerHTML = "Sneeran";
popSongsArtistsNames[5].innerHTML = "Bts";
popSongsArtistsNames[6].innerHTML = "Diplo & Miguel";
popSongsArtistsNames[7].innerHTML = "Diplo & Miguel";
popSongsArtistsNames[8].innerHTML = "Charlie puth";
popSongsArtistsNames[9].innerHTML = "Ckay";
popSongsArtistsNames[10].innerHTML = "Justin Bieber";
popSongsArtistsNames[11].innerHTML = "D.o Exo";
popSongsArtistsNames[12].innerHTML = "Akon";
popSongsArtistsNames[13].innerHTML = "Blake Shelton";
popSongsArtistsNames[14].innerHTML = "Blake Shelton";
popSongsArtistsNames[15].innerHTML = "Blake Shelton";
popSongsArtistsNames[16].innerHTML = "Akon";
popSongsArtistsNames[17].innerHTML = "Charlie puth";
popSongsArtistsNames[18].innerHTML = "D.o Exo";
popSongsArtistsNames[19].innerHTML = "Sneeran";
popSongsArtistsNames[20].innerHTML = "D.o Exo";
popSongsArtistsNames[21].innerHTML = "Akon";
popSongsArtistsNames[22].innerHTML = "School brich";

popSongsImg[1].src = "images/rauf&faikRt.jpg";
popSongsImg[2].src = "images/81b2DvMD84L._SS500_.jpg";
popSongsImg[3].src = "images/Tom-Odell-accordi-e-testo.jpg";
popSongsImg[4].src = "images/Ed-Sheeran-Song-Whatsapp-Status-Video-Download-Full-Screen-Videos.jpg";
popSongsImg[5].src = "images/91LsI86dyLL.jpg";
popSongsImg[6].src = "images/download.jpg";
popSongsImg[7].src = "images/download.jpg";
popSongsImg[8].src = "images/artworks-000129843758-mpudez-t500x500.jpg";
popSongsImg[9].src = "images/artworks-LqPz3TafTzeDCuG3-ZxFCLw-t500x500.jpg";
popSongsImg[10].src = "images/download (1).jpg";
popSongsImg[11].src = "images/d9fd88ff0d1810de7197f234d95f39ba.jpg";
popSongsImg[12].src = "images/images.jpg";
popSongsImg[12].src = "images/download (2).jpg";
popSongsImg[13].src = "images/images.jpg";
popSongsImg[14].src = "images/artworks-000129843758-mpudez-t500x500.jpg";
popSongsImg[15].src = "images/artworks-LqPz3TafTzeDCuG3-ZxFCLw-t500x500.jpg";
popSongsImg[16].src = "images/download (1).jpg";
popSongsImg[17].src = "images/d9fd88ff0d1810de7197f234d95f39ba.jpg";
popSongsImg[18].src = "images/images.jpg";
popSongsImg[19].src = "images/download (2).jpg";
popSongsImg[20].src = "images/bs-WMNsite-750.jpeg";
popSongsImg[21].src = "images/download (2).jpg";
popSongsImg[22].src = "images/bs-WMNsite-750.jpeg";
popSongsImg[23].src = "images/rauf&faikRt.jpg";

let popStyleSongs = [
    {
        name: "2u",
        artist: "David guetta",
        img: "chillBg",
        src: "2u"
    },
    {
        name: "Alien",
        artist: "School brich",
        img: "rauf&faikRt",
        src: "alien"
    },
    {
        name: "Alien2",
        artist: "Dinero",
        img: "81b2DvMD84L._SS500_",
        src: "alien2"
    },
    {
        name: "Another Love",
        artist: "Tom odell",
        img: "Tom-Odell-accordi-e-testo",
        src: "anotherLove"
    },
    {
        name: "Bad habits",
        artist: "Sheeran",
        img: "Ed-Sheeran-Song-Whatsapp-Status-Video-Download-Full-Screen-Videos",
        src: "badHabits"
    },
    {
        name: "Christmass",
        artist: "Bts",
        img: "91LsI86dyLL",
        src: "christmas"
    },
    {
        name: "Dont forget my love",
        artist: "Diplo",
        img: "download",
        src: "dontForgetMyLove"
    },
    {
        name: "Dont forget my love 2",
        artist: "Diplo",
        img: "download",
        src: "dontForgetMyLove2"
    },
    {
        name: "light Switch",
        artist: "Charlie puth",
        img: "artworks-000129843758-mpudez-t500x500",
        src: "lightSwitch"
    },
    {
        name: "Love enwantati",
        artist: "Ckay",
        img: "artworks-LqPz3TafTzeDCuG3-ZxFCLw-t500x500",
        src: "loveEnwantiti"
    },
    {
        name: "Motley crew",
        artist: "justin beiber",
        img: "download (1)",
        src: "motleyCrew"
    },
    {
        name: "Never say never",
        artist: "D.o Exo",
        img: "d9fd88ff0d1810de7197f234d95f39ba",
        src: "neverSayNever"
    },
    {
        name: "Rose",
        artist: "D.o Exo",
        img: "d9fd88ff0d1810de7197f234d95f39ba",
        src: "rose"
    },
    {
        name: "Skate",
        artist: "Bruno mars",
        img: "images",
        src: "skate"
    },
    {
        name: "Smack That",
        artist: "Akon",
        img: "download (2)",
        src: "smackThat"
    },
    {
        name: "Wa can reach the stars",
        artist: "blake shelton",
        img: "bs-WMNsite-750",
        src: "weCanReachTheStars"
    },
    {
        name: "Smack that",
        artist: "blake shelton",
        img: "artworks-000129843758-mpudez-t500x500",
        src: "smackThat"
    },
    {
        name: "Smack that",
        artist: "blake shelton",
        img: "artworks-000129843758-mpudez-t500x500",
        src: "smackThat"
    },
    {
        name: "We can reach the stars",
        artist: "Justin bieber",
        img: "download (1)",
        src: "weCanReachTheStars"
    },
    {
        name: "Rose",
        artist: "Akon",
        img: "d9fd88ff0d1810de7197f234d95f39ba",
        src: "rose"
    },
    {
        name: "Light switch",
        artist: "Charlie puth",
        img: "images",
        src: "lightSwitch"
    },
    {
        name: "Rose",
        artist: "D.o exo",
        img: "download (2)",
        src: "rose"
    },
    {
        name: "Christmas",
        artist: "Sceeran",
        img: "bs-WMNsite-750",
        src: "christmas"
    },
    {
        name: "Rose",
        artist: "D.o exo",
        img: "download (2)",
        src: "rose"
    },
    {
        name: "Smack that",
        artist: "Akon",
        img: "bs-WMNsite-750",
        src: "smackThat"
    },
    {
        name: "Alien",
        artist: "Rauf & Falk",
        img: "rauf&faikRt",
        src: "alien"
    },
]

const songControler = document.querySelector(".songControler"),
    songImage = document.querySelector("#songImageImg"),
    songName = document.querySelector("#songName"),
    songArtistName = document.querySelector("#songArtistName"),
    popStyleBtnPlayer = document.querySelector("#popStyleBtnPlayer");


popStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadPopMusic(popSongsIndex);
})

//load pop songs

function loadPopMusic(indexNumber) {
    songName.innerHTML = popStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = popStyleSongs[indexNumber - 1].artist;
    songImage.src = "images/" + popStyleSongs[indexNumber - 1].img + ".jpg";
    popSongControler.src = "tracks/pop/" + popStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = popStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = popStyleSongs[indexNumber - 1].img ;
    songImage.style.display = "block";
    middlePlayerimageBoxImg.style.display = "block";

    focusSongControler.pause();
    popSongControler.play();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.pause()
    calmnessSongControler.pause();
    classicSongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    canadaSongControler.pause();
    recentlySongControler.pause();
    playlistsSongControler.pause();
    likedSongControler.pause();

    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = true;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;

}

let MiddleSongName = document.querySelector("#MiddleSongName");
let middlePlayerimageBoxImg = document.querySelector(".middlePlayerimageBoxImg");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");

playSongBtn.addEventListener("click", () => {
    popSongControler.play();
})
playSongBtn.addEventListener("click", () => {
    popSongControler.play();
})
pauseSongBtn.addEventListener("click", () => {
    popSongControler.pause();
})
pauseSongBtn.addEventListener("click", () => {
    popSongControler.pause();
})

const skipNext = document.querySelector("#skipNext"),
    skipBack = document.querySelector("#skipBack");

const nextSongBtn = document.querySelector("#nextSongBtn"),
beforeSongBtn = document.querySelector("#beforeSongBtn");

skipNext.addEventListener("click", () => {
    if (songStatusPop == true) {
        nextPopSong();
    }
})
nextSongBtn.addEventListener("click", () => {
    if (songStatusPop == true) {
        nextPopSong();
    }
})


skipBack.addEventListener("click", () => {
    if (songStatusPop == true) {
        beforePopSong();
    }
})
beforeSongBtn.addEventListener("click", () => {
    if (songStatusPop == true) {
        beforePopSong();
    }
})

//click next song button developing

function nextPopSong() {
    popSongsIndex++;
    popSongsIndex > popStyleSongs.length ? popSongsIndex = 1 : popStyleSongs = popStyleSongs;

    loadPopMusic(popSongsIndex);

}

//click before song button developing

function beforePopSong() {
    popSongsIndex--;
    popSongsIndex < 1 ? popSongsIndex = popStyleSongs.length : popSongsIndex = popSongsIndex;

    loadPopMusic(popSongsIndex);

}

//updata progressBar with songTime

const progressBar = document.querySelector(".progressBar"),
    progressArea = document.querySelector(".progressArea");
const middleProgressBar = document.querySelector(".middleProgressBar"),
    middleProgressArea = document.querySelector(".middleProgressArea");

popSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";

    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    popSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = popSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = popSongControler.duration;

        popSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = popSongControler.duration;

        popSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

const repeatPlayButton = document.querySelector("#repeat");
const randomPlayButton = document.querySelector("#orderPlay");

let repeatState1 = false;
let randomState1 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState1 == false) {
        repeatState1 = true;
    }
    else {
        repeatState1 = false;
    }
})

songRepeatBtn.addEventListener("click", () => {
    if (repeatState1 == false) {
        repeatState1 = true;
    }
    else {
        repeatState1 = false;
    }
})

randomPlayButton.addEventListener("click", () => {
    if (randomState1 == false) {
        randomState1 = true;
    }
    else {
        randomState1 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState1 == false) {
        randomState1 = true;
    }
    else {
        randomState1 = false;
    }
})

popSongControler.addEventListener("ended", () => {
    if (randomState1 == false && repeatState1 == false) {
        nextPopSong();
    }
    else if (randomState1 == false && repeatState1 == true) {
        popSongControler.currentTime = 0;
        loadPopMusic(popSongsIndex);
        popSongControler.play();
    }
    else if (randomState1 == true && repeatState1 == false) {
        let randomIndex1 = Math.floor((Math.random() * popStyleSongs.length) + 1);

        do {
            randomIndex1 = Math.floor((Math.random() * popStyleSongs.length) + 1);
        }
        while (popSongsIndex == randomIndex1)

        popSongsIndex = randomIndex1;
        loadPopMusic(popSongsIndex);
        popSongControler.play();
    }
})

// set the songs in chill sont style

const chillSongsImg = document.querySelectorAll(".chillSongsImg");
const chillSongsNames = document.querySelectorAll(".chillSongsNames");
const chillSongsArtistsNames = document.querySelectorAll(".chillSongsArtistName");
const chillSongsbuttonPlayer = document.querySelectorAll(".chillSongsbuttonPlayer");
const chillSongControler = document.querySelector("#chillSongControler");
const chillSongControlerSrc = document.querySelector("#chillSongControlerSrc");
let chillRecently = 0
let chillName;
let chillImage;
let chillSong;
let chillArtistName;

for (let i = 0; i < chillSongsbuttonPlayer.length; i++) {
    chillSongsbuttonPlayer[i].addEventListener("click", () => {
        chillRecently++;
        songStylesIndexClear();
        for (let j = 0; j < chillStyleSongs.length; j++) {
            if (chillSongsbuttonPlayer[i].dataset.songname == chillStyleSongs[j].src) {
                chillName = chillStyleSongs[j].name;
                chillImage = "images/" + chillStyleSongs[j].img + ".jpg";
                chillSong = "tracks/chill/" + chillStyleSongs[j].src + ".mp3";
                chillArtistName = chillStyleSongs[j].artist;
                songName.innerHTML = chillStyleSongs[j].name;
                sourceSongImg.innerHTML = "images/" + chillStyleSongs[j].img + ".jpg" || ".png";
                sourceSong.innerHTML = "tracks/chill/" + chillStyleSongs[j].src;
                songArtistName.innerHTML = chillStyleSongs[j].artist;
                songImage.src = "images/" + chillStyleSongs[j].img + ".jpg";
                chillSongControler.src = "tracks/chill/" + chillStyleSongs[j].src + ".mp3";
                songImage.style.display = "block";
                MiddleSongName.innerHTML =chillStyleSongs[j].name;
                middlePlayerimageBoxImg.src = chillStyleSongs[j].img;
                middlePlayerimageBoxImg.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.play();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                recentlySongControler.pause();
                playlistsSongControler.pause();
                likedSongControler.pause();

                chillSongsIndex++;

            }

        }

        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";

        likeEmptyBtn.style.display = "block";
        likeFullBtn.style.display = "none";
        likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";

        songStatusChill = true;
        songStatusPop = false;

        if (chillRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(chillName);

            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";

            resentlyImage.src = chillImage;
            resentlyPlayImage.dataset.rchillsongname = chillSong;
            resentlyPlayImage.dataset.rchillnamesong = chillName;
            resentlyPlayImage.dataset.rchillsongartistname = chillArtistName;
            resentlyPlayImage.dataset.rchillsongimage = chillImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            chillRecently = 0;
        }

    })
}


searchItem.addEventListener("click", () => {
    var gozBazar2 = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazar2.length; i++) {
        gozBazar2[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazar2[i].dataset.rchillsongname;
            songName.innerHTML = gozBazar2[i].dataset.rchillnamesong;
            songImage.src = gozBazar2[i].dataset.rchillsongimage;
            songArtistName.innerHTML = gozBazar2[i].dataset.rchillsongartistname;
            MiddleSongName.innerHTML = gozBazar2[i].dataset.rchillnamesong;
            middlePlayerimageBoxImg.src = gozBazar2[i].dataset.rchillsongimage;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            playlistsSongControler.pause();
            likedSongControler.pause();

            unliked.style.display = "block";
            liked.style.display = "none";
            liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

            likeEmptyBtn.style.display = "block";
            likeFullBtn.style.display = "none";
            likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        
            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";

            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })
            play.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pause.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })

                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})


chillSongsNames[0].innerHTML = "Akdario";
chillSongsNames[1].innerHTML = "Alkebana";
chillSongsNames[2].innerHTML = "AllMyDays";
chillSongsNames[3].innerHTML = "Antigone";
chillSongsNames[4].innerHTML = "Ardour";
chillSongsNames[5].innerHTML = "CatchingEyes";
chillSongsNames[6].innerHTML = "DjPoolboi";
chillSongsNames[7].innerHTML = "FriendsInSecret";
chillSongsNames[8].innerHTML = "Gliding";
chillSongsNames[9].innerHTML = "HowManyTime";
chillSongsNames[10].innerHTML = "Idk";
chillSongsNames[11].innerHTML = "Mahal";
chillSongsNames[12].innerHTML = "NeverBefore";
chillSongsNames[13].innerHTML = "Oasis";
chillSongsNames[14].innerHTML = "Setareh";
chillSongsNames[15].innerHTML = "StillNoRain";
chillSongsNames[16].innerHTML = "TheLetter";
chillSongsNames[17].innerHTML = "TimeCapsul";
chillSongsNames[18].innerHTML = "TheLetter";
chillSongsNames[19].innerHTML = "NeverBefore";
chillSongsNames[20].innerHTML = "Poolboi";
chillSongsNames[21].innerHTML = "Alkebana";
chillSongsNames[22].innerHTML = "Alkebana";

chillSongsArtistsNames[0].innerHTML = "Dario lessing";
chillSongsArtistsNames[1].innerHTML = "Nora van elkon";
chillSongsArtistsNames[2].innerHTML = "Forester";
chillSongsArtistsNames[3].innerHTML = "Joris voorn";
chillSongsArtistsNames[4].innerHTML = "Into the ether";
chillSongsArtistsNames[5].innerHTML = "49th & Main";
chillSongsArtistsNames[6].innerHTML = "Dj poolboi";
chillSongsArtistsNames[7].innerHTML = "CRi";
chillSongsArtistsNames[8].innerHTML = "Man with roses";
chillSongsArtistsNames[9].innerHTML = "Joey pecoraro";
chillSongsArtistsNames[10].innerHTML = "SepientDream";
chillSongsArtistsNames[11].innerHTML = "Shadmehr aghili";
chillSongsArtistsNames[12].innerHTML = "Gareth emery";
chillSongsArtistsNames[13].innerHTML = "Attom";
chillSongsArtistsNames[14].innerHTML = "Shadmehr aghilie";
chillSongsArtistsNames[15].innerHTML = "Hosini";
chillSongsArtistsNames[16].innerHTML = "Chris Malinchak";
chillSongsArtistsNames[17].innerHTML = "Nick beman";
chillSongsArtistsNames[18].innerHTML = "Chris Malinchak";
chillSongsArtistsNames[19].innerHTML = "Gareth emery ";
chillSongsArtistsNames[20].innerHTML = "Dj poolboi";
chillSongsArtistsNames[21].innerHTML = "Nora van elken";

chillSongsImg[0].src = "images/channels4_profilechannels4_profilechannels4_profile.jpg";
chillSongsImg[1].src = "images/nora_van_elken_united_states_top_40_233.jpg";
chillSongsImg[2].src = "images/download (4).jpg";
chillSongsImg[3].src = "images/Joris-Voorn.jpg";
chillSongsImg[4].src = "images/Beeple-Into-The-Ether-Token-Art.jpg";
chillSongsImg[5].src = "images/ab6761610000e5eb4802b452348e2fc0c6d502f3.jpg";
chillSongsImg[6].src = "images/djPoolboi.jpg";
chillSongsImg[7].src = "images/cRi.jpg";
chillSongsImg[8].src = "images/download (5).jpg";
chillSongsImg[9].src = "images/joeyPecoraro.jpg";
chillSongsImg[10].src = "images/spientdr eam.jpg";
chillSongsImg[11].src = "images/shadmehr.jpg";
chillSongsImg[12].src = "images/garethEmery.jpg";
chillSongsImg[13].src = "images/attom.jpg";
chillSongsImg[14].src = "images/shadmehr.jpg";
chillSongsImg[15].src = "images/hosini.jpg";
chillSongsImg[16].src = "images/chrisMalinchak.jpg";
chillSongsImg[17].src = "images/nickBeman.jpg";
chillSongsImg[18].src = "images/chrisMalinchak.jpg";
chillSongsImg[19].src = "images/garethEmery.jpg";
chillSongsImg[20].src = "images/djPoolboi.jpg";
chillSongsImg[21].src = "images/nora_van_elken_united_states_top_40_233.jpg";
chillSongsImg[22].src = "images/nora_van_elken_united_states_top_40_233.jpg";

let chillStyleSongs = [
    {
        name: "Akdario",
        artist: "Dario lessing",
        img: "channels4_profilechannels4_profilechannels4_profile",
        src: "akdario"
    },
    {
        name: "Alkebana",
        artist: "Nora van elken",
        img: "nora_van_elken_united_states_top_40_233",
        src: "alkebana"
    },
    {
        name: "AllMyDays",
        artist: "Forester",
        img: "download (4)",
        src: "allMyDays"
    },
    {
        name: "Antigone",
        artist: "Joris voorn",
        img: "Joris-Voorn",
        src: "antigone"
    },
    {
        name: "Ardour",
        artist: "Into the ether",
        img: "Beeple-Into-The-Ether-Token-Art",
        src: "ardour"
    },
    {
        name: "CatchingEyes",
        artist: "49th and main",
        img: "ab6761610000e5eb4802b452348e2fc0c6d502f3",
        src: "catchingEyes"
    },
    {
        name: "DjPoolboi",
        artist: "Dj poolboi",
        img: "djPoolboi",
        src: "djPoolboi"
    },
    {
        name: "FriendsInSecret",
        artist: "CRi",
        img: "cRi",
        src: "friendsInSecret"
    },
    {
        name: "Gliding",
        artist: "Man with roses",
        img: "download (5)",
        src: "gliding"
    },
    {
        name: "HowManyTime",
        artist: "Joey pecoraro",
        img: "joeyPecoraro",
        src: "howManyTime"
    },
    {
        name: "Idk",
        artist: "SepientDream",
        img: "spientdr eam",
        src: "idk"
    },
    {
        name: "Mahal",
        artist: "Shadmehr aghilie",
        img: "shadmehr",
        src: "mahal"
    },
    {
        name: "NeverBefore",
        artist: "Gareth emery",
        img: "garethEmery",
        src: "neverBefore"
    },
    {
        name: "Oasis",
        artist: "Attom",
        img: "attom",
        src: "oasis"
    },
    {
        name: "Setareh",
        artist: "Shadmehr aghilie",
        img: "shadmehr",
        src: "setareh"
    },
    {
        name: "StillNoRain",
        artist: "hosini",
        img: "hosini",
        src: "stillNoRain"
    },
    {
        name: "TheLetter",
        artist: "Chris malinchak",
        img: "chrisMalinchak",
        src: "theLetter"
    },
    {
        name: "timeCapsul",
        artist: "Nick Beman",
        img: "nickBeman",
        src: "timeCapsul"
    },
    {
        name: "TheLetter",
        artist: "Chris malinchak",
        img: "chrisMalinchak",
        src: "weCanReachTheStars"
    },
    {
        name: "NeverBefore",
        artist: "Gareth emery",
        img: "garethEmery",
        src: "rose"
    },
    {
        name: "DjPoolboi",
        artist: "Dj Poolboi",
        img: "djPoolboi",
        src: "lightSwitch"
    },
    {
        name: "Alkebana",
        artist: "Nora van elken",
        img: "nora_van_elken_united_states_top_40_233",
        src: "lightSwitch"
    },
    {
        name: "NeverBefore",
        artist: "Gareth emery",
        img: "garethEmery",
        src: "christmas"
    },
    {
        name: "NeverBefore",
        artist: "Gareth emery",
        img: "garethEmery",
        src: "rose"
    },

]

const chillStyleBtnPlayer = document.querySelector("#chillStyleBtnPlayer")

chillStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadchillMusic(chillSongsIndex);
})

//load chill songs

function loadchillMusic(indexNumber) {
    songName.innerHTML = chillStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = chillStyleSongs[indexNumber - 1].artist;
    songImage.src = "images/" + chillStyleSongs[indexNumber - 1].img + ".jpg";
    chillSongControler.src = "tracks/chill/" + chillStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = chillStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = chillStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.play();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.pause()
    calmnessSongControler.pause();
    classicSongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    recentlySongControler.pause();
    canadaSongControler.pause();
    playlistsSongControler.pause();
    likedSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = true;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;

}

playBtn.addEventListener("click", () => {
    chillSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    chillSongControler.pause();
})
playSongBtn.addEventListener("click", () => {
    chillSongControler.play();
})
pauseSongBtn.addEventListener("click", () => {
    chillSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusChill == true) {
        nextChillSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusChill == true) {
        beforeChillSong();
    }
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusChill == true) {
        nextChillSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusChill == true) {
        beforeChillSong();
    }
})

//click next song button developing

function nextChillSong() {
    chillSongsIndex++;
    chillSongsIndex > chillStyleSongs.length ? chillSongsIndex = 1 : chillStyleSongs = chillStyleSongs;

    loadchillMusic(chillSongsIndex);

}

//click before song button developing

function beforeChillSong() {
    chillSongsIndex--;
    chillSongsIndex < 1 ? chillSongsIndex = chillStyleSongs.length : chillSongsIndex = chillSongsIndex;

    loadchillMusic(chillSongsIndex);

}

//updata progressBar with songTime

chillSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";

    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    chillSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = chillSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = chillSongControler.duration;

        chillSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = popSongControler.duration;
    
        chillSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState2 = false;
let randomState2 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState2 == false) {
        repeatState2 = true;
    }
    else {
        repeatState2 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState2 == false) {
        randomState2 = true;
    }
    else {
        randomState2 = false;
    }
})
songRepeatBtn.addEventListener("click", () => {
    if (repeatState2 == false) {
        repeatState2 = true;
    }
    else {
        repeatState2 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState2 == false) {
        randomState2 = true;
    }
    else {
        randomState2 = false;
    }
})

chillSongControler.addEventListener("ended", () => {
    if (randomState2 == false && repeatState2 == false) {
        nextChillSong();
    }
    else if (randomState2 == false && repeatState2 == true) {
        chillSongControler.currentTime = 0;
        loadchillMusic(chillSongsIndex);
        chillSongControler.play();
    }
    else if (randomState2 == true && repeatState2 == false) {
        let randomIndex2 = Math.floor((Math.random() * chillStyleSongs.length) + 1);

        do {
            randomIndex2 = Math.floor((Math.random() * chillStyleSongs.length) + 1);
        }
        while (chillSongsIndex == randomIndex2)

        chillSongsIndex = randomIndex2;
        loadchillMusic(chillSongsIndex);
        chillSongControler.play();
    }
})

// set the songs in focus sont style

const focusSongsImg = document.querySelectorAll(".focusSongsImg");
const focusSongsNames = document.querySelectorAll(".focusSongsNames");
const focusSongsArtistsNames = document.querySelectorAll(".focusSongsArtistName");
const focusSongsbuttonPlayer = document.querySelectorAll(".focusSongsbuttonPlayer");
const focusSongControler = document.querySelector("#focusSongControler");
const focusSongControlerSrc = document.querySelector("#focusSongControlerSrc");
let focusRecently = 0;
let focusName;
let focusImage;
let focusSong;
let focusArtistName;
for (let i = 0; i < focusSongsbuttonPlayer.length; i++) {
    focusSongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        focusRecently++;
        for (let j = 0; j < focusStyleSongs.length; j++) {
            if (focusSongsbuttonPlayer[i].dataset.songname == focusStyleSongs[j].src) {
                focusName = focusStyleSongs[j].name;
                focusImage = "images/" + focusStyleSongs[j].img + ".jpg";
                focusSong = "tracks/Focus/" + focusStyleSongs[j].src + ".mp3";
                focusArtistName = focusStyleSongs[j].artist;
                songName.innerHTML = focusStyleSongs[j].name;
                sourceSongImg.innerHTML = focusStyleSongs[j].img;
                sourceSong.innerHTML = "tracks/Foucs/" + focusStyleSongs[j].src;
                songArtistName.innerHTML = focusStyleSongs[j].artist;
                songImage.src = focusStyleSongs[j].img;
                focusSongControler.src = "tracks/Focus/" + focusStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = focusStyleSongs[i].name;
                middlePlayerimageBoxImg.src = "images/" + focusStyleSongs[i].img + ".jpg";
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                chillSongControler.pause();
                focusSongControler.play();
                popSongControler.pause();
                studySongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                calmnessSongControler.pause();
                animeSongControler.pause();
                classicSongControler.pause();
                likedSongControler.pause();

                    unliked.style.display = "block";
                    liked.style.display = "none";
                    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
                russianSongControler.pause();

                
                    likeEmptyBtn.style.display = "block";
                    likeFullBtn.style.display = "none";
                    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

                heavySongControler.pause();
                recentlySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();
                likedSongControler.pause();

                focusSongsIndex = i + 1;
            }

        }
        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";

        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";

        songStatusFocus = true;

        if (focusRecently >= 2) {

            const resentlyUl = document.querySelector("#rsList");
            const resentlyLi = document.createElement("li");
            const resentlyDiv = document.createElement("div");
            const resentlyDivImage = document.createElement("div");
            const resentlyPara = document.createElement("p");
            const resentlyImage = document.createElement("img");
            const resentlyPlayImage = document.createElement("img");
            const resentlySongName = document.createElement("h3");
            const resentlyParaText = document.createTextNode("Lt");
            const resentlySongNameText = document.createTextNode(focusName);


            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = focusImage;


            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            focusRecently = 0;
        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarFocus = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarFocus.length; i++) {
        gozBazarFocus[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarFocus[i].dataset.rfocussongname;
            songName.innerHTML = gozBazarFocus[i].dataset.rfocusnamesong;
            songImage.src = gozBazarFocus[i].dataset.rfocussongimage
            songArtistName.innerHTML = gozBazarFocus[i].dataset.rfocussongartistname;
            MiddleSongName.innerHTML = gozBazarFocus[i].dataset.rfocusnamesong;
            middlePlayerimageBoxImg.src = "images/" + gozBazarFocus[i].dataset.rfocussongimage + ".jpg";
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            likedSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
            playlistsSongControler.pause();

            likeEmptyBtn.style.display = "block";
            likeFullBtn.style.display = "none";
            likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            playSongBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            
            pauseSongBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })
            

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

focusSongsNames[0].innerHTML = "akdario";
focusSongsNames[1].innerHTML = "allHumanBeings";
focusSongsNames[2].innerHTML = "byThisRiver";
focusSongsNames[3].innerHTML = "DonaNobi";
focusSongsNames[4].innerHTML = "DueTramonti";
focusSongsNames[5].innerHTML = "etudesNo";
focusSongsNames[6].innerHTML = "fromHome";
focusSongsNames[7].innerHTML = "Ghosts";
focusSongsNames[8].innerHTML = "gliding";
focusSongsNames[9].innerHTML = "parliamentsOfOwls";
focusSongsNames[10].innerHTML = "rolling";
focusSongsNames[11].innerHTML = "roscian";
focusSongsNames[12].innerHTML = "slowMomentSand";
focusSongsNames[13].innerHTML = "theLastMen";
focusSongsNames[14].innerHTML = "there'sNoReassenToCry";
focusSongsNames[15].innerHTML = "waltzInB";
focusSongsNames[16].innerHTML = "roscian";
focusSongsNames[17].innerHTML = "roscian";
focusSongsNames[18].innerHTML = "parliamentsOfOwls";
focusSongsNames[19].innerHTML = "slowMomentSand";
focusSongsNames[20].innerHTML = "etudesNo";
focusSongsNames[21].innerHTML = "akdario";

focusSongsArtistsNames[0].innerHTML = "Sven helbig";
focusSongsArtistsNames[1].innerHTML = "Max richter";
focusSongsArtistsNames[2].innerHTML = "Brain eno";
focusSongsArtistsNames[3].innerHTML = "Max richter";
focusSongsArtistsNames[4].innerHTML = "Ludovico einaudi";
focusSongsArtistsNames[5].innerHTML = "Philip glass";
focusSongsArtistsNames[6].innerHTML = "Olafur arnalds";
focusSongsArtistsNames[7].innerHTML = "Stephan moccio";
focusSongsArtistsNames[8].innerHTML = "Johann johansso";
focusSongsArtistsNames[9].innerHTML = "Agnes obel";
focusSongsArtistsNames[10].innerHTML = "Roedelius";
focusSongsArtistsNames[11].innerHTML = "Agnes obel";
focusSongsArtistsNames[12].innerHTML = "Roger eno";
focusSongsArtistsNames[13].innerHTML = "Johann johansso";
focusSongsArtistsNames[14].innerHTML = "Andrija pavlovic";
focusSongsArtistsNames[15].innerHTML = "chad lawson";
focusSongsArtistsNames[16].innerHTML = "Olafur arnalds";
focusSongsArtistsNames[17].innerHTML = "Olafur arnalds";
focusSongsArtistsNames[18].innerHTML = "Roedelius";
focusSongsArtistsNames[19].innerHTML = "Stephan moccio";
focusSongsArtistsNames[20].innerHTML = "Agnes obel";
focusSongsArtistsNames[21].innerHTML = "Roedelius";

focusSongsImg[0].src = "images/channels4_profilechannels4_profilechannels4_profile.jpg";
focusSongsImg[1].src = "images/allHumanBeings.jpg";
focusSongsImg[2].src = "images/byThisRiverSong.jpg";
focusSongsImg[3].src = "images/waltzInB.jpg";
focusSongsImg[4].src = "images/dueTramonti.jpg";
focusSongsImg[5].src = "images/etudeNo.jpg";
focusSongsImg[6].src = "images/fromHome.jpg";
focusSongsImg[7].src = "images/ghost.jpg";
focusSongsImg[8].src = "images/gliding.jpg";
focusSongsImg[9].src = "images/parliamentsOfOwls.jpg";
focusSongsImg[10].src = "images/rolling.jpg";
focusSongsImg[11].src = "images/roscian.jpg";
focusSongsImg[12].src = "images/slowMomentSand.jpg";
focusSongsImg[13].src = "images/theLastMen.jpg";
focusSongsImg[14].src = "images/there'sNoReassenToCry.jpg";
focusSongsImg[15].src = "images/waltzInB.jpg";
focusSongsImg[16].src = "images/roscian.jpg";
focusSongsImg[17].src = "images/roscian.jpg";
focusSongsImg[18].src = "images/parliamentsOfOwls.jpg";
focusSongsImg[19].src = "images/slowMomentSand.jpg";
focusSongsImg[20].src = "images/waltzInB.jpg";
focusSongsImg[21].src = "images/channels4_profilechannels4_profilechannels4_profile.jpg";

let focusStyleSongs = [
    {
        name: "Akdario",
        artist: "Am abend",
        img: "images/channels4_profilechannels4_profilechannels4_profile.jpg",
        src: "akdario"
    },
    {
        name: "allHumanBeings",
        artist: "allHumanBeings",
        img: "images/allHumanBeings.jpg",
        src: "allHumanBeings"
    },
    {
        name: "byThisRiver",
        artist: "byThisRiverSong",
        img: "images/byThisRiverSong.jpg",
        src: "byThisRiver"
    },
    {
        name: "DonaNobi",
        artist: "Joris voorn",
        img: "images/waltzInB.jpg",
        src: "DonaNobi"
    },
    {
        name: "DueTramonti",
        artist: "Into the ether",
        img: "images/dueTramonti.jpg",
        src: "DueTramonti"
    },
    {
        name: "etudesNo",
        artist: "49th and main",
        img: "images/etudeNo.jpg",
        src: "etudesNo"
    },
    {
        name: "fromHome",
        artist: "Dj poolboi",
        img: "images/fromHome.jpg",
        src: "fromHome"
    },
    {
        name: "Ghosts",
        artist: "CRi",
        img: "images/ghost.jpg",
        src: "Ghosts"
    },
    {
        name: "gliding",
        artist: "Man with roses",
        img: "images/gliding.jpg",
        src: "gliding"
    },
    {
        name: "parliamentsOfOwls",
        artist: "Joey pecoraro",
        img: "images/parliamentsOfOwls.jpg",
        src: "parliamentsOfOwls"
    },
    {
        name: "rolling",
        artist: "SepientDream",
        img: "images/rolling.jpg",
        src: "rolling"
    },
    {
        name: "roscian",
        artist: "Shadmehr aghilie",
        img: "images/roscian.jpg",
        src: "roscian"
    },
    {
        name: "slowMomentSand",
        artist: "Gareth emery",
        img: "images/slowMomentSand.jpg",
        src: "slowMomentSand"
    },
    {
        name: "theLastMen",
        artist: "Attom",
        img: "images/theLastMen.jpg",
        src: "theLastMen"
    },
    {
        name: "there'sNoReassenToCry",
        artist: "Shadmehr aghilie",
        img: "images/there'sNoReassenToCry.jpg",
        src: "there'sNoReassenToCry"
    },
    {
        name: "waltzInB",
        artist: "hosini",
        img: "images/waltzInB.jpg",
        src: "waltzInB"
    },
    {
        name: "theLastMen",
        artist: "Attom",
        img: "images/theLastMen.jpg",
        src: "theLastMen"
    },
    {
        name: "theLastMen",
        artist: "Attom",
        img: "images/theLastMen.jpg",
        src: "theLastMen"
    },
    {
        name: "slowMomentSand",
        artist: "Gareth emery",
        img: "images/slowMomentSand.jpg",
        src: "slowMomentSand"
    },
    {
        name: "waltzInB",
        artist: "hosini",
        img: "images/waltzInB.jpg",
        src: "waltzInB"
    },
    {
        name: "waltzInB",
        artist: "hosini",
        img: "images/waltzInB.jpg",
        src: "waltzInB"
    },
    {
        name: "slowMomentSand",
        artist: "Gareth emery",
        img: "images/slowMomentSand.jpg",
        src: "slowMomentSand"
    },
]

const focusStyleBtnPlayer = document.querySelector("#focusStyleBtnPlayer")

focusStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadfocusMusic(focusSongsIndex);
})

//load focus songs

let songStatusFocus;

function loadfocusMusic(indexNumber) {
    songName.innerHTML = focusStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = focusStyleSongs[indexNumber - 1].artist;
    songImage.src = focusStyleSongs[indexNumber - 1].img;
    focusSongControler.src = "tracks/Focus/" + focusStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = focusStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = focusStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.play();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.pause();
    recentlySongControler.pause();
    calmnessSongControler.pause();
    classicSongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    canadaSongControler.pause();
    playlistsSongControler.pause();
    likedSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    songStatusFocus = true;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;

}

playBtn.addEventListener("click", () => {
    focusSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    focusSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusFocus == true) {
        nextFocusSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusFocus == true) {
        beforeFocusSong();
    }
})

playSongBtn.addEventListener("click", () => {
    focusSongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    focusSongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusFocus == true) {
        nextFocusSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusFocus == true) {
        beforeFocusSong();
    }
})

//click next song button developing

function nextFocusSong() {
    focusSongsIndex++;
    focusSongsIndex > focusStyleSongs.length ? focusSongsIndex = 1 : focusStyleSongs = focusStyleSongs;

    loadfocusMusic(focusSongsIndex);

}

//click before song button developing

function beforeFocusSong() {
    focusSongsIndex--;
    focusSongsIndex < 1 ? focusSongsIndex = focusStyleSongs.length : focusSongsIndex = focusSongsIndex;

    loadfocusMusic(focusSongsIndex);

}

//updata progressBar with songTime

focusSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";

    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    focusSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = focusSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = focusSongControler.duration;

        focusSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = focusSongControler.duration;
    
        focusSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState3 = false;
let randomState3 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState3 == false) {
        repeatState3 = true;
    }
    else {
        repeatState3 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState3 == false) {
        randomState3 = true;
    }
    else {
        randomState3 = false;
    }
})
songRepeatBtn.addEventListener("click", () => {
    if (repeatState3 == false) {
        repeatState3 = true;
    }
    else {
        repeatState3 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState3 == false) {
        randomState3 = true;
    }
    else {
        randomState3 = false;
    }
})

focusSongControler.addEventListener("ended", () => {
    if (randomState3 == false && repeatState3 == false) {
        nextFocusSong();
    }
    else if (randomState3 == false && repeatState3 == true) {
        focusSongControler.currentTime = 0;
        loadfocusMusic(focusSongsIndex);
        focusSongControler.play();
    }
    else if (randomState3 == true && repeatState3 == false) {
        let randomIndex3 = Math.floor((Math.random() * focusStyleSongs.length) + 1);

        do {
            randomIndex3 = Math.floor((Math.random() * focusStyleSongs.length) + 1);
        }
        while (focusSongsIndex == randomIndex3)

        focusSongsIndex = randomIndex3;
        loadfocusMusic(focusSongsIndex);
        focusSongControler.play();
    }
})

// set the songs in study sont style

const studySongsImg = document.querySelectorAll(".studySongsImg");
const studySongsNames = document.querySelectorAll(".studySongsNames");
const studySongsArtistsNames = document.querySelectorAll(".studySongsArtistName");
const studySongsbuttonPlayer = document.querySelectorAll(".studySongsbuttonPlayer");
const studySongControler = document.querySelector("#studySongControler");
const studySongControlerSrc = document.querySelector("#studySongControlerSrc");
let studyRecently = 0;
let studyName;
let studyImage;
let studySong;
let studyArtistName;
for (let i = 0; i < studySongsbuttonPlayer.length; i++) {
    studySongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        studyRecently++;
        for (let j = 0; j < studyStyleSongs.length; j++) {
            if (studySongsbuttonPlayer[i].dataset.songname == studyStyleSongs[j].src) {
                studyName = studyStyleSongs[j].name;
                studyImage = "images/" + studyStyleSongs[j].img + ".jpg";
                studySong = "tracks/study/" + studyStyleSongs[j].src + ".mp3";
                studyArtistName = studyStyleSongs[j].artist;
                songName.innerHTML = studyStyleSongs[j].name;
                sourceSongImg.innerHTML = studyStyleSongs[j].img;
                sourceSong.innerHTML = "tracks/study/" + studyStyleSongs[j].src;
                songArtistName.innerHTML = studyStyleSongs[j].artist;
                songImage.src = studyStyleSongs[j].img;
                studySongControler.src = "tracks/study/" + studyStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = studyStyleSongs[i].name;
                middlePlayerimageBoxImg.src = studyStyleSongs[indexNumber - 1].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.play();
                gameSongControler.pause();
                recentlySongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();
                likedSongControler.pause();
                studySongsIndex = i + 1;
            }
        }
        unliked.style.display = "block";
        liked.style.display = "none";
        liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        likeEmptyBtn.style.display = "block";
        likeFullBtn.style.display = "none";
        likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";
        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";
        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";
        songStatusClassic = true;

        if (studyRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(studyName);

            resentlyPlayImage.dataset.rstudysongname = studySong;
            resentlyPlayImage.dataset.rstudynamesong = studyName;
            resentlyPlayImage.dataset.rstudysongartistname = studyArtistName;
            resentlyPlayImage.dataset.rstudysongimage = studyImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = studyImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            studyRecently = 0;
        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarStudy = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarStudy.length; i++) {
        gozBazarStudy[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarStudy[i].dataset.rstudysongname;
            songName.innerHTML = gozBazarStudy[i].dataset.rstudynamesong;
            songImage.src = gozBazarStudy[i].dataset.rstudysongimage
            songArtistName.innerHTML = gozBazarStudy[i].dataset.rstudysongartistname;
            MiddleSongName.innerHTML = gozBazarStudy[i].name;
            middlePlayerimageBoxImg.src = gozBazarStudy[i].img;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            playlistsSongControler.pause();
            likedSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";


            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })
            playSongBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            
            pauseSongBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
})
            });

        })
    }
})

studySongsNames[0].innerHTML = "20Duty";
studySongsNames[1].innerHTML = "Buffet";
studySongsNames[2].innerHTML = "Crackling";
studySongsNames[3].innerHTML = "Duendy";
studySongsNames[4].innerHTML = "InTheTrees";
studySongsNames[5].innerHTML = "Lost";
studySongsNames[6].innerHTML = "ManWithRosses";
studySongsNames[7].innerHTML = "Sabluem";
studySongsNames[8].innerHTML = "Tamiami";
studySongsNames[9].innerHTML = "TheRoadLess";
studySongsNames[10].innerHTML = "ToghetherWeSuccesd";
studySongsNames[11].innerHTML = "Whitby";
studySongsNames[12].innerHTML = "Obra Dos";
studySongsNames[13].innerHTML = "Driving";
studySongsNames[14].innerHTML = "Circle of Fear";
studySongsNames[15].innerHTML = "Long May It Sustain";
studySongsNames[16].innerHTML = "ToghetherWeSuccesd";
studySongsNames[17].innerHTML = "Lost";
studySongsNames[18].innerHTML = "InTheTrees";
studySongsNames[19].innerHTML = "ToghetherWeSuccesd";
studySongsNames[20].innerHTML = "Lost";
studySongsNames[21].innerHTML = "ToghetherWeSuccesd";

studySongsArtistsNames[0].innerHTML = "Jacques ferrandi";
studySongsArtistsNames[1].innerHTML = "Alicia premiere";
studySongsArtistsNames[2].innerHTML = "Sean drake";
studySongsArtistsNames[3].innerHTML = "Amity fall";
studySongsArtistsNames[4].innerHTML = "saddest girl in the world";
studySongsArtistsNames[5].innerHTML = "Annelie";
studySongsArtistsNames[6].innerHTML = "Aeyes libe";
studySongsArtistsNames[7].innerHTML = "Johann kurzweil";
studySongsArtistsNames[8].innerHTML = "Toshi sakura";
studySongsArtistsNames[9].innerHTML = "Giuseppina bianchi";
studySongsArtistsNames[10].innerHTML = "Sylvia bakett";
studySongsArtistsNames[11].innerHTML = "Stephan moccio";
studySongsArtistsNames[12].innerHTML = "Helado negro";
studySongsArtistsNames[13].innerHTML = "Grouper";
studySongsArtistsNames[14].innerHTML = "Mark pritchard";
studySongsArtistsNames[15].innerHTML = "A winged victory";
studySongsArtistsNames[16].innerHTML = "Sylvia bakett";
studySongsArtistsNames[17].innerHTML = "Sylvia bakett";
studySongsArtistsNames[18].innerHTML = "saddest girl in the world";
studySongsArtistsNames[19].innerHTML = "Sylvia bakett";
studySongsArtistsNames[20].innerHTML = "Annelie";
studySongsArtistsNames[21].innerHTML = "Sylvia bakett";

studySongsImg[0].src = "images/20Duty.jpg";
studySongsImg[1].src = "images/buffet.jpg";
studySongsImg[2].src = "images/crackling.jpg";
studySongsImg[3].src = "images/Duendy.jpg";
studySongsImg[4].src = "images/inTheTrees.jpg";
studySongsImg[5].src = "images/Lost.png";
studySongsImg[6].src = "images//Man With Rosses.jpg";
studySongsImg[7].src = "images/sabluem.jpg";
studySongsImg[8].src = "images/tamiami.jpg";
studySongsImg[9].src = "images/The RoadLess.jpg";
studySongsImg[10].src = "images/To ghether We Succesd.jpg";
studySongsImg[11].src = "images/Whitby.jpg";
studySongsImg[12].src = "images/Obra Dos.jpg";
studySongsImg[13].src = "images/Driving.jpg";
studySongsImg[14].src = "images/Circle of Fear.jpg";
studySongsImg[15].src = "images/Long May It Sustain.jpg";
studySongsImg[16].src = "images/To ghether We Succesd.jpg";
studySongsImg[17].src = "images/Lost.png";
studySongsImg[18].src = "images/inTheTrees.jpg";
studySongsImg[19].src = "images/To ghether We Succesd.jpg";
studySongsImg[20].src = "images/Lost.png";
studySongsImg[21].src = "images/To ghether We Succesd.jpg";

let studyStyleSongs = [
    {
        name: "20Duty",
        artist: "Jacques ferrandi",
        img: "images/20Duty.jpg",
        src: "20Duty"
    },
    {
        name: "buffet",
        artist: "Alicia premiere",
        img: "images/buffet.jpg",
        src: "buffet"
    },
    {
        name: "crackling",
        artist: "Sean drake",
        img: "images/crackling.jpg",
        src: "crackling"
    },
    {
        name: "Duendy",
        artist: "Amity fall",
        img: "images/Duendy.jpg",
        src: "Duendy"
    },
    {
        name: "inTheTrees",
        artist: "saddest girl in the world",
        img: "images/inTheTrees.jpg",
        src: "inTheTrees"
    },
    {
        name: "Lost",
        artist: "Annelie",
        img: "images/Lost.png",
        src: "Lost"
    },
    {
        name: "Man With Rosses",
        artist: "images/Man With Rosses.jpg",
        img: "djPoolboi",
        src: "ManWithRosses"
    },
    {
        name: "Sabluem",
        artist: "images/Sabluem.jpg",
        img: "cRi",
        src: "sabluem"
    },
    {
        name: "Tamiami",
        artist: "Toshi sakura",
        img: "images/Tamiami.jpg",
        src: "tamiami"
    },
    {
        name: "The RoadLess",
        artist: "Giuseppina bianchi",
        img: "images/The RoadLess.jpg",
        src: "theRoadLess"
    },
    {
        name: "To ghether We Succesd",
        artist: "Sylvia bakett",
        img: "images/To ghether We Succesd.jpg",
        src: "toghetherWeSuccesd"
    },
    {
        name: "Whitby",
        artist: "Stephan moccio",
        img: "images/Whitby.jpg",
        src: "whitby"
    },
    {
        name: "Obra Dos",
        artist: "Helado negro",
        img: "images/Obra Dos.jpg",
        src: "14 Obra Dos"
    },
    {
        name: "Driving",
        artist: "Grouper",
        img: "images/Driving.jpg",
        src: "18 Driving"
    },
    {
        name: "Circle of Fear",
        artist: "Mark pritchard",
        img: "imagse/Circle of Fear.jpg",
        src: "19 Circle of Fear"
    },
    {
        name: "Long May It Sustain",
        artist: "A winged victory",
        img: "images/Long May It Sustain.jpg",
        src: "20 Long May It Sustain"
    },
    {
        name: "To ghether We Succesd",
        artist: "Sylvia bakett",
        img: "images/To ghether We Succesd.jpg",
        src: "toghetherWeSuccesd"
    },
    {
        name: "Lost",
        artist: "Annelie",
        img: "images/Lost.png",
        src: "Lost"
    },
    {
        name: "In The Trees",
        artist: "saddest girl in the world",
        img: "images/inTheTrees.jpg",
        src: "inTheTrees"
    },
    {
        name: "To ghether We Succesd",
        artist: "Sylvia bakett",
        img: "images/To ghether We Succesd.jpg",
        src: "toghetherWeSuccesd"
    },
    {
        name: "Lost",
        artist: "Annelie",
        img: "images/inTheTrees.png",
        src: "Lost"
    },
    {
        name: "To ghether we succesd",
        artist: "Sylvia bakett",
        img: "images/To ghether We Succesd.jpg",
        src: "toghetherWeSuccesd"
    },
]

const studyStyleBtnPlayer = document.querySelector("#studyStyleBtnPlayer")


studyStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadstudyMusic(studySongsIndex);
})

//load study songs

let songStatusStudy;

function loadstudyMusic(indexNumber) {
    songName.innerHTML = studyStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = studyStyleSongs[indexNumber - 1].artist;
    songImage.src = studyStyleSongs[indexNumber - 1].img;
    studySongControler.src = "tracks/study/" + studyStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = studyStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = studyStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.play();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.pause()
    calmnessSongControler.pause();
    classicSongControler.pause();
    recentlySongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    canadaSongControler.pause();
    playlistsSongControler.pause();
    likedSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = true;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;

}

playBtn.addEventListener("click", () => {
    studySongControler.play();
})
pauseBtn.addEventListener("click", () => {
    studySongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusStudy == true) {
        nextStudySong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusStudy == true) {
        beforeStudySong();
    }
})

playSongBtn.addEventListener("click", () => {
    popSongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    popSongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusPop == true) {
        nextPopSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusPop == true) {
        beforePopSong();
    }
})

//click next song button developing

function nextStudySong() {
    studySongsIndex++;
    studySongsIndex > studyStyleSongs.length ? studySongsIndex = 1 : studyStyleSongs = studyStyleSongs;

    loadstudyMusic(studySongsIndex);

}

//click before song button developing

function beforeStudySong() {
    studySongsIndex--;
    studySongsIndex < 1 ? studySongsIndex = studyStyleSongs.length : studySongsIndex = studySongsIndex;

    loadstudyMusic(studySongsIndex);

}

//updata progressBar with songTime

studySongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";


    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    studySongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = studySongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = studySongControler.duration;

        studySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = studySongControler.duration;
    
        studySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState4 = false;
let randomState4 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState4 == false) {
        repeatState4 = true;
    }
    else {
        repeatState4 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState4 == false) {
        randomState4 = true;
    }
    else {
        randomState4 = false;
    }
})
songRepeatBtn.addEventListener("click", () => {
    if (repeatState4 == false) {
        repeatState4 = true;
    }
    else {
        repeatState4 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState4 == false) {
        randomState4 = true;
    }
    else {
        randomState4 = false;
    }
})

studySongControler.addEventListener("ended", () => {
    if (randomState4 == false && repeatState4 == false) {
        nextStudySong();
    }
    else if (randomState4 == false && repeatState4 == true) {
        studySongControler.currentTime = 0;
        loadstudyMusic(studySongsIndex);
        studySongControler.play();
    }
    else if (randomState4 == true && repeatState4 == false) {
        let randomIndex4 = Math.floor((Math.random() * studyStyleSongs.length) + 1);

        do {
            randomIndex4 = Math.floor((Math.random() * studyStyleSongs.length) + 1);
        }
        while (studySongsIndex == randomIndex4)

        studySongsIndex = randomIndex4;
        loadstudyMusic(studySongsIndex);
        studySongControler.play();
    }
})

// set the songs in game sont style

const gameSongsImg = document.querySelectorAll(".gameSongsImg");
const gameSongsNames = document.querySelectorAll(".gameSongsNames");
const gameSongsArtistsNames = document.querySelectorAll(".gameSongsArtistName");
const gameSongsbuttonPlayer = document.querySelectorAll(".gameSongsbuttonPlayer");
const gameSongControler = document.querySelector("#gameSongControler");
const gameSongControlerSrc = document.querySelector("#gameSongControlerSrc");
let gameRecently = 0;
let gameName;
let gameImage;
let gameSong;
let gameArtistName;

for (let i = 0; i < gameSongsbuttonPlayer.length; i++) {
    gameSongsbuttonPlayer[i].addEventListener("click", () => {
        gameRecently++;
        songStylesIndexClear();
        for (let j = 0; j < gameStyleSongs.length; j++) {
            if (gameSongsbuttonPlayer[i].dataset.songname == gameStyleSongs[j].src) {
                gameName = gameStyleSongs[j].name;
                gameImage = "images/" + gameStyleSongs[j].img + ".jpg";
                gameSong = "tracks/game/" + gameStyleSongs[j].src + ".mp3";
                gameArtistName = gameStyleSongs[j].artist;
                songName.innerHTML = gameStyleSongs[j].name;
                sourceSongImg.innerHTML = gameStyleSongs[j].img;
                songArtistName.innerHTML = gameStyleSongs[j].artist;
                sourceSong.innerHTML = "tracks/game/" + gameStyleSongs[j].src;
                songImage.src = gameStyleSongs[j].img;
                gameSongControler.src = "tracks/game/" + gameStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = gameStyleSongs[i].name;
                middlePlayerimageBoxImg.src = gameStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.play();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                recentlySongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                likedSongControler.pause();
                playlistsSongControler.pause();

                    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";


                gameSongsIndex = i + 1;
            }

        }

        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";

        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";

        songStatusGame = true;

        if (gameRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(gameName);

            resentlyPlayImage.dataset.rgamesongname = gameSong;
            resentlyPlayImage.dataset.rgamenamesong = gameName;
            resentlyPlayImage.dataset.rgamesongartistname = gameArtistName;
            resentlyPlayImage.dataset.rgamesongimage = gameImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = gameImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            gameRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarGame = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarGame.length; i++) {
        gozBazarGame[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarGame[i].dataset.rgamesongname;
            songName.innerHTML = gozBazarGame[i].dataset.rgamenamesong;
            songImage.src = gozBazarGame[i].dataset.rgamesongimage
            songArtistName.innerHTML = gozBazarGame[i].dataset.rgamesongartistname;
            MiddleSongName.innerHTML = gozBazarGame[i].dataset.name;
            middlePlayerimageBoxImg.src = gozBazarGame[i].dataset.img;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            playlistsSongControler.pause();
            likedSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";


            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";
            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })
            play.addEventListener("click", () => {
                recentlySongControler.play();
            })
            
            pause.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";


                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

gameSongsNames[0].innerHTML = "An old game";
gameSongsNames[1].innerHTML = "Balcanistic";
gameSongsNames[2].innerHTML = "Become Human";
gameSongsNames[3].innerHTML = "Breath of the wind";
gameSongsNames[4].innerHTML = "Chll of light";
gameSongsNames[5].innerHTML = "Hollow knight";
gameSongsNames[6].innerHTML = "Ezio's family";
gameSongsNames[7].innerHTML = "Ghost in the shell";
gameSongsNames[8].innerHTML = "Hollow knight";
gameSongsNames[9].innerHTML = "Lahayahat";
gameSongsNames[10].innerHTML = "Man With Rosses";
gameSongsNames[11].innerHTML = "Melodaio";
gameSongsNames[12].innerHTML = "One";
gameSongsNames[13].innerHTML = "Seni";
gameSongsNames[14].innerHTML = "Why do we fall";
gameSongsNames[15].innerHTML = "Lahayahat";
gameSongsNames[16].innerHTML = "Ezios family";
gameSongsNames[17].innerHTML = "One";
gameSongsNames[18].innerHTML = "Lahayahat";
gameSongsNames[19].innerHTML = "Ezios family";
gameSongsNames[20].innerHTML = "Lahayahat";

gameSongsArtistsNames[0].innerHTML = "Moon beach";
gameSongsArtistsNames[1].innerHTML = "Dj kantick";
gameSongsArtistsNames[2].innerHTML = "Kara main";
gameSongsArtistsNames[3].innerHTML = "Epilogue";
gameSongsArtistsNames[4].innerHTML = "COL";
gameSongsArtistsNames[5].innerHTML = "HK";
gameSongsArtistsNames[6].innerHTML = "Jesper kyd";
gameSongsArtistsNames[7].innerHTML = "Millennium";
gameSongsArtistsNames[8].innerHTML = "HK";
gameSongsArtistsNames[9].innerHTML = "Kantik";
gameSongsArtistsNames[10].innerHTML = "copilot";
gameSongsArtistsNames[11].innerHTML = "Chasm";
gameSongsArtistsNames[12].innerHTML = "Bear mcCreary";
gameSongsArtistsNames[13].innerHTML = "Dj kantick";
gameSongsArtistsNames[14].innerHTML = "Hans zimmer";
gameSongsArtistsNames[15].innerHTML = "Kantik";
gameSongsArtistsNames[16].innerHTML = "Jesper kyd";
gameSongsArtistsNames[17].innerHTML = "Bear mcCreary";
gameSongsArtistsNames[18].innerHTML = "Kantik";
gameSongsArtistsNames[19].innerHTML = "Jesper kyd";
gameSongsArtistsNames[20].innerHTML = "Kantik";

gameSongsImg[0].src = "images/An old game.png";
gameSongsImg[1].src = "images/Balcanistic.jpg";
gameSongsImg[2].src = "images/becomeHuman.jpg";
gameSongsImg[3].src = "images/Breath of the wind.jpg";
gameSongsImg[4].src = "images/Chll of light.jpg";
gameSongsImg[5].src = "images/Hollow knight.jpg";
gameSongsImg[6].src = "images//Ezios family.jpg";
gameSongsImg[7].src = "images/Ghost in the shell.jpg";
gameSongsImg[8].src = "images/Hollow knight.jpg";
gameSongsImg[9].src = "images/Lahayahat.jpg";
gameSongsImg[10].src = "images/Man With Rosses.jpg";
gameSongsImg[11].src = "images/Melodaio.jpg";
gameSongsImg[12].src = "images/One.png";
gameSongsImg[13].src = "images/Seni.jpg";
gameSongsImg[14].src = "images/Why do we fall.jpg";
gameSongsImg[15].src = "images/Lahayahat.jpg";
gameSongsImg[16].src = "images/Ezios family.jpg";
gameSongsImg[17].src = "images/One.png";
gameSongsImg[18].src = "images/Lahayahat.jpg";
gameSongsImg[19].src = "images/Ezios family.jpg";
gameSongsImg[20].src = "images/Lahayahat.jpg";

let gameStyleSongs = [
    {
        name: "An old game",
        artist: "Moon beach",
        img: "images/An old game.png",
        src: "anOldGame"
    },
    {
        name: "Balcanistic",
        artist: "Dj kantick",
        img: "images/Balcanistic.jpg",
        src: "balcanistic"
    },
    {
        name: "Become Human",
        artist: "Kara main",
        img: "images/becomeHuman.jpg",
        src: "becomeHuman"
    },
    {
        name: "Breath of the wind",
        artist: "Epilogue",
        img: "images/Breath of the wind.jpg",
        src: "breathOfTheWind"
    },
    {
        name: "Chll of light",
        artist: "COL",
        img: "images/Chll of light.jpg",
        src: "chllOfLight"
    },
    {
        name: "Hollow knight",
        artist: "HK",
        img: "images/Hollow knight.jpg",
        src: "hollowKnight"
    },
    {
        name: "Ezio's family",
        artist: "Jesper kyd",
        img: "images/Ezios family.jpg",
        src: "eziosFamily"
    },
    {
        name: "Ghost in the shell",
        artist: "Millennium",
        img: "images/Ghost in the shell.jpg",
        src: "ghostInTheShell"
    },
    {
        name: "Hollow knight",
        artist: "HK",
        img: "images/Hollow knight.jpg",
        src: "hollowKnight"
    },
    {
        name: "Lahayahat",
        artist: "HK",
        img: "images/Lahayahat.jpg",
        src: "lahayahat"
    },
    {
        name: "Man With Rosses",
        artist: "copilot",
        img: "images/Man With Rosses.jpg",
        src: "ManWithRosses"
    },
    {
        name: "Melodaio",
        artist: "Chasm",
        img: "images/Melodaio.jpg",
        src: "melodaio"
    },
    {
        name: "One",
        artist: "Bear mcCreary",
        img: "images/One.png",
        src: "one"
    },
    {
        name: "seni",
        artist: "Dj kantick",
        img: "images/Seni.jpg",
        src: "seni"
    },
    {
        name: "Why do we fall",
        artist: "Hans zimmer",
        img: "images/Why do we fall.jpg",
        src: "whyDoWeFall"
    },
    {
        name: "Lahayahat",
        artist: "Kantik",
        img: "images/Lahayahat.jpg",
        src: "lahayahat"
    },
    {
        name: "Ezios family",
        artist: "Jesper kyd",
        img: "images/Ezios family.jpg",
        src: "eziosFamily"
    },
    {
        name: "One",
        artist: "Bear mcCreary",
        img: "images/One.png",
        src: "one"
    },
    {
        name: "Lahayahat",
        artist: "Kantik",
        img: "images/Lahayahat.jpg",
        src: "lahayahat"
    },
    {
        name: "Ezios family",
        artist: "Jesper kyd",
        img: "images/Ezios family.jpg",
        src: "eziosFamily"
    },
    {
        name: "Lahayahat",
        artist: "Kantik",
        img: "images/Lahayahat.jpg",
        src: "lahayahat"
    },
]

const gameStyleBtnPlayer = document.querySelector("#gameStyleBtnPlayer")

gameStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadgameMusic(gameSongsIndex);
})

//load game songs

let songStatusGame;

function loadgameMusic(indexNumber) {
    songName.innerHTML = gameStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = gameStyleSongs[indexNumber - 1].artist;
    songImage.src = gameStyleSongs[indexNumber - 1].img;
    gameSongControler.src = "tracks/game/" + gameStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = gameStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = gameStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.play();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.pause();
    recentlySongControler.pause();
    calmnessSongControler.pause();
    classicSongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    canadaSongControler.pause();
    likedSongControler.pause();
    playlistsSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = true;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;

}

playBtn.addEventListener("click", () => {
    gameSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    gameSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusGame == true) {
        nextGameSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusGame == true) {
        beforeGameSong();
    }
})
playSongBtn.addEventListener("click", () => {
    gameSongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    gameSongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusGame == true) {
        nextPopSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusGame == true) {
        beforePopSong();
    }
})
//click next song button developing

function nextGameSong() {
    gameSongsIndex++;
    gameSongsIndex > gameStyleSongs.length ? gameSongsIndex = 1 : gameStyleSongs = gameStyleSongs;

    loadgameMusic(gameSongsIndex);

}

//click before song button developing

function beforeGameSong() {
    gameSongsIndex--;
    gameSongsIndex < 1 ? gameSongsIndex = gameStyleSongs.length : gameSongsIndex = gameSongsIndex;

    loadgameMusic(gameSongsIndex);

}

//updata progressBar with songTime

gameSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";

    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    gameSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = gameSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = gameSongControler.duration;

        gameSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = gameSongControler.duration;
    
        gameSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    
});

//developed the repeatand random play button 

let repeatState5 = false;
let randomState5 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState5 == false) {
        repeatState5 = true;
    }
    else {
        repeatState5 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState5 == false) {
        randomState5 = true;
    }
    else {
        randomState5 = false;
    }
})
songRepeatBtn.addEventListener("click", () => {
    if (repeatState5 == false) {
        repeatState5 = true;
    }
    else {
        repeatState5 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState5 == false) {
        randomState5 = true;
    }
    else {
        randomState5 = false;
    }
})

gameSongControler.addEventListener("ended", () => {
    if (randomState5 == false && repeatState5 == false) {
        nextGameSong();
    }
    else if (randomState5 == false && repeatState5 == true) {
        gameSongControler.currentTime = 0;
        loadgameMusic(gameSongsIndex);
        gameSongControler.play();
    }
    else if (randomState5 == true && repeatState5 == false) {
        let randomIndex5 = Math.floor((Math.random() * gameStyleSongs.length) + 1);

        do {
            randomIndex5 = Math.floor((Math.random() * gameStyleSongs.length) + 1);
        }
        while (gameSongsIndex == randomIndex5)

        gameSongsIndex = randomIndex5;
        loadgameMusic(gameSongsIndex);
        gameSongControler.play();
    }
})


// set the songs in game sont style

const rAndbSongsImg = document.querySelectorAll(".rAndbSongsImg");
const rAndbSongsNames = document.querySelectorAll(".rAndbSongsNames");
const rAndbSongsArtistsNames = document.querySelectorAll(".rAndbSongsArtistName");
const rAndbSongsbuttonPlayer = document.querySelectorAll(".rAndbSongsbuttonPlayer");
const rAndbSongControler = document.querySelector("#rAndbSongControler");
const rAndbSongControlerSrc = document.querySelector("#rAndbSongControlerSrc");
let rAndbRecently = 0;
let rAndbName;
let rAndbImage;
let rAndbSong;
let rAndbArtistName;

for (let i = 0; i < rAndbSongsbuttonPlayer.length; i++) {
    rAndbSongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        rAndbRecently++;
        for (let j = 0; j < rAndbStyleSongs.length; j++) {
            if (rAndbSongsbuttonPlayer[i].dataset.songname == rAndbStyleSongs[j].src) {
                rAndbName = rAndbStyleSongs[j].name;
                rAndbImage = "images/" + rAndbStyleSongs[j].img + ".jpg";
                rAndbSong = "tracks/R&B/" + rAndbStyleSongs[j].src + ".mp3";
                rAndbArtistName = rAndbStyleSongs[j].artist;
                songName.innerHTML = rAndbStyleSongs[j].name;
                sourceSongImg.innerHTML = rAndbStyleSongs[j].img;
                sourceSong.innerHTML = "tracks/R&B/" + rAndbStyleSongs[j].src;
                songArtistName.innerHTML = rAndbStyleSongs[j].artist;
                songImage.src = rAndbStyleSongs[j].img;
                rAndbSongControler.src = "tracks/R&B/" + rAndbStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = rAndbStyleSongs[i].name;
                middlePlayerimageBoxImg.src = rAndbStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.play();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                likedSongControler.pause();
                classicSongControler.pause();
                recentlySongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();

                    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

        likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

                rAndbSongsIndex = i + 1;
            }

        }

        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";
        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";
        songStatusrRAndb = true;

        if (rAndbRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(rAndbName);

            resentlyPlayImage.dataset.rrAndbsongname = rAndbSong;
            resentlyPlayImage.dataset.rrAndbnamesong = rAndbName;
            resentlyPlayImage.dataset.rrAndbsongartistname = rAndbArtistName;
            resentlyPlayImage.dataset.rrAndbsongimage = rAndbImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = rAndbImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            rAndbRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarRAndb = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarRAndb.length; i++) {
        gozBazarRAndb[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarRAndb[i].dataset.rrAndbsongname;
            songName.innerHTML = gozBazarRAndb[i].dataset.rrAndbnamesong;
            songImage.src = gozBazarRAndb[i].dataset.rrAndbsongimage;
            songArtistName.innerHTML = gozBazarRAndb[i].dataset.rrAndbsongartistname;
            MiddleSongName.innerHTML = gozBazarRAndb[i].datase.rrAndbnamesong;
            middlePlayerimageBoxImg.src = gozBazarRAndb[i].datase.rrAndbsongimage;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            likedSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            playlistsSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })
            playSongBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            
            pauseSongBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

rAndbSongsNames[0].innerHTML = "Running On My Mind";
rAndbSongsNames[1].innerHTML = "Bomb";
rAndbSongsNames[2].innerHTML = "Confessions";
rAndbSongsNames[3].innerHTML = "Find A Place";
rAndbSongsNames[4].innerHTML = "French Kiss";
rAndbSongsNames[5].innerHTML = "Good Feelings";
rAndbSongsNames[6].innerHTML = "Up All Night";
rAndbSongsNames[7].innerHTML = "Ma vie";
rAndbSongsNames[8].innerHTML = "Please";
rAndbSongsNames[9].innerHTML = "Forever Mine";
rAndbSongsNames[10].innerHTML = "She needs me";
rAndbSongsNames[11].innerHTML = "TPB";
rAndbSongsNames[12].innerHTML = "She needs me";
rAndbSongsNames[13].innerHTML = "She needs me";
rAndbSongsNames[14].innerHTML = "Please";
rAndbSongsNames[15].innerHTML = "Ma vie";
rAndbSongsNames[16].innerHTML = "Ma vie";
rAndbSongsNames[17].innerHTML = "Forever Mine";
rAndbSongsNames[18].innerHTML = "Find A Place";
rAndbSongsNames[19].innerHTML = "Forever Mine";
rAndbSongsNames[20].innerHTML = "Find A Place";

rAndbSongsArtistsNames[0].innerHTML = "Ali Gatie";
rAndbSongsArtistsNames[1].innerHTML = "Trey songz";
rAndbSongsArtistsNames[2].innerHTML = "Dadju";
rAndbSongsArtistsNames[3].innerHTML = "Trey songz";
rAndbSongsArtistsNames[4].innerHTML = "Trey songz";
rAndbSongsArtistsNames[5].innerHTML = "Trey songz";
rAndbSongsArtistsNames[6].innerHTML = "Khalid";
rAndbSongsArtistsNames[7].innerHTML = "Dadju";
rAndbSongsArtistsNames[8].innerHTML = "Dadju";
rAndbSongsArtistsNames[9].innerHTML = "Kantik";
rAndbSongsArtistsNames[10].innerHTML = "Robin thicke";
rAndbSongsArtistsNames[11].innerHTML = "Trey songz";
rAndbSongsArtistsNames[12].innerHTML = "Dadju";
rAndbSongsArtistsNames[13].innerHTML = "Trey songz";
rAndbSongsArtistsNames[14].innerHTML = "Trey songz";
rAndbSongsArtistsNames[15].innerHTML = "Dadju";
rAndbSongsArtistsNames[16].innerHTML = "Dadju";
rAndbSongsArtistsNames[17].innerHTML = "Dadju";
rAndbSongsArtistsNames[18].innerHTML = "Trey songz";
rAndbSongsArtistsNames[19].innerHTML = "Robin thickez";
rAndbSongsArtistsNames[20].innerHTML = "Trey songz";

rAndbSongsImg[0].src = "images/Running On My Mind.jpg";
rAndbSongsImg[1].src = "images/Bomb.jpg";
rAndbSongsImg[2].src = "images/Confessions.jpg";
rAndbSongsImg[3].src = "images/Find A Place.jpg";
rAndbSongsImg[4].src = "images/French Kiss.jpg";
rAndbSongsImg[5].src = "images/Good Feelings.jpg";
rAndbSongsImg[6].src = "images/Up All Night.jpg";
rAndbSongsImg[7].src = "images/Ma vie.jpg";
rAndbSongsImg[8].src = "images/please.jpg";
rAndbSongsImg[9].src = "images/Forever Mine.jpg";
rAndbSongsImg[10].src = "images/She needs me.jpg";
rAndbSongsImg[11].src = "images/TPB.jpg";
rAndbSongsImg[12].src = "images/She needs me.jpg";
rAndbSongsImg[13].src = "images/She needs me.jpg";
rAndbSongsImg[14].src = "images/please.jpg";
rAndbSongsImg[15].src = "images/Ma vie.jpg";
rAndbSongsImg[16].src = "images/Ma vie.jpg";
rAndbSongsImg[17].src = "images/Forever Mine.jpg";
rAndbSongsImg[18].src = "images/Find A Place.jpg";
rAndbSongsImg[19].src = "images/Forever Mine.jpg";
rAndbSongsImg[20].src = "images/Find A Place.jpg";

let rAndbStyleSongs = [
    {
        name: "Running On My Mind",
        artist: "Ali Gatie",
        img: "images/Running On My Mind.jpg",
        src: "Ali Gatie - Running On My Mind (2020) MELOVAZ.NET"
    },
    {
        name: "Bomb",
        artist: "Trey songz",
        img: "images/Bomb.jpg",
        src: "Bomb (A.P.)"
    },
    {
        name: "Confessions",
        artist: "Dadju",
        img: "images/Confessions.jpg",
        src: "Confessions"
    },
    {
        name: "Find A Place",
        artist: "Trey songz",
        img: "images/Find A Place.jpg",
        src: "Find A Place"
    },
    {
        name: "French Kiss",
        artist: "Trey songz",
        img: "images/French Kiss.jpg",
        src: "French Kiss"
    },
    {
        name: "Good Feelings",
        artist: "Trey songz",
        img: "images/Good Feelings.jpg",
        src: "Good Feelings"
    },
    {
        name: "Up All Night",
        artist: "Khalid",
        img: "images/Up All Night.jpg",
        src: "Khalid - Up All Night (2019) MELOVAZ.NET"
    },
    {
        name: "Ma vie",
        artist: "Dadju",
        img: "images/Ma vie.jpg",
        src: "Ma vie"
    },
    {
        name: "Please",
        artist: "Dadju",
        img: "images/Please.jpg",
        src: "Please"
    },
    {
        name: "Forever Mine",
        artist: "Robin thicke",
        img: "images/Forever Mine.jpg",
        src: "Robin Thicke - Forever Mine (2020) MELOVAZ.NET"
    },
    {
        name: "She Needs Me",
        artist: "Trey songz",
        img: "images/She Needs Me.jpg",
        src: "She Needs Me"
    },
    {
        name: "TPB",
        artist: "Dadju",
        img: "images/TPB.jpg",
        src: "TPB"
    },
    {
        name: "She Needs Me",
        artist: "Trey songz",
        img: "images/She Needs Me.jpg",
        src: "She Needs Me"
    },
    {
        name: "She Needs Me",
        artist: "Trey songz",
        img: "images/She Needs Me.jpg",
        src: "She Needs Me"
    },
    {
        name: "Please",
        artist: "Dadju",
        img: "images/Please.jpg",
        src: "Please"
    },
    {
        name: "Ma vie",
        artist: "Dadju",
        img: "images/Ma vie.jpg",
        src: "Ma vie"
    },
    {
        name: "Ma vie",
        artist: "Dadju",
        img: "images/Ma vie.jpg",
        src: "Ma vie"
    },
    {
        name: "Forever Mine",
        artist: "Robin thicke",
        img: "images/Forever Mine.jpg",
        src: "Robin Thicke - Forever Mine (2020) MELOVAZ.NET"
    },
    {
        name: "Find A Place",
        artist: "Trey songz",
        img: "images/Find A Place.jpg",
        src: "Find A Place"
    },
    {
        name: "Forever Mine",
        artist: "Robin thicke",
        img: "images/Forever Mine.jpg",
        src: "Robin Thicke - Forever Mine (2020) MELOVAZ.NET"
    },
    {
        name: "Find A Place",
        artist: "Trey songz",
        img: "images/Find A Place.jpg",
        src: "Find A Place"
    },
]

const rAndbStyleBtnPlayer = document.querySelector("#rAndbStyleBtnPlayer")

let songStatusPop;

rAndbStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadrAndbMusic(rAndbSongsIndex);
})

//load rAndb songs

let songStatusRAndb;

function loadrAndbMusic(indexNumber) {
    songName.innerHTML = rAndbStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = rAndbStyleSongs[indexNumber - 1].artist;
    songImage.src = rAndbStyleSongs[indexNumber - 1].img;
    rAndbSongControler.src = "tracks/R&B/" + rAndbStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = rAndbStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = rAndbStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.play();
    rapSongControler.pause();
    recentlySongControler.pause();
    animeSongControler.pause()
    calmnessSongControler.pause();
    classicSongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    likedSongControler.pause();
    canadaSongControler.pause();
    playlistsSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = true;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;
}

playBtn.addEventListener("click", () => {
    rAndbSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    rAndbSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusRAndb == true) {
        nextrAndbSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusRAndb == true) {
        beforerAndbSong();
    }
})
playSongBtn.addEventListener("click", () => {
    rAndbSongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    rAndbSongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusPop == true) {
        nextrAndbSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusPop == true) {
        beforerAndbSong();
    }
})

//click next song button developing

function nextrAndbSong() {
    rAndbSongsIndex++;
    rAndbSongsIndex > rAndbStyleSongs.length ? rAndbSongsIndex = 1 : rAndbStyleSongs = rAndbStyleSongs;

    loadrAndbMusic(rAndbSongsIndex);

}

//click before song button developing

function beforerAndbSong() {
    rAndbSongsIndex--;
    rAndbSongsIndex < 1 ? rAndbSongsIndex = rAndbStyleSongs.length : rAndbSongsIndex = rAndbSongsIndex;

    loadrAndbMusic(rAndbSongsIndex);

}

//updata progressBar with songTime

rAndbSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";

    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    rAndbSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = rAndbSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = rAndbSongControler.duration;

        rAndbSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = rAndbSongControler.duration;
    
        rAndbSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState6 = false;
let randomState6 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState6 == false) {
        repeatState6 = true;
    }
    else {
        repeatState6 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState6 == false) {
        randomState6 = true;
    }
    else {
        randomState6 = false;
    }
})
songRepeatBtn.addEventListener("click", () => {
    if (repeatState6 == false) {
        repeatState6 = true;
    }
    else {
        repeatState6 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState6 == false) {
        randomState6 = true;
    }
    else {
        randomState6 = false;
    }
})

rAndbSongControler.addEventListener("ended", () => {
    if (randomState6 == false && repeatState6 == false) {
        nextrAndbSong();
    }
    else if (randomState6 == false && repeatState6 == true) {
        rAndbSongControler.currentTime = 0;
        loadrAndbMusic(rAndbSongsIndex);
        rAndbSongControler.play();
    }
    else if (randomState6 == true && repeatState6 == false) {
        let randomIndex6 = Math.floor((Math.random() * rAndbStyleSongs.length) + 1);

        do {
            randomIndex6 = Math.floor((Math.random() * rAndbStyleSongs.length) + 1);
        }
        while (rAndbSongsIndex == randomIndex6)

        rAndbSongsIndex = randomIndex6;
        loadrAndbMusic(rAndbSongsIndex);
        rAndbSongControler.play();
    }
})

// set the songs in anime sont style

const rapSongsImg = document.querySelectorAll(".rapSongsImg");
const rapSongsNames = document.querySelectorAll(".rapSongsNames");
const rapSongsArtistsNames = document.querySelectorAll(".rapSongsArtistName");
const rapSongsbuttonPlayer = document.querySelectorAll(".rapSongsbuttonPlayer");
const rapSongControler = document.querySelector("#rapSongControler");
const rapSongControlerSrc = document.querySelector("#rapSongControlerSrc");
let rapRecently = 0;
let rapName;
let rapImage;
let rapSong;
let rapArtistName;

for (let i = 0; i < rapSongsbuttonPlayer.length; i++) {
    rapSongsbuttonPlayer[i].addEventListener("click", () => {
        rapRecently++;
        songStylesIndexClear();
        for (let j = 0; j < rapStyleSongs.length; j++) {
            if (rapSongsbuttonPlayer[i].dataset.songname == rapStyleSongs[j].src) {
                rapName = rapStyleSongs[j].name;
                rapImage = "images/" + rapStyleSongs[j].img + ".jpg";
                rapSong = "tracks/Rap/" + rapStyleSongs[j].src + ".mp3";
                sourceSong.innerHTML = "tracks/Rap/" + rapStyleSongs[j].src;
                rapArtistName = rapStyleSongs[j].artist;
                songName.innerHTML = rapStyleSongs[j].name;
                sourceSongImg.innerHTML = rapStyleSongs[j].img;
                songArtistName.innerHTML = rapStyleSongs[j].artist;
                songImage.src = rapStyleSongs[j].img;
                rapSongControler.src = "tracks/Rap/" + rapStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = rapStyleSongs[i].name;
                middlePlayerimageBoxImg.src = rapStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                likedSongControler.pause();
                rapSongControler.play();
                animeSongControler.pause();
                calmnessSongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                recentlySongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();

                    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";


                rapSongsIndex = i + 1;
            }

        }
        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";

        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";

        songStatusRap = true;

        if (rapRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(rapName);

            resentlyPlayImage.dataset.rrapsongname = rapSong;
            resentlyPlayImage.dataset.rrapnamesong = rapName;
            resentlyPlayImage.dataset.rrapsongartistname = rapArtistName;
            resentlyPlayImage.dataset.rrapsongimage = rapImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = rapImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            rapRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarRap = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarRap.length; i++) {
        gozBazarRap[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarRap[i].dataset.rrapsongname;
            songName.innerHTML = gozBazarRap[i].dataset.rrapnamesong;
            songImage.src = gozBazarRap[i].dataset.rrapsongimage;
            songArtistName.innerHTML = gozBazarRap[i].dataset.rrapsongartistname;
            MiddleSongName.innerHTML = gozBazarRap[i].dataset.rrapnamesong;
            middlePlayerimageBoxImg.src = gozBazarRap[i].dataset.rrapsongimage;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            likedSongControler.pause();
            playlistsSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            likeEmptyBtn.style.display = "block";
            likeFullBtn.style.display = "none";
            likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        
            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            playSongBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            
            pauseSongBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })
            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";


                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

rapSongsNames[0].innerHTML = "Much Pain";
rapSongsNames[1].innerHTML = "Amniat";
rapSongsNames[2].innerHTML = "blessed bass boosted";
rapSongsNames[3].innerHTML = "Busta Rhymes Touch it";
rapSongsNames[4].innerHTML = "For The Record";
rapSongsNames[5].innerHTML = "Gorilla Zoe Na Na";
rapSongsNames[6].innerHTML = "homicide bass boosted";
rapSongsNames[7].innerHTML = "lalala bass boosted";
rapSongsNames[8].innerHTML = "mary jane bass boosted";
rapSongsNames[9].innerHTML = "NEFFEX Flirt bass boosted";
rapSongsNames[10].innerHTML = "SHAHMEN Bad Dream Catcher";
rapSongsNames[11].innerHTML = "UICIDEBOY x TRAVIS BARKER";
rapSongsNames[12].innerHTML = "UNAVERAGE GANG BONE COLLECTING";
rapSongsNames[13].innerHTML = "NEFFEX Flirt bass boosted";
rapSongsNames[14].innerHTML = "NEFFEX Flirt bass boosted";
rapSongsNames[15].innerHTML = "homicide bass boosted";
rapSongsNames[16].innerHTML = "mary jane bass boosted";
rapSongsNames[17].innerHTML = "mary jane bass boosted";
rapSongsNames[18].innerHTML = "mary jane bass boosted";
rapSongsNames[19].innerHTML = "homicide bass boosted";
rapSongsNames[20].innerHTML = "Gorilla-Zoe-Na-Na";

rapSongsArtistsNames[0].innerHTML = "know";
rapSongsArtistsNames[1].innerHTML = "know";
rapSongsArtistsNames[2].innerHTML = "know";
rapSongsArtistsNames[3].innerHTML = "know";
rapSongsArtistsNames[4].innerHTML = "know";
rapSongsArtistsNames[5].innerHTML = "know";
rapSongsArtistsNames[6].innerHTML = "know";
rapSongsArtistsNames[7].innerHTML = "know";
rapSongsArtistsNames[8].innerHTML = "know";
rapSongsArtistsNames[9].innerHTML = "know";
rapSongsArtistsNames[10].innerHTML = "know";
rapSongsArtistsNames[11].innerHTML = "know";
rapSongsArtistsNames[12].innerHTML = "know";
rapSongsArtistsNames[13].innerHTML = "know";
rapSongsArtistsNames[14].innerHTML = "know";
rapSongsArtistsNames[15].innerHTML = "know";
rapSongsArtistsNames[16].innerHTML = "know";
rapSongsArtistsNames[17].innerHTML = "know";
rapSongsArtistsNames[18].innerHTML = "know";
rapSongsArtistsNames[19].innerHTML = "know";
rapSongsArtistsNames[20].innerHTML = "know";

rapSongsImg[0].src = "images/Much Pain.jpg";
rapSongsImg[1].src = "images/Amniat.jpg";
rapSongsImg[2].src = "images/blessed bass boosted.jpg";
rapSongsImg[3].src = "images/Busta Rhymes Touch it.jpg";
rapSongsImg[4].src = "images/For The Record.jpg";
rapSongsImg[5].src = "images/Gorilla Zoe Na Na.jpg";
rapSongsImg[6].src = "images/homicide bass boosted.jpg";
rapSongsImg[7].src = "images/lalala bass boosted.jpg";
rapSongsImg[8].src = "images/mary jane bass boosted.jpg";
rapSongsImg[9].src = "images/NEFFEX Flirt bass boosted.jpg";
rapSongsImg[10].src = "images/SHAHMEN Bad Dream Catcher.jpg";
rapSongsImg[11].src = "images/UICIDEBOY x TRAVIS BARKER.png";
rapSongsImg[12].src = "images/UNAVERAGE GANG BONE COLLECTING.jpg";
rapSongsImg[13].src = "images/NEFFEX Flirt bass boosted.jpg";
rapSongsImg[14].src = "images/NEFFEX Flirt bass boosted.jpg";
rapSongsImg[15].src = "images/homicide bass boosted.jpg";
rapSongsImg[16].src = "images/mary jane bass boosted.jpg";
rapSongsImg[17].src = "images/mary jane bass boosted.jpg";
rapSongsImg[18].src = "images/mary jane bass boosted.jpg";
rapSongsImg[19].src = "images/homicide bass boosted.jpg";
rapSongsImg[20].src = "images/Gorilla Zoe Na Na.jpg";

let rapStyleSongs = [
    {
        name: "Much Pain",
        artist: "know",
        img: "images/Much Pain.jpg",
        src: "2Pac-So-Much-Pain"
    },
    {
        name: "Amniat",
        artist: "know",
        img: "images/Amniat.jpg",
        src: "Amniat - 1 - 128 - 1musics.com"
    },
    {
        name: "blessed bass boosted",
        artist: "know",
        img: "images/blessed bass boosted.jpg",
        src: "blessed-bass-boosted"
    },
    {
        name: "Busta Rhymes Touch it",
        artist: "know",
        img: "images/Busta Rhymes Touch it.jpg",
        src: "Busta-Rhymes-Touch-it"
    },
    {
        name: "For The Record",
        artist: "know",
        img: "images/For The Record.jpg",
        src: "For_The_Record_128"
    },
    {
        name: "Gorilla Zoe Na Na",
        artist: "know",
        img: "images/Gorilla Zoe Na Na.jpg",
        src: "Gorilla-Zoe-Na-Na"
    },
    {
        name: "homicide bass boosted",
        artist: "know",
        img: "images/homicide bass boosted.jpg",
        src: "homicide-bass-boosted"
    },
    {
        name: "lalala bass boosted",
        artist: "know",
        img: "images/lalala bass boosted.jpg",
        src: "lalala-bass-boosted"
    },
    {
        name: "mary jane bass boosted",
        artist: "know",
        img: "images/mary jane bass boosted.jpg",
        src: "mary-jane-bass-boosted"
    },
    {
        name: "NEFFEX Flirt bass boosted",
        artist: "know",
        img: "images/NEFFEX Flirt bass boosted.jpg",
        src: "NEFFEX_Flirt_bass_boosted_128"
    },
    {
        name: "SHAHMEN Bad Dream Catcher",
        artist: "know",
        img: "images/SHAHMEN Bad Dream Catcher.jpg",
        src: "SHAHMEN_Bad_Dream_Catcher_128"
    },
    {
        name: "UICIDEBOY x TRAVIS BARKER",
        artist: "know",
        img: "images/UICIDEBOY x TRAVIS BARKER.jpg",
        src: "UICIDEBOY-x-TRAVIS-BARKER"
    },
    {
        name: "UNAVERAGE GANG BONE COLLECTING",
        artist: "know",
        img: "images/UNAVERAGE GANG BONE COLLECTING.jpg",
        src: "UNAVERAGE_GANG_BONE_COLLECTING_128"
    },
    {
        name: "NEFFEX Flirt bass boosted",
        artist: "know",
        img: "images/NEFFEX Flirt bass boosted.jpg",
        src: "NEFFEX_Flirt_bass_boosted_128"
    },
    {
        name: "NEFFEX Flirt bass boosted",
        artist: "know",
        img: "images/NEFFEX Flirt bass boosted.jpg",
        src: "NEFFEX_Flirt_bass_boosted_128"
    },
    {
        name: "homicide bass boosted",
        artist: "know",
        img: "images/homicide bass boosted.jpg",
        src: "homicide-bass-boosted"
    },
    {
        name: "mary jane bass boosted",
        artist: "know",
        img: "images/mary jane bass boosted.jpg",
        src: "mary-jane-bass-boosted"
    },
    {
        name: "mary jane bass boosted",
        artist: "know",
        img: "images/mary jane bass boosted.jpg",
        src: "mary-jane-bass-boosted"
    },
    {
        name: "mary jane bass boosted",
        artist: "know",
        img: "images/mary jane bass boosted.jpg",
        src: "mary-jane-bass-boosted"
    },
    {
        name: "homicide bass boosted",
        artist: "know",
        img: "images/homicide bass boosted.jpg",
        src: "homicide-bass-boosted"
    },
    {
        name: "Gorilla Zoe Na Na",
        artist: "know",
        img: "images/Gorilla Zoe Na Na.jpg",
        src: "toghetherWeSuccesd"
    },
]

const rapStyleBtnPlayer = document.querySelector("#rapStyleBtnPlayer")

rapStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadrapMusic(rapSongsIndex);
})

//load rap songs

let songStatusRap;

function loadrapMusic(indexNumber) {
    songName.innerHTML = rapStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = rapStyleSongs[indexNumber - 1].artist;
    songImage.src = rapStyleSongs[indexNumber - 1].img;
    rapSongControler.src = "tracks/Rap/" + rapStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = rapStyleSongs[i].name;
    middlePlayerimageBoxImg.src = rapStyleSongs[i].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.play();
    animeSongControler.pause()
    calmnessSongControler.pause();
    classicSongControler.pause();
    russianSongControler.pause();
    recentlySongControler.pause();
    heavySongControler.pause();
    likedSongControler.pause();
    playlistsSongControler.pause();
    canadaSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";    
    
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = true;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;
}

playBtn.addEventListener("click", () => {
    rapSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    rapSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusRap == true) {
        nextRapSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusRap == true) {
        beforeRapSong();
    }
})
playSongBtn.addEventListener("click", () => {
    rapSongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    rapSongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusRap == true) {
        nextPopSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusRap == true) {
        beforePopSong();
    }
})

//click next song button developing

function nextRapSong() {
    rapSongsIndex++;
    rapSongsIndex > rapStyleSongs.length ? rapSongsIndex = 1 : rapStyleSongs = rapStyleSongs;

    loadrapMusic(rapSongsIndex);

}

//click before song button developing

function beforeRapSong() {
    rapSongsIndex--;
    rapSongsIndex < 1 ? rapSongsIndex = rapStyleSongs.length : rapSongsIndex = rapSongsIndex;

    loadrapMusic(rapSongsIndex);

}

//updata progressBar with songTime

rapSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";


    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    rapSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = rapSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = rapSongControler.duration;

        rapSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
    let progressWithVal = middleProgressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = rapSongControler.duration;

    rapSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
})
});

//developed the repeatand random play button 

let repeatState7 = false;
let randomState7 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState7 == false) {
        repeatState7 = true;
    }
    else {
        repeatState7 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState7 == false) {
        randomState7 = true;
    }
    else {
        randomState7 = false;
    }
})

songRepeatBtn.addEventListener("click", () => {
    if (repeatState7 == false) {
        repeatState7 = true;
    }
    else {
        repeatState7 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState7 == false) {
        randomState7 = true;
    }
    else {
        randomState7 = false;
    }
})

rapSongControler.addEventListener("ended", () => {
    if (randomState7 == false && repeatState7 == false) {
        nextRapSong();
    }
    else if (randomState7 == false && repeatState7 == true) {
        rapSongControler.currentTime = 0;
        loadrapMusic(rapSongsIndex);
        rapSongControler.play();
    }
    else if (randomState7 == true && repeatState7 == false) {
        let randomIndex7 = Math.floor((Math.random() * rapStyleSongs.length) + 1);

        do {
            randomIndex7 = Math.floor((Math.random() * rapStyleSongs.length) + 1);
        }
        while (rapSongsIndex == randomIndex7)

        rapSongsIndex = randomIndex7;
        loadrapMusic(rapSongsIndex);
        rapSongControler.play();
    }
})

// set the songs in anime sont style

const animeSongsImg = document.querySelectorAll(".animeSongsImg");
const animeSongsNames = document.querySelectorAll(".animeSongsNames");
const animeSongsArtistsNames = document.querySelectorAll(".animeSongsArtistName");
const animeSongsbuttonPlayer = document.querySelectorAll(".animeSongsbuttonPlayer");
const animeSongControler = document.querySelector("#animeSongControler");
const animeSongControlerSrc = document.querySelector("#animeSongControlerSrc");
let animeRecently = 0;
let animeName;
let animeImage;
let animeSong;
let animeArtistName;

for (let i = 0; i < animeSongsbuttonPlayer.length; i++) {
    animeSongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        animeRecently++;
        //animeSongControlerSrc.src = "tracks/anime/"+ animeSongsbuttonPlayer[i].dataset.songname +".mp3";
        //animeSongControler.src = animeSongControlerSrc.src;
        //animeSongControler.play();
        for (let j = 0; j < animeStyleSongs.length; j++) {
            if (animeSongsbuttonPlayer[i].dataset.songname == animeStyleSongs[j].src) {
                animeName = animeStyleSongs[j].name;
                animeImage = "images/" + animeStyleSongs[j].img + ".jpg";
                animeSong = "tracks/anime/" + animeStyleSongs[j].src + ".mp3";
                animeArtistName = animeStyleSongs[j].artist;
                songName.innerHTML = animeStyleSongs[j].name;
                sourceSongImg.innerHTML = animeStyleSongs[j].img;
                sourceSong.innerHTML = "tracks/anime/" + animeStyleSongs[j].src;
                songArtistName.innerHTML = rapStyleSongs[j].artist;
                songImage.src = animeStyleSongs[j].img;
                animeSongControler.src = "tracks/anime/" + animeStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = animeStyleSongs[i].name;
                middlePlayerimageBoxImg.src = animeStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.play()
                calmnessSongControler.pause();
                classicSongControler.pause();
                recentlySongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();
                likedSongControler.pause();

                    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

                animeSongsIndex = i + 1;
            }

        }
        /*songName.innerHTML = animeStyleSongs[indexNumber - 1].name;
        songArtistName.innerHTML = animeStyleSongs[indexNumber - 1].artist;
        songImage.src = "images/" + animeStyleSongs[indexNumber - 1].img + ".jpg";
       animeSongControler.src = "tracks/anime/" + animeStyleSongs[indexNumber - 1].src + ".mp3";
        songImage.style.display = "block";
    
       rapSongControler.play();
  */
        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";
        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";
        songStatusAnime = true;

        if (animeRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(animeName);

            resentlyPlayImage.dataset.ranimesongname = animeSong;
            resentlyPlayImage.dataset.ranimenamesong = animeName;
            resentlyPlayImage.dataset.ranimesongartistname = animeArtistName;
            resentlyPlayImage.dataset.ranimesongimage = animeImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = animeImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            animeRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarAnime = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarAnime.length; i++) {
        gozBazarAnime[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarAnime[i].dataset.ranimesongname;
            songName.innerHTML = gozBazarAnime[i].dataset.ranimenamesong;
            songImage.src = gozBazarAnime[i].dataset.ranimesongimage;
            songArtistName.innerHTML = gozBazarAnime[i].dataset.ranimesongartistname;
            MiddleSongName.innerHTML = gozBazarAnime[i].dataset.ranimenamesong;
            middlePlayerimageBoxImg.src = gozBazarAnime[i].dataset.ranimesongimage;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            playlistsSongControler.pause();
            likedSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            likeEmptyBtn.style.display = "block";
            likeFullBtn.style.display = "none";
            likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        
            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })
            playSongBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            
            pauseSongBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

animeSongsNames[0].innerHTML = "Bygone Days";
animeSongsNames[1].innerHTML = "Floating Museum";
animeSongsNames[2].innerHTML = "Flying";
animeSongsNames[3].innerHTML = "Merry Go Round";
animeSongsNames[4].innerHTML = "Nausicaa of the Valley of the Wind";
animeSongsNames[5].innerHTML = "One Summer's Day";
animeSongsNames[6].innerHTML = "Ponyo on the Cliff by the Sea";
animeSongsNames[7].innerHTML = "Setsuko & Saita";
animeSongsNames[8].innerHTML = "Tetsuo";
animeSongsNames[9].innerHTML = "The Girl Who Fell from the Sky";
animeSongsNames[10].innerHTML = "The Legend of Ashitaka";
animeSongsNames[11].innerHTML = "The Path of Wind";
animeSongsNames[12].innerHTML = "The Legend of Ashitaka";
animeSongsNames[13].innerHTML = "The Legend of Ashitaka";
animeSongsNames[14].innerHTML = "The Path of Wind";
animeSongsNames[15].innerHTML = "One Summer's Day";
animeSongsNames[16].innerHTML = "One Summer's Day";
animeSongsNames[17].innerHTML = "Nausicaa of the Valley of the Wind";
animeSongsNames[18].innerHTML = "Tetsuo";
animeSongsNames[19].innerHTML = "Nausicaa of the Valley of the Wind";
animeSongsNames[20].innerHTML = "One Summer's Day";

animeSongsArtistsNames[0].innerHTML = "know";
animeSongsArtistsNames[1].innerHTML = "know";
animeSongsArtistsNames[2].innerHTML = "know";
animeSongsArtistsNames[3].innerHTML = "know";
animeSongsArtistsNames[4].innerHTML = "know";
animeSongsArtistsNames[5].innerHTML = "know";
animeSongsArtistsNames[6].innerHTML = "know";
animeSongsArtistsNames[7].innerHTML = "know";
animeSongsArtistsNames[8].innerHTML = "know";
animeSongsArtistsNames[9].innerHTML = "know";
animeSongsArtistsNames[10].innerHTML = "know";
animeSongsArtistsNames[11].innerHTML = "know";
animeSongsArtistsNames[12].innerHTML = "know";
animeSongsArtistsNames[13].innerHTML = "know";
animeSongsArtistsNames[14].innerHTML = "know";
animeSongsArtistsNames[15].innerHTML = "know";
animeSongsArtistsNames[16].innerHTML = "know";
animeSongsArtistsNames[17].innerHTML = "know";
animeSongsArtistsNames[18].innerHTML = "know";
animeSongsArtistsNames[19].innerHTML = "know";
animeSongsArtistsNames[20].innerHTML = "know";

animeSongsImg[0].src = "images/By gone Days.jpg";
animeSongsImg[1].src = "images/Floating Museum.jpg";
animeSongsImg[2].src = "images/Flying.jpg";
animeSongsImg[3].src = "images/Merry Go Round.jpg";
animeSongsImg[4].src = "images/Nausicaa of the Valley of the Wind.jpg";
animeSongsImg[5].src = "images/One Summer's Day.jpg";
animeSongsImg[6].src = "images/Ponyo on the Cliff by the Sea.jpg";
animeSongsImg[7].src = "images/Setsuko & Saita.jpg";
animeSongsImg[8].src = "images/Tetsuo.jpg";
animeSongsImg[9].src = "images/The Girl Who Fell from the Sky.jpg";
animeSongsImg[10].src = "images/The Legend of Ashitaka.jpg";
animeSongsImg[11].src = "images/The Path of Wind.jpg";
animeSongsImg[12].src = "images/The Legend of Ashitaka.jpg";
animeSongsImg[13].src = "images/The Legend of Ashitaka.jpg";
animeSongsImg[14].src = "images/The Path of Wind.jpg";
animeSongsImg[15].src = "images/One Summer's Day.jpg";
animeSongsImg[16].src = "images/One Summer's Day.jpg";
animeSongsImg[17].src = "images/Nausicaa of the Valley of the Wind.jpg";
animeSongsImg[18].src = "images/Tetsuo.jpg";
animeSongsImg[19].src = "images/Nausicaa of the Valley of the Wind.jpg";
animeSongsImg[20].src = "images/One Summer's Day.jpg";

let animeStyleSongs = [
    {
        name: "By gone Days",
        artist: "Porco Rosso",
        img: "images/By gone Days.jpg",
        src: "Bygone Days (From 'Porco Rosso')"
    },
    {
        name: "Floating Museum",
        artist: "Ghost in the Shell",
        img: "images/Floating Museum.jpg",
        src: "Floating Museum (From 'Ghost in the Shell')"
    },
    {
        name: "Flying",
        artist: "The Tale of the Princess Kaguya",
        img: "images/Flying.jpg",
        src: "Flying (From 'The Tale of the Princess Kaguya')"
    },
    {
        name: "Merry Go Round",
        artist: "Howl's Moving Castle",
        img: "images/Merry Go Round.jpg",
        src: "Merry-Go-Round of Life (From 'Howl's Moving Castle')"
    },
    {
        name: "Nausicaa of the Valley of the Wind",
        artist: "Nausicaa of the Valley of the Wind",
        img: "images/Nausicaa of the Valley of the Wind.jpg",
        src: "Nausicaa of the Valley of the Wind - Opening (From 'Nausicaa of the Valley of the Wind')"
    },
    {
        name: "One Summer's Day",
        artist: "Spirited Away",
        img: "images/One Summer's Day.jpg",
        src: "One Summer's Day (From 'Spirited Away')"
    },
    {
        name: "Ponyo on the Cliff by the Sea",
        artist: "Ponyo on the Cliff by the Sea",
        img: "images/Ponyo on the Cliff by the Sea.jpg",
        src: "Ponyo on the Cliff by the Sea (From 'Ponyo on the Cliff by the Sea') (English Version)"
    },
    {
        name: "Setsuko & Saita",
        artist: "Grave of the Fireflies",
        img: "images/Setsuko & Saita.jpg",
        src: "Setsuko & Saita (From 'Grave of the Fireflies')"
    },
    {
        name: "Tetsuo",
        artist: "Akira",
        img: "images/Tetsuo.jpg",
        src: "Tetsuo (From 'Akira')"
    },
    {
        name: "The Girl Who Fell from the Sky",
        artist: "Laputa- Castle in the Sky",
        img: "images/The Girl Who Fell from the Sky.jpg",
        src: "The Girl Who Fell from the Sky (From 'Laputa- Castle in the Sky')"
    },
    {
        name: "The Legend of Ashitaka",
        artist: "Princess Mononoke",
        img: "images/The Legend of Ashitaka.jpg",
        src: "The Legend of Ashitaka - Ending (From 'Princess Mononoke')"
    },
    {
        name: "The Path of Wind",
        artist: "My Neighbor Totoro",
        img: "images/The Path of Wind.jpg",
        src: "The Path of Wind (From 'My Neighbor Totoro')"
    },
    {
        name: "The Legend of Ashitaka",
        artist: "Princess Mononoke",
        img: "images/The Legend of Ashitaka.jpg",
        src: "The Legend of Ashitaka - Ending (From 'Princess Mononoke')"
    },
    {
        name: "The Legend of Ashitaka",
        artist: "Princess Mononoke",
        img: "images/The Legend of Ashitaka.jpg",
        src: "The Legend of Ashitaka - Ending (From 'Princess Mononoke')"
    },
    {
        name: "The Path of Wind",
        artist: "My Neighbor Totoro",
        img: "images/The Path of Wind.jpg",
        src: "The Path of Wind (From 'My Neighbor Totoro')"
    },
    {
        name: "One Summer's Day",
        artist: "Spirited Away",
        img: "images/One Summer's Day.jpg",
        src: "One Summer's Day (From 'Spirited Away')"
    },
    {
        name: "One Summer's Day",
        artist: "Spirited Away",
        img: "images/One Summer's Day.jpg",
        src: "One Summer's Day (From 'Spirited Away')"
    },
    {
        name: "Nausicaa of the Valley of the Wind",
        artist: "Nausicaa of the Valley of the Wind",
        img: "images/Nausicaa of the Valley of the Wind.jpg",
        src: "Nausicaa of the Valley of the Wind - Opening (From 'Nausicaa of the Valley of the Wind')"
    },
    {
        name: "Tetsuo",
        artist: "Akira",
        img: "images/Tetsuo.jpg",
        src: "Tetsuo (From 'Akira')"
    },
    {
        name: "Nausicaa of the Valley of the Wind",
        artist: "Nausicaa of the Valley of the Wind",
        img: "images/Nausicaa of the Valley of the Wind.jpg",
        src: "Nausicaa of the Valley of the Wind - Opening (From 'Nausicaa of the Valley of the Wind')"
    },
    {
        name: "One Summer's Day",
        artist: "Spirited Away",
        img: "images/One Summer's Day.jpg",
        src: "One Summer's Day (From 'Spirited Away')"
    },
]

const animeStyleBtnPlayer = document.querySelector("#animeStyleBtnPlayer")

animeStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadanimeMusic(animeSongsIndex);
})

//load anime songs

let songStatusAnime;

function loadanimeMusic(indexNumber) {
    songName.innerHTML = animeStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = animeStyleSongs[indexNumber - 1].artist;
    songImage.src = animeStyleSongs[indexNumber - 1].img;
    animeSongControler.src = "tracks/Anime/" + animeStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = animeStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = animeStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.play()
    calmnessSongControler.pause();
    classicSongControler.pause();
    recentlySongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    canadaSongControler.pause();
    playlistsSongControler.pause();

    likedSongControler.pause();
    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    playSongBtn.addEventListener("click", () => {
    animeSongControler.play();
})

    pauseSongBtn.addEventListener("click", () => {
    animeSongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusAnime == true) {
        nextAnimeSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusAnime == true) {
        beforeAnimeSong();
    }
})

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = true;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;
}

playBtn.addEventListener("click", () => {
    animeSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    animeSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusAnime == true) {
        nextAnimeSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusAnime == true) {
        beforeAnimeSong();
    }
})

//click next song button developing

function nextAnimeSong() {
    animeSongsIndex++;
    animeSongsIndex > animeStyleSongs.length ? animeSongsIndex = 1 : animeStyleSongs = animeStyleSongs;

    loadanimeMusic(animeSongsIndex);

}

//click before song button developing

function beforeRapSong() {
    rapSongsIndex--;
    rapSongsIndex < 1 ? rapSongsIndex = rapStyleSongs.length : rapSongsIndex = rapSongsIndex;

    loadrapMusic(rapSongsIndex);

}

//updata progressBar with songTime

animeSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";


    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    animeSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = animeSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = animeSongControler.duration;

        animeSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = popSongControler.duration;
    
        popSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState8 = false;
let randomState8 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState8 == false) {
        repeatState8 = true;
    }
    else {
        repeatState8 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState8 == false) {
        randomState8 = true;
    }
    else {
        randomState8 = false;
    }
})

songRepeatBtn.addEventListener("click", () => {
    if (repeatState8 == false) {
        repeatState8 = true;
    }
    else {
        repeatState8 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState8 == false) {
        randomState8 = true;
    }
    else {
        randomState8 = false;
    }
})

animeSongControler.addEventListener("ended", () => {
    if (randomState8 == false && repeatState8 == false) {
        nextAnimeSong();
    }
    else if (randomState8 == false && repeatState8 == true) {
        animeSongControler.currentTime = 0;
        loadanimeMusic(animeSongsIndex);
        animeSongControler.play();
    }
    else if (randomState8 == true && repeatState8 == false) {
        let randomIndex8 = Math.floor((Math.random() * animeStyleSongs.length) + 1);

        do {
            randomIndex8 = Math.floor((Math.random() * animeStyleSongs.length) + 1);
        }
        while (animeSongsIndex == randomIndex8)

        animeSongsIndex = randomIndex8;
        loadanimeMusic(animeSongsIndex);
        animeSongControler.play();
    }
})

// set the songs in calmness sont style

const calmnessSongsImg = document.querySelectorAll(".calmnessSongsImg");
const calmnessSongsNames = document.querySelectorAll(".calmnessSongsNames");
const calmnessSongsArtistsNames = document.querySelectorAll(".calmnessSongsArtistName");
const calmnessSongsbuttonPlayer = document.querySelectorAll(".calmnessSongsbuttonPlayer");
const calmnessSongControler = document.querySelector("#calmnessSongControler");
const calmnessSongControlerSrc = document.querySelector("#calmnessSongControlerSrc");
let calmnessRecently = 0;
let calmnessName;
let calmnessImage;
let calmnessSong;
let calmnessArtistName;

for (let i = 0; i < calmnessSongsbuttonPlayer.length; i++) {
    calmnessSongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        calmnessRecently++;
        for (let j = 0; j < calmnessStyleSongs.length; j++) {
            if (calmnessSongsbuttonPlayer[i].dataset.songname == calmnessStyleSongs[j].src) {
                resentlyPlayImage.dataset.rcalmnesssongname = calmnessSong;
                resentlyPlayImage.dataset.rcalmnessnamesong = calmnessName;
                resentlyPlayImage.dataset.rcalmnesssongartistname = calmnessArtistName;
                resentlyPlayImage.dataset.rcalmnesssongimage = calmnessImage;
                songName.innerHTML = calmnessStyleSongs[j].name;
                songArtistName.innerHTML = calmnessStyleSongs[j].artist;
                sourceSongImg.innerHTML = calmnessStyleSongs[j].img;
                sourceSong.innerHTML = "tracks/Calmness/" + calmnessStyleSongs[j].src;
                songImage.src = calmnessStyleSongs[j].img;
                calmnessSongControler.src = "tracks/Calmness/" + calmnessStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = calmnessStyleSongs[i].name;
                middlePlayerimageBoxImg.src = calmnessStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.play();
                recentlySongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();
                likedSongControler.pause();

                    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

                calmnessSongsIndex = i + 1;
            }

        }
        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";

            playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

        songStatusCalmness = true;

        if (calmnessRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(calmnessName);

            resentlyPlayImage.dataset.rcalmnesssongname = calmnessSong;
            resentlyPlayImage.dataset.rcalmnessnamesong = calmnessName;
            resentlyPlayImage.dataset.rcalmnesssongartistname = calmnessArtistName;
            resentlyPlayImage.dataset.rcalmnesssongimage = calmnessImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = calmnessImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            calmnessRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarCalmness = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarCalmness.length; i++) {
        gozBazarCalmness[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarCalmness[i].dataset.rcalmnesssongname;
            songName.innerHTML = gozBazarCalmness[i].dataset.rcalmnessnamesong;
            songImage.src = gozBazarCalmness[i].dataset.rcalmnesssongimage;
            songArtistName.innerHTML = gozBazarCalmness[i].dataset.rcalmnesssongartistname;
            MiddleSongName.innerHTML = gozBazarCalmness[i].dataset.rcalmnessnamesong;
            middlePlayerimageBoxImg.src = gozBazarCalmness[i].dataset.rcalmnesssongimage;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            likedSongControler.pause();
            playlistsSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })
            playSongBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            
            pauseSongBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

calmnessSongsNames[0].innerHTML = "Conversation";
calmnessSongsNames[1].innerHTML = "Dusk Till Dawn";
calmnessSongsNames[2].innerHTML = "Felices los 4";
calmnessSongsNames[3].innerHTML = "In the Air Tonight";
calmnessSongsNames[4].innerHTML = "Little Wound";
calmnessSongsNames[5].innerHTML = "Love Is in the Air";
calmnessSongsNames[6].innerHTML = "One Kiss";
calmnessSongsNames[7].innerHTML = "Promises";
calmnessSongsNames[8].innerHTML = "Sleepless";
calmnessSongsNames[9].innerHTML = "Sunflower";
calmnessSongsNames[10].innerHTML = "Tenderness";
calmnessSongsNames[11].innerHTML = "The Moons Detriment";
calmnessSongsNames[12].innerHTML = "We are Young";
calmnessSongsNames[13].innerHTML = "What About Us";
calmnessSongsNames[14].innerHTML = "We are Young";
calmnessSongsNames[15].innerHTML = "We are Young";
calmnessSongsNames[16].innerHTML = "Tenderness";
calmnessSongsNames[17].innerHTML = "Promises";
calmnessSongsNames[18].innerHTML = "Promises";
calmnessSongsNames[19].innerHTML = "Tenderness";
calmnessSongsNames[20].innerHTML = "Tenderness";

calmnessSongsArtistsNames[0].innerHTML = "Locy rose";
calmnessSongsArtistsNames[1].innerHTML = "Amanda yang";
calmnessSongsArtistsNames[2].innerHTML = "Aberola";
calmnessSongsArtistsNames[3].innerHTML = "Tom speight";
calmnessSongsArtistsNames[4].innerHTML = "Violetta zironi";
calmnessSongsArtistsNames[5].innerHTML = "Flora martinez";
calmnessSongsArtistsNames[6].innerHTML = "Sara farell";
calmnessSongsArtistsNames[7].innerHTML = "Sara farell";
calmnessSongsArtistsNames[8].innerHTML = "Novo amor";
calmnessSongsArtistsNames[9].innerHTML = "Sara farell";
calmnessSongsArtistsNames[10].innerHTML = "Laura gibson";
calmnessSongsArtistsNames[11].innerHTML = "Shannon lay";
calmnessSongsArtistsNames[12].innerHTML = "The Mayries";
calmnessSongsArtistsNames[13].innerHTML = "Thomas daniel";
calmnessSongsArtistsNames[14].innerHTML = "The Mayries";
calmnessSongsArtistsNames[15].innerHTML = "The Mayries";
calmnessSongsArtistsNames[16].innerHTML = "Laura gibson";
calmnessSongsArtistsNames[17].innerHTML = "Sara farell";
calmnessSongsArtistsNames[18].innerHTML = "Sara farell";
calmnessSongsArtistsNames[19].innerHTML = "Laura gibson";
calmnessSongsArtistsNames[20].innerHTML = "Laura gibson";

calmnessSongsImg[0].src = "images/Conversation.jpg";
calmnessSongsImg[1].src = "images/Dusk Till Dawn.jpg";
calmnessSongsImg[2].src = "images/Felices los 4.jpg";
calmnessSongsImg[3].src = "images/In the Air Tonight.jpg";
calmnessSongsImg[4].src = "images/Little Wound.jpg";
calmnessSongsImg[5].src = "images/Love Is in the Air.jpg";
calmnessSongsImg[6].src = "images/One Kiss.jpg";
calmnessSongsImg[7].src = "images/Promises.png";
calmnessSongsImg[8].src = "images/Sleepless.jpg";
calmnessSongsImg[9].src = "images/Sunflower.jpg";
calmnessSongsImg[10].src = "images/Tenderness.jpg";
calmnessSongsImg[11].src = "images/The Moons Detriment.jpg";
calmnessSongsImg[12].src = "images/We are Young.jpg";
calmnessSongsImg[13].src = "images/What About Us.jpg";
calmnessSongsImg[14].src = "images/We are Young.jpg";
calmnessSongsImg[15].src = "images/We are Young.jpg";
calmnessSongsImg[16].src = "images/Tenderness.jpg";
calmnessSongsImg[17].src = "images/Promises.png";
calmnessSongsImg[18].src = "images/Promises.png";
calmnessSongsImg[19].src = "images/Tenderness.jpg";
calmnessSongsImg[20].src = "images/Tenderness.jpg";

let calmnessStyleSongs = [
    {
        name: "Conversation",
        artist: "Locy rose",
        img: "images/Conversation.jpg",
        src: "Conversation"
    },
    {
        name: "Dusk Till Dawn",
        artist: "Amanda yang",
        img: "images/Dusk Till Dawn.jpg",
        src: "Dusk Till Dawn"
    },
    {
        name: "Felices los 4",
        artist: "Aberola",
        img: "images/Felices los 4.jpg",
        src: "Felices los 4 (Acoustic Version)"
    },
    {
        name: "In the Air Tonight",
        artist: "Tom speight",
        img: "images/In the Air Tonight.jpg",
        src: "In the Air Tonight"
    },
    {
        name: "Little Wound",
        artist: "Violetta zironi",
        img: "images/Little Wound.jpg",
        src: "Little Wound"
    },
    {
        name: "Love Is in the Air",
        artist: "Flora martinez",
        img: "images/Love Is in the Air.jpg",
        src: "Love Is in the Air"
    },
    {
        name: "One Kiss",
        artist: "Sara farell",
        img: "images/One Kiss.jpg",
        src: "One Kiss"
    },
    {
        name: "Promises",
        artist: "Sara farell",
        img: "images/Promises.png",
        src: "Promises"
    },
    {
        name: "Sleepless",
        artist: "Novo amor",
        img: "images/Sleepless.jpg",
        src: "Sleepless"
    },
    {
        name: "Sunflower",
        artist: "Sara farell",
        img: "images/Sunflower.jpg",
        src: "Sunflower"
    },
    {
        name: "Tenderness",
        artist: "Laura gibson",
        img: "images/Tenderness.jpg",
        src: "Tenderness"
    },
    {
        name: "The Moons Detriment",
        artist: "Shannon lay",
        img: "images/The Moons Detriment.jpg",
        src: "The Moons Detriment"
    },
    {
        name: "We are Young",
        artist: "The Mayries",
        img: "images/We are Young.jpg",
        src: "We are Young"
    },
    {
        name: "What About Us",
        artist: "Thomas daniel",
        img: "images/What About Us.jpg",
        src: "What About Us"
    },
    {
        name: "We are Young",
        artist: "The Mayries",
        img: "images/We are Young.jpg",
        src: "We are Young"
    },
    {
        name: "We are Young",
        artist: "The Mayries",
        img: "images/We are Young.jpg",
        src: "We are Young"
    },
    {
        name: "Tenderness",
        artist: "Laura gibson",
        img: "images/Tenderness.jpg",
        src: "Tenderness"
    },
    {
        name: "Promises",
        artist: "Sara farell",
        img: "images/Promises.png",
        src: "Promises"
    },
    {
        name: "Promises",
        artist: "Sara farell",
        img: "images/Promises.png",
        src: "Promises"
    },
    {
        name: "Tenderness",
        artist: "Laura gibson",
        img: "images/Tenderness.jpg",
        src: "Tenderness"
    },
    {
        name: "Tenderness",
        artist: "Laura gibson",
        img: "images/Tenderness.jpg",
        src: "Tenderness"
    },
]

const calmnessStyleBtnPlayer = document.querySelector("#calmnessStyleBtnPlayer")

calmnessStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadcalmnessMusic(calmnessSongsIndex);
})

//load calmness songs

let songStatusCalmness;

function loadcalmnessMusic(indexNumber) {
    songName.innerHTML = calmnessStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = calmnessStyleSongs[indexNumber - 1].artist;
    songImage.src = calmnessStyleSongs[indexNumber - 1].img;
    calmnessSongControler.src = "tracks/Calmness/" + calmnessStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = calmnessStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = calmnessStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    recentlySongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.pause()
    calmnessSongControler.play();
    classicSongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    canadaSongControler.pause();
    likedSongControler.pause();
    playlistsSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    playSongBtn.addEventListener("click", () => {
    calmnessSongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    calmnessSongControler.pause();
})

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = true;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;

}

playBtn.addEventListener("click", () => {
    calmnessSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    calmnessSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusCalmness == true) {
        nextCalmnessSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusCalmness == true) {
        beforeCalmnessSong();
    }
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusCalmness == true) {
        nextCalmnessSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusCalmness == true) {
        beforeCalmnessSong();
    }
})

//click next song button developing

function nextCalmnessSong() {
    calmnessSongsIndex++;
    calmnessSongsIndex > calmnessStyleSongs.length ? calmnessSongsIndex = 1 : calmnessStyleSongs = calmnessStyleSongs;

    loadcalmnessMusic(calmnessSongsIndex);

}

//click before song button developing

function beforeCalmnessSong() {
    calmnessSongsIndex--;
    calmnessSongsIndex < 1 ? calmnessSongsIndex = calmnessStyleSongs.length : calmnessSongsIndex = calmnessSongsIndex;

    loadcalmnessMusic(calmnessSongsIndex);

}

//updata progressBar with songTime

calmnessSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";


    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    calmnessSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = calmnessSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = calmnessSongControler.duration;

        calmnessSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = calmnessSongControler.duration;
    
        calmnessSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState9 = false;
let randomState9 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState9 == false) {
        repeatState9 = true;
    }
    else {
        repeatState9 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState9 == false) {
        randomState9 = true;
    }
    else {
        randomState9 = false;
    }
})

songRepeatBtn.addEventListener("click", () => {
    if (repeatState9 == false) {
        repeatState9 = true;
    }
    else {
        repeatState9 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState9 == false) {
        randomState9 = true;
    }
    else {
        randomState9 = false;
    }
})

calmnessSongControler.addEventListener("ended", () => {
    if (randomState9 == false && repeatState9 == false) {
        nextCalmnessSong();
    }
    else if (randomState9 == false && repeatState9 == true) {
        calmnessSongControler.currentTime = 0;
        loadcalmnessMusic(calmnessSongsIndex);
        calmnessSongControler.play();
    }
    else if (randomState9 == true && repeatState9 == false) {
        let randomIndex9 = Math.floor((Math.random() * calmnessStyleSongs.length) + 1);

        do {
            randomIndex9 = Math.floor((Math.random() * calmnessStyleSongs.length) + 1);
        }
        while (calmnessSongsIndex == randomIndex9)

        calmnessSongsIndex = randomIndex9;
        loadcalmnessMusic(calmnessSongsIndex);
        calmnessSongControler.play();
    }
})

// set the songs in classic sont style

const classicSongsImg = document.querySelectorAll(".classicSongsImg");
const classicSongsNames = document.querySelectorAll(".classicSongsNames");
const classicSongsArtistsNames = document.querySelectorAll(".classicSongsArtistName");
const classicSongsbuttonPlayer = document.querySelectorAll(".classicSongsbuttonPlayer");
const classicSongControler = document.querySelector("#classicSongControler");
const classicSongControlerSrc = document.querySelector("#classicSongControlerSrc");
let classicRecently = 0;
let classicName;
let classicImage;
let classicSong;
let classicArtistName;

for (let i = 0; i < classicSongsbuttonPlayer.length; i++) {
    classicSongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        classicRecently++;
        for (let j = 0; j < classicStyleSongs.length; j++) {
            if (classicSongsbuttonPlayer[i].dataset.songname == classicStyleSongs[j].src) {
                classicName = classicStyleSongs[j].name;
                classicImage = "images/" + classicStyleSongs[j].img + ".jpg";
                classicSong = "tracks/Classic/" + classicStyleSongs[j].src + ".mp3";
                classicArtistName = classicStyleSongs[j].artist;
                sourceSongImg.innerHTML = classicStyleSongs[j].img;
                songName.innerHTML = classicStyleSongs[j].name;
                songArtistName.innerHTML = rapStyleSongs[j].artist;
                sourceSong.innerHTML = "tracks/classic/" + classicStyleSongs[j].src;
                songImage.src = classicStyleSongs[j].img;
                classicSongControler.src = "tracks/Classic/" + classicStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = classicStyleSongs[i].name;
                middlePlayerimageBoxImg.src = classicStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                recentlySongControler.pause();
                calmnessSongControler.pause();
                classicSongControler.play();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                likedSongControler.pause();

                    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";
    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
                playlistsSongControler.pause();


                classicSongsIndex = i + 1;
            }

        }
        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";
        
    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";
        songStatusClassic = true;

        if (classicRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(classicName);

            resentlyPlayImage.dataset.rclassicsongname = classicSong;
            resentlyPlayImage.dataset.rclassicnamesong = classicName;
            resentlyPlayImage.dataset.rclassicsongartistname = classicArtistName;
            resentlyPlayImage.dataset.rclassicsongimage = classicImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = classicImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            classicRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarClassic = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarClassic.length; i++) {
        gozBazarClassic[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarClassic[i].dataset.rclassicsongname;
            songName.innerHTML = gozBazarClassic[i].dataset.rclassicnamesong;
            songImage.src = gozBazarClassic[i].dataset.rclassicsongimage;
            songArtistName.innerHTML = gozBazarClassic[i].dataset.rclassicsongartistname;
            MiddleSongName.innerHTML = gozBazarClassic[i].dataset.rclassicnamesong;
            middlePlayerimageBoxImg.src = gozBazarClassic[i].dataset.rclassicsongimage;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            playlistsSongControler.pause();
            likedSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            likeEmptyBtn.style.display = "block";
            likeFullBtn.style.display = "none";
            likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        
            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";
        
            playSongBtn.addEventListener("click", () => {
            classicSongControler.play();
        })
        
        pauseSongBtn.addEventListener("click", () => {
            classicSongControler.pause();
        })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";


                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

classicSongsNames[0].innerHTML = "Baby I Need Your Loving";
classicSongsNames[1].innerHTML = "I'm Sorry";
classicSongsNames[2].innerHTML = "It's Not for Me to Say";
classicSongsNames[3].innerHTML = "My Cherie Amour";
classicSongsNames[4].innerHTML = "My Guy";
classicSongsNames[5].innerHTML = "Only You";
classicSongsNames[6].innerHTML = "Puppy Love";
classicSongsNames[7].innerHTML = "Put Your Head On My Shoulder";
classicSongsNames[8].innerHTML = "Respect";
classicSongsNames[9].innerHTML = "Rock-A-Bye Your Baby";
classicSongsNames[10].innerHTML = "Stand by Me";
classicSongsNames[11].innerHTML = "Stop! In The Name Of Love";
classicSongsNames[12].innerHTML = "The Loco-Motion";
classicSongsNames[13].innerHTML = "Tonight You Belong To Me";
classicSongsNames[14].innerHTML = "You, You, You";
classicSongsNames[15].innerHTML = "The Loco-Motion";
classicSongsNames[16].innerHTML = "You, You, You";
classicSongsNames[17].innerHTML = "You, You, You";
classicSongsNames[18].innerHTML = "Stand by Me";
classicSongsNames[19].innerHTML = "The Loco-Motion";
classicSongsNames[20].innerHTML = "The Loco-Motion";

classicSongsArtistsNames[0].innerHTML = "Four tops";
classicSongsArtistsNames[1].innerHTML = "Brande lee";
classicSongsArtistsNames[2].innerHTML = "Johnny mathis";
classicSongsArtistsNames[3].innerHTML = "Stevie wonder";
classicSongsArtistsNames[4].innerHTML = "Mary wells";
classicSongsArtistsNames[5].innerHTML = "Franck pourcel";
classicSongsArtistsNames[6].innerHTML = "Paul anka";
classicSongsArtistsNames[7].innerHTML = "Paul anka";
classicSongsArtistsNames[8].innerHTML = "Aretha franklin";
classicSongsArtistsNames[9].innerHTML = "Jerru lewis";
classicSongsArtistsNames[10].innerHTML = "Ben E";
classicSongsArtistsNames[11].innerHTML = "The supremes";
classicSongsArtistsNames[12].innerHTML = "Little eva";
classicSongsArtistsNames[13].innerHTML = "Patience & prude";
classicSongsArtistsNames[14].innerHTML = "The ames brothers";
classicSongsArtistsNames[15].innerHTML = "Little eva";
classicSongsArtistsNames[16].innerHTML = "The ames brothers";
classicSongsArtistsNames[17].innerHTML = "The ames brothers";
classicSongsArtistsNames[18].innerHTML = "Ben E";
classicSongsArtistsNames[19].innerHTML = "Little eva";
classicSongsArtistsNames[20].innerHTML = "Little eva";

classicSongsImg[0].src = "images/Baby I Need Your Loving.jpg";
classicSongsImg[1].src = "images/I'm Sorry.jpg";
classicSongsImg[2].src = "images/It's Not for Me to Say.jpg";
classicSongsImg[3].src = "images/My Cherie Amour.jpg";
classicSongsImg[4].src = "images/My Guy.jpg";
classicSongsImg[5].src = "images/Only You.jpg";
classicSongsImg[6].src = "images/Puppy Love.jpg";
classicSongsImg[7].src = "images/Put Your Head On My Shoulder.jpg";
classicSongsImg[8].src = "images/Respect.jpg";
classicSongsImg[9].src = "images/Rock-A-Bye Your Baby.jpg";
classicSongsImg[10].src = "images/Stand by Me.jpg";
classicSongsImg[11].src = "images/Stop! In The Name Of Love.png";
classicSongsImg[12].src = "images/The Loco-Motion.jpg";
classicSongsImg[13].src = "images/Tonight You Belong To Me.jpg";
classicSongsImg[14].src = "images/You, You, You.jpg";
classicSongsImg[15].src = "images/The Loco-Motion.jpg";
classicSongsImg[16].src = "images/You, You, You.jpg";
classicSongsImg[17].src = "images/You, You, You.jpg";
classicSongsImg[18].src = "images/Stand by Me.jpg";
classicSongsImg[19].src = "images/The Loco-Motion.jpg";
classicSongsImg[20].src = "images/The Loco-Motion.jpg";

let classicStyleSongs = [
    {
        name: "Baby I Need Your Loving",
        artist: "Locy rose",
        img: "images/Baby I Need Your Loving.jpg",
        src: "Baby I Need Your Loving"
    },
    {
        name: "I'm Sorry",
        artist: "Amanda yang",
        img: "images/I'm Sorry.jpg",
        src: "I'm Sorry (Single Version)"
    },
    {
        name: "It's Not for Me to Say",
        artist: "Aberola",
        img: "images/It's Not for Me to Say.jpg",
        src: "It's Not for Me to Say (From the MGM Film _Lizzie_)"
    },
    {
        name: "My Cherie Amour",
        artist: "Tom speight",
        img: "images/My Cherie Amour.jpg",
        src: "My Cherie Amour"
    },
    {
        name: "My Guy",
        artist: "Violetta zironi",
        img: "images/My Guy.jpg",
        src: "My Guy"
    },
    {
        name: "Only You",
        artist: "Flora martinez",
        img: "images/Only You.jpg",
        src: "Only You"
    },
    {
        name: "Puppy Love",
        artist: "Sara farell",
        img: "images/Puppy Love.jpg",
        src: "Puppy Love"
    },
    {
        name: "Put Your Head On My Shoulder",
        artist: "Sara farell",
        img: "images/Put Your Head On My Shoulder.png",
        src: "Put Your Head On My Shoulder"
    },
    {
        name: "Respect",
        artist: "Novo amor",
        img: "images/Respect.jpg",
        src: "Respect"
    },
    {
        name: "Rock-A-Bye Your Baby",
        artist: "Sara farell",
        img: "images/Rock-A-Bye Your Baby.jpg",
        src: "Rock-A-Bye Your Baby With A Dixie Melody"
    },
    {
        name: "Stand by Me",
        artist: "Laura gibson",
        img: "images/Stand by Me.jpg",
        src: "Stand by Me"
    },
    {
        name: "Stop! In The Name Of Love",
        artist: "Shannon lay",
        img: "images/Stop! In The Name Of Lovet.png",
        src: "Stop! In The Name Of Love"
    },
    {
        name: "The Loco-Motion",
        artist: "The Mayries",
        img: "images/The Loco-Motion.jpg",
        src: "The Loco-Motion (Single Version)"
    },
    {
        name: "Tonight You Belong To Me",
        artist: "Thomas daniel",
        img: "images/Tonight You Belong To Me.jpg",
        src: "Tonight You Belong To Me"
    },
    {
        name: "You, You, You",
        artist: "The Mayries",
        img: "images/You, You, You.jpg",
        src: "You, You, You"
    },
    {
        name: "The Loco-Motion",
        artist: "The Mayries",
        img: "images/The Loco-Motion.jpg",
        src: "The Loco-Motion (Single Version)"
    },
    {
        name: "You, You, You",
        artist: "Laura gibson",
        img: "images/You, You, You.jpg",
        src: "You, You, You"
    },
    {
        name: "You, You, You",
        artist: "Sara farell",
        img: "images/You, You, You.png",
        src: "You, You, You"
    },
    {
        name: "Stand by Me",
        artist: "Sara farell",
        img: "images/Stand by Me.png",
        src: "Stand by Me"
    },
    {
        name: "The Loco-Motion",
        artist: "Laura gibson",
        img: "images/The Loco-Motion.jpg",
        src: "The Loco-Motion (Single Version)"
    },
    {
        name: "The Loco-Motion",
        artist: "Laura gibson",
        img: "images/The Loco-Motion.jpg",
        src: "The Loco-Motion (Single Version)"
    },
]

const classicStyleBtnPlayer = document.querySelector("#classicStyleBtnPlayer")

classicStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadclassicMusic(classicSongsIndex);
})

//load classic songs

let songStatusClassic;

function loadclassicMusic(indexNumber) {
    songName.innerHTML = classicStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = classicStyleSongs[indexNumber - 1].artist;
    songImage.src = classicStyleSongs[indexNumber - 1].img;
    classicSongControler.src = "tracks/Classic/" + classicStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = classicStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = classicStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    playlistsSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    recentlySongControler.pause();
    animeSongControler.pause()
    calmnessSongControler.pause();
    classicSongControler.play();
    russianSongControler.pause();
    heavySongControler.pause();
    canadaSongControler.pause();
    likedSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";

    playSongBtn.addEventListener("click", () => {
    classicSongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    classicSongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
    if (songStatusClassic == true) {
        nextClassicSong();
    }
})

beforeSongBtn.addEventListener("click", () => {
    if (songStatusClassic == true) {
        beforeClassicSong();
    }
})

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = true;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = false;

}

playBtn.addEventListener("click", () => {
    classicSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    classicSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusClassic == true) {
        nextClassicSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusClassic == true) {
        beforeClassicSong();
    }
})

//click next song button developing

function nextClassicSong() {
    classicSongsIndex++;
    classicSongsIndex > classicStyleSongs.length ? classicSongsIndex = 1 : classicStyleSongs = classicStyleSongs;

    loadclassicMusic(classicSongsIndex);

}

//click before song button developing

function beforeClassicSong() {
    classicSongsIndex--;
    classicSongsIndex < 1 ? classicSongsIndex = classicStyleSongs.length : classicSongsIndex = classicSongsIndex;

    loadclassicMusic(classicSongsIndex);

}

//updata progressBar with songTime

classicSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";

    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    classicSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = classicSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = classicSongControler.duration;

        classicSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = classicSongControler.duration;
    
        classicSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState10 = false;
let randomState10 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState10 == false) {
        repeatState10 = true;
    }
    else {
        repeatState10 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState10 == false) {
        randomState10 = true;
    }
    else {
        randomState10 = false;
    }
})

songRepeatBtn.addEventListener("click", () => {
    if (repeatState10 == false) {
        repeatState10 = true;
    }
    else {
        repeatState10 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState10 == false) {
        randomState10 = true;
    }
    else {
        randomState10 = false;
    }
})

classicSongControler.addEventListener("ended", () => {
    if (randomState10 == false && repeatState10 == false) {
        nextClassicSong();
    }
    else if (randomState10 == false && repeatState10 == true) {
        classicSongControler.currentTime = 0;
        loadclassicMusic(classicSongsIndex);
        classicSongControler.play();
    }
    else if (randomState10 == true && repeatState10 == false) {
        let randomIndex10 = Math.floor((Math.random() * classicStyleSongs.length) + 1);

        do {
            randomIndex10 = Math.floor((Math.random() * classicStyleSongs.length) + 1);
        }
        while (classicSongsIndex == randomIndex10)

        classicSongsIndex = randomIndex10;
        loadclassicMusic(classicSongsIndex);
        classicSongControler.play();
    }
})

// set the songs in russian sont style

const russianSongsImg = document.querySelectorAll(".russianSongsImg");
const russianSongsNames = document.querySelectorAll(".russianSongsNames");
const russianSongsArtistsNames = document.querySelectorAll(".russianSongsArtistName");
const russianSongsbuttonPlayer = document.querySelectorAll(".russianSongsbuttonPlayer");
const russianSongControler = document.querySelector("#russianSongControler");
const russianSongControlerSrc = document.querySelector("#russianSongControlerSrc");
let russianRecently = 0;
let russianName;
let russianImage;
let russianSong;
let russianArtistName;

for (let i = 0; i < russianSongsbuttonPlayer.length; i++) {
    russianSongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        russianRecently++;
        for (let j = 0; j < russianStyleSongs.length; j++) {
            if (russianSongsbuttonPlayer[i].dataset.songname == russianStyleSongs[j].src) {
                russianName = russianStyleSongs[j].name;
                russianImage = "images/" + russianStyleSongs[j].img + ".jpg";
                russianSong = "tracks/Russian/" + russianStyleSongs[j].src + ".mp3";
                russianArtistName = russianStyleSongs[j].artist;
                sourceSongImg.innerHTML = russianStyleSongs[j].img;
                songName.innerHTML = russianStyleSongs[j].name;
                songArtistName.innerHTML = russianStyleSongs[j].artist;
                songImage.src = russianStyleSongs[j].img;
                sourceSong.innerHTML = "tracks/Russain/" + russianStyleSongs[j].src;
                russianSongControler.src = "tracks/Russian/" + russianStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = russianStyleSongs[i].name;
                middlePlayerimageBoxImg.src =  russianStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                recentlySongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                classicSongControler.pause();
                russianSongControler.play();
                playlistsSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                likedSongControler.pause();

                unliked.style.display = "block";
                liked.style.display = "none";
                liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

                russianSongsIndex = i + 1;
            }

        }

        likeEmptyBtn.style.display = "block";
        likeFullBtn.style.display = "none";
        likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
    
        playSongBtn.style.display = "none";
        playSongBtn.style.fill = "red";
        pauseSongBtn.style.fill = "red";
        pauseSongBtn.style.display = "block";

        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";
        songStatusRussian = true;

        if (russianRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(russianName);

            resentlyPlayImage.dataset.rrussiansongname = russianSong;
            resentlyPlayImage.dataset.rrussiannamesong = russianName;
            resentlyPlayImage.dataset.rrussiansongartistname = russianArtistName;
            resentlyPlayImage.dataset.rrussiansongimage = russianImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = russianImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            russianRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarRussian = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarRussian.length; i++) {
        gozBazarRussian[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarRussian[i].dataset.rrussiansongname;
            songName.innerHTML = gozBazarRussian[i].dataset.rrussiannamesong;
            songImage.src = gozBazarRussian[i].dataset.rrussiansongimage;
            songArtistName.innerHTML = gozBazarRussian[i].dataset.rrussiansongartistname;
            MiddleSongName.innerHTML = gozBazarRussian[i].dataset.rrussiannamesong;
            middlePlayerimageBoxImg.src = gozBazarRussian[i].dataset.rrussiansongimage;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            playlistsSongControler.pause();
            canadaSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            likeEmptyBtn.style.display = "block";
            likeFullBtn.style.display = "none";
            likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        
            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";
        
            playSongBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })

            pauseSongBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

russianSongsNames[0].innerHTML = "gio-pika";
russianSongsNames[1].innerHTML = "re";
russianSongsNames[2].innerHTML = "polovina";
russianSongsNames[3].innerHTML = "mansouri-sho";
russianSongsNames[4].innerHTML = "tanir-and-tyomcha-da-da";
russianSongsNames[5].innerHTML = "мирзаев-без-тебя-я-не";
russianSongsNames[6].innerHTML = "dioronabeat";
russianSongsNames[7].innerHTML = "gafur-луна";
russianSongsNames[8].innerHTML = "ic3peak";
russianSongsNames[9].innerHTML = "девочка";
russianSongsNames[10].innerHTML = "morgenshtern";
russianSongsNames[11].innerHTML = "ramzan_abitov_minimum";
russianSongsNames[12].innerHTML = "rap";
russianSongsNames[13].innerHTML = "childhood";
russianSongsNames[14].innerHTML = "ганвест-никотин";
russianSongsNames[15].innerHTML = "дикая";
russianSongsNames[16].innerHTML = "фонтанчик";
russianSongsNames[17].innerHTML = "дикая";
russianSongsNames[18].innerHTML = "дикая";
russianSongsNames[19].innerHTML = "childhood";
russianSongsNames[20].innerHTML = "childhood";

russianSongsArtistsNames[0].innerHTML = "Russian";
russianSongsArtistsNames[1].innerHTML = "Russian";
russianSongsArtistsNames[2].innerHTML = "Russian";
russianSongsArtistsNames[3].innerHTML = "Russian";
russianSongsArtistsNames[4].innerHTML = "Russian";
russianSongsArtistsNames[5].innerHTML = "Russian";
russianSongsArtistsNames[6].innerHTML = "Russian";
russianSongsArtistsNames[7].innerHTML = "Russian";
russianSongsArtistsNames[8].innerHTML = "Russian";
russianSongsArtistsNames[9].innerHTML = "Russian";
russianSongsArtistsNames[10].innerHTML = "Russian";
russianSongsArtistsNames[11].innerHTML = "Russian";
russianSongsArtistsNames[12].innerHTML = "Russian";
russianSongsArtistsNames[13].innerHTML = "Russian";
russianSongsArtistsNames[14].innerHTML = "Russian";
russianSongsArtistsNames[15].innerHTML = "Russian";
russianSongsArtistsNames[16].innerHTML = "Russian";
russianSongsArtistsNames[17].innerHTML = "Russian";
russianSongsArtistsNames[18].innerHTML = "Russian";
russianSongsArtistsNames[19].innerHTML = "Russian";
russianSongsArtistsNames[20].innerHTML = "Russian";

russianSongsImg[0].src = "images/gio-pika.jpg";
russianSongsImg[1].src = "images/re.jpg";
russianSongsImg[2].src = "images/polovina.jpg";
russianSongsImg[3].src = "images/mansouri-sho.jpg";
russianSongsImg[4].src = "images/tanir-and-tyomcha-da-da.jpg";
russianSongsImg[5].src = "images/мирзаев-без-тебя-я-не.jpg";
russianSongsImg[6].src = "images/dioronabeat.jpg";
russianSongsImg[7].src = "images/gafur-луна.jpg";
russianSongsImg[8].src = "images/ic3peak.jpg";
russianSongsImg[9].src = "images/девочка.jpg";
russianSongsImg[10].src = "images/morgenshtern.jpg";
russianSongsImg[11].src = "images/ramzan_abitov_minimum.jpg";
russianSongsImg[12].src = "images/rap.jpg";
russianSongsImg[13].src = "images/childhood.jpg";
russianSongsImg[14].src = "images/ганвест-никотин.jpg";
russianSongsImg[15].src = "images/дикая.jpg";
russianSongsImg[16].src = "images/фонтанчик.jpg";
russianSongsImg[17].src = "images/дикая.jpg";
russianSongsImg[18].src = "images/дикая.jpg";
russianSongsImg[19].src = "images/childhood.jpg";
russianSongsImg[20].src = "images/childhood.jpg";

let russianStyleSongs = [
    {
        name: "gio-pika",
        artist: "Russian",
        img: "images/gio-pika.jpg",
        src: "2021-adam-maniac-remix-gio-pika"
    },
    {
        name: "re",
        artist: "Russian",
        img: "images/re.jpg",
        src: "2021ka-re"
    },
    {
        name: "polovina",
        artist: "Russian",
        img: "images/polovina.jpg",
        src: "2021-ka-re-polovina"
    },
    {
        name: "mansouri-sho",
        artist: "Russian",
        img: "images/mansouri-sho.jpg",
        src: "2021sasan-mansouri-sho"
    },
    {
        name: "tanir-and-tyomcha-da-da",
        artist: "Russian",
        img: "images/tanir-and-tyomcha-da-da.jpg",
        src: "2021tanir-and-tyomcha-da-da"
    },
    {
        name: "мирзаев-без-тебя-я-не",
        artist: "Russian",
        img: "images/мирзаев-без-тебя-я-не.jpg",
        src: "2022вусал-мирзаев-без-тебя-я-не"
    },
    {
        name: "dioronabeat",
        artist: "Russian",
        img: "images/dioronabeat.jpg",
        src: "dioronabeat"
    },
    {
        name: "gafur-луна",
        artist: "Russian",
        img: "images/gafur-луна.jpg",
        src: "gafur-луна-"
    },
    {
        name: "ic3peak",
        artist: "Russian",
        img: "images/ic3peak.jpg",
        src: "ic3peak--trrst[remix]"
    },
    {
        name: "девочка",
        artist: "Russian",
        img: "images/девочка.jpg",
        src: "miko-девочка-в"
    },
    {
        name: "morgenshtern",
        artist: "Russian",
        img: "images/morgenshtern.jpg",
        src: "morgenshtern"
    },
    {
        name: "ramzan_abitov_minimum",
        artist: "Russian",
        img: "images/ramzan_abitov_minimum.jpg",
        src: "ramzan_abitov_minimum_t2"
    },
    {
        name: "rap",
        artist: "Russian",
        img: "images/rap.jpg",
        src: "rap"
    },
    {
        name: "childhood",
        artist: "Russian",
        img: "images/childhood.jpg",
        src: "rauf_faik_childhood_t2"
    },
    {
        name: "ганвест-никотин",
        artist: "Russian",
        img: "images/ганвест-никотин.jpg",
        src: "ганвест-никотин[remix]"
    },
    {
        name: "дикая",
        artist: "Russian",
        img: "images/дикая.jpg",
        src: "дикая"
    },
    {
        name: "фонтанчик",
        artist: "Russian",
        img: "images/фонтанчик.jpg",
        src: "фонтанчик-с"
    },
    {
        name: "дикая",
        artist: "Russian",
        img: "images/дикая.jpg",
        src: "дикая"
    },
    {
        name: "дикая",
        artist: "Russian",
        img: "images/дикая.jpg",
        src: "дикая"
    },
    {
        name: "childhood",
        artist: "Russian",
        img: "images/childhood.jpg",
        src: "rauf_faik_childhood_t2"
    },
    {
        name: "childhood",
        artist: "Russian",
        img: "images/childhood.jpg",
        src: "Trauf_faik_childhood_t2"
    },
]

const russianStyleBtnPlayer = document.querySelector("#russianStyleBtnPlayer")

russianStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadrussianMusic(russianSongsIndex);
})

//load russian songs

let songStatusRussian;

function loadrussianMusic(indexNumber) {
    songName.innerHTML = russianStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = russianStyleSongs[indexNumber - 1].artist;
    songImage.src = russianStyleSongs[indexNumber - 1].img;
    russianSongControler.src = "tracks/Russian/" + russianStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = russianStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = russianStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    recentlySongControler.pause();
    playlistsSongControler.pause();
    animeSongControler.pause()
    calmnessSongControler.pause();
    classicSongControler.pause();
    russianSongControler.play();
    heavySongControler.pause();
    canadaSongControler.pause();
    likedSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = true;
    songStatusHeavy = false;
    songStatusCanada = false;

}

playBtn.addEventListener("click", () => {
    russianSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    russianSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusRussian == true) {
        nextRussianSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusRussian == true) {
        beforeRussianSong();
    }
})
likeEmptyBtn.style.display = "block";
likeFullBtn.style.display = "none";
likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

playSongBtn.style.display = "none";
playSongBtn.style.fill = "red";
pauseSongBtn.style.fill = "red";
pauseSongBtn.style.display = "block";

playSongBtn.addEventListener("click", () => {
    russianSongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    russianSongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
if (songStatusRussian == true) {
    nextRussianSong();
}
})

beforeSongBtn.addEventListener("click", () => {
if (songStatusRussian == true) {
    beforeRussianSong();
}
})

//click next song button developing

function nextRussianSong() {
    russianSongsIndex++;
    russianSongsIndex > russianStyleSongs.length ? russianSongsIndex = 1 : russianStyleSongs = russianStyleSongs;

    loadrussianMusic(russianSongsIndex);

}

//click before song button developing

function beforeRussianSong() {
    russianSongsIndex--;
    russianSongsIndex < 1 ? russianSongsIndex = russianStyleSongs.length : russianSongsIndex = russianSongsIndex;

    loadrussianMusic(russianSongsIndex);

}

//updata progressBar with songTime

russianSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";


    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    russianSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = russianSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = russianSongControler.duration;

        russianSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = russianSongControler.duration;
    
        russianSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState11 = false;
let randomState11 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState11 == false) {
        repeatState11 = true;
    }
    else {
        repeatState11 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState11 == false) {
        randomState11 = true;
    }
    else {
        randomState11 = false;
    }
})

songRepeatBtn.addEventListener("click", () => {
    if (repeatState11 == false) {
        repeatState11 = true;
    }
    else {
        repeatState11 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState11 == false) {
        randomState11 = true;
    }
    else {
        randomState11 = false;
    }
})

russianSongControler.addEventListener("ended", () => {
    if (randomState11 == false && repeatState11 == false) {
        nextRussianSong();
    }
    else if (randomState11 == false && repeatState11 == true) {
        russianSongControler.currentTime = 0;
        loadrussianMusic(russianSongsIndex);
        russianSongControler.play();
    }
    else if (randomState11 == true && repeatState11 == false) {
        let randomIndex11 = Math.floor((Math.random() * russianStyleSongs.length) + 1);

        do {
            randomIndex11 = Math.floor((Math.random() * russianStyleSongs.length) + 1);
        }
        while (russianSongsIndex == randomIndex11)

        russianSongsIndex = randomIndex11;
        loadrussianMusic(russianSongsIndex);
        russianSongControler.play();
    }
})

// set the songs in heavy sont style

const heavySongsImg = document.querySelectorAll(".heavySongsImg");
const heavySongsNames = document.querySelectorAll(".heavySongsNames");
const heavySongsArtistsNames = document.querySelectorAll(".heavySongsArtistName");
const heavySongsbuttonPlayer = document.querySelectorAll(".heavySongsbuttonPlayer");
const heavySongControler = document.querySelector("#heavySongControler");
const heavySongControlerSrc = document.querySelector("#heavySongControlerSrc");
let heavyRecently = 0;
let heavyName;
let heavyImage;
let heavySong;
let heavyArtistName;

for (let i = 0; i < heavySongsbuttonPlayer.length; i++) {
    heavySongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        heavyRecently++;
        for (let j = 0; j < heavyStyleSongs.length; j++) {
            if (heavySongsbuttonPlayer[i].dataset.songname == heavyStyleSongs[j].src) {
                songName.innerHTML = heavyStyleSongs[j].name;
                songArtistName.innerHTML = heavyStyleSongs[j].artist;
                songImage.src = heavyStyleSongs[j].img;
                heavySongControler.src = "tracks/Heavy/" + heavyStyleSongs[j].src + ".mp3";
                sourceSongImg.innerHTML = heavyStyleSongs[j].img;
                sourceSong.innerHTML = "tracks/Heavy/" + heavyStyleSongs[j].src;
                MiddleSongName.innerHTML = heavyStyleSongs[i].name;
                middlePlayerimageBoxImg.src = heavyStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                classicSongControler.pause();
                playlistsSongControler.pause();
                recentlySongControler.pause();
                russianSongControler.pause();
                heavySongControler.play();
                canadaSongControler.pause();
                likedSongControler.pause();

                    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block";


                heavySongsIndex = i + 1;
            }

        }
        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";
        songStatusHeavy = true;

        if (popRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(heavyName);

            resentlyPlayImage.dataset.rheavysongname = heavySong;
            resentlyPlayImage.dataset.rheavynamesong = heavyName;
            resentlyPlayImage.dataset.rheavysongartistname = heavyArtistName;
            resentlyPlayImage.dataset.rheavysongimage = heavyImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = heavyImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            heavyRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarHeavy = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarHeavy.length; i++) {
        gozBazarHeavy[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarHeavy[i].dataset.rheavysongname;
            songName.innerHTML = gozBazarHeavy[i].dataset.rheavynamesong;
            songImage.src = gozBazarHeavy[i].dataset.rheavysongimage;
            songArtistName.innerHTML = gozBazarHeavy[i].dataset.rheavysongartistname;
            MiddleSongName.innerHTML = gozBazarHeavy[i].dataset.rheavynamesong;
            middlePlayerimageBoxImg.src = gozBazarHeavy[i].dataset.rheavysongimage;
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            playlistsSongControler.pause();
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            likedSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            likeEmptyBtn.style.display = "block";
            likeFullBtn.style.display = "none";
            likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        
            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";
        
            playSongBtn.addEventListener("click", () => {
                russianSongControler.play();
            })
        
            pauseSongBtn.addEventListener("click", () => {
                russianSongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";


                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

heavySongsNames[0].innerHTML = "All Nigh";
heavySongsNames[1].innerHTML = "LA LA LA";
heavySongsNames[2].innerHTML = "You And I";
heavySongsNames[3].innerHTML = "Sweet";
heavySongsNames[4].innerHTML = "Bugatti";
heavySongsNames[5].innerHTML = "Sorry";
heavySongsNames[6].innerHTML = "Sensei";
heavySongsNames[7].innerHTML = "Gang";
heavySongsNames[8].innerHTML = "If I Can";
heavySongsNames[9].innerHTML = "You And I";
heavySongsNames[10].innerHTML = "If I Can";
heavySongsNames[11].innerHTML = "You And I";
heavySongsNames[12].innerHTML = "If I Can";
heavySongsNames[13].innerHTML = "You And I";
heavySongsNames[14].innerHTML = "If I Can";
heavySongsNames[15].innerHTML = "You And I";
heavySongsNames[16].innerHTML = "If I Can";
heavySongsNames[17].innerHTML = "You And I";
heavySongsNames[18].innerHTML = "If I Can";
heavySongsNames[19].innerHTML = "You And I";
heavySongsNames[20].innerHTML = "If I Can";

heavySongsArtistsNames[0].innerHTML = "Russian";
heavySongsArtistsNames[1].innerHTML = "Russian";
heavySongsArtistsNames[2].innerHTML = "Russian";
heavySongsArtistsNames[3].innerHTML = "Russian";
heavySongsArtistsNames[4].innerHTML = "Russian";
heavySongsArtistsNames[5].innerHTML = "Russian";
heavySongsArtistsNames[6].innerHTML = "Russian";
heavySongsArtistsNames[7].innerHTML = "Russian";
heavySongsArtistsNames[8].innerHTML = "Russian";
heavySongsArtistsNames[9].innerHTML = "Russian";
heavySongsArtistsNames[10].innerHTML = "Russian";
heavySongsArtistsNames[11].innerHTML = "Russian";
heavySongsArtistsNames[12].innerHTML = "Russian";
heavySongsArtistsNames[13].innerHTML = "Russian";
heavySongsArtistsNames[14].innerHTML = "Russian";
heavySongsArtistsNames[15].innerHTML = "Russian";
heavySongsArtistsNames[16].innerHTML = "Russian";
heavySongsArtistsNames[17].innerHTML = "Russian";
heavySongsArtistsNames[18].innerHTML = "Russian";
heavySongsArtistsNames[19].innerHTML = "Russian";
heavySongsArtistsNames[20].innerHTML = "Russian";

heavySongsImg[0].src = "images/All Nigh.jpg";
heavySongsImg[1].src = "images/LA LA LA.jpg";
heavySongsImg[2].src = "images/You And I.png";
heavySongsImg[3].src = "images/Sweet.jpg";
heavySongsImg[4].src = "images/Bugatti.jpg";
heavySongsImg[5].src = "images/Sorry.jpg";
heavySongsImg[6].src = "images/Sensei.jpg";
heavySongsImg[7].src = "images/Gang.jpg";
heavySongsImg[8].src = "images/If I Can.jpg";
heavySongsImg[9].src = "images/You And I.png";
heavySongsImg[10].src = "images/If I Can.jpg";
heavySongsImg[11].src = "images/You And I.png";
heavySongsImg[12].src = "images/If I Can.jpg";
heavySongsImg[13].src = "images/You And I.png";
heavySongsImg[14].src = "images/If I Can.jpg";
heavySongsImg[15].src = "images/You And I.png";
heavySongsImg[16].src = "images/If I Can.jpg";
heavySongsImg[17].src = "images/You And I.png";
heavySongsImg[18].src = "images/If I Can.jpg";
heavySongsImg[19].src = "images/You And I.png";
heavySongsImg[20].src = "images/If I Can.jpg";

let heavyStyleSongs = [
    {
        name: "All Night",
        artist: "Astian",
        img: "images/All Nigh.jpg",
        src: "1. Astian, WYR GEMI - All Night (320)"
    },
    {
        name: "LA LA LA",
        artist: "Azvre",
        img: "images/LA LA LA.jpg",
        src: "1. AZVRE, PRYCEWELL - LA LA LA (320)"
    },
    {
        name: "You And I",
        artist: "Bladdy",
        img: "images/You And I.png",
        src: "1. Bladdy-T - You And I (320)"
    },
    {
        name: "Sweet",
        artist: "Butch U",
        img: "images/Sweet.jpg",
        src: "1. Butch U - Sweet (320)"
    },
    {
        name: "Bugatti",
        artist: "Alex",
        img: "images/Bugatti.jpg",
        src: "1. Dimax White, Alex Lande - Bugatti (320)"
    },
    {
        name: "Sorry",
        artist: "Dipiens",
        img: "images/Sorry.jpg",
        src: "1. DIPIENS, RETROFRIEND - Sorry (320)"
    },
    {
        name: "Sensei",
        artist: "Libercio",
        img: "images/Sensei.jpg",
        src: "1. Libercio - Sensei (320)"
    },
    {
        name: "Gang",
        artist: "Mier",
        img: "images/Gang.jpg",
        src: "1. Mier - Gang (320)"
    },
    {
        name: "If I Can",
        artist: "Rejackt",
        img: "images/If I Can.jpg",
        src: "1. Rejackt - If I Can (320)"
    },
    {
        name: "You And I",
        artist: "Bladdy",
        img: "images/You And I.png",
        src: "1. Bladdy-T - You And I (320)"
    },
    {
        name: "If I Can",
        artist: "Rejackt",
        img: "images/If I Can.jpg",
        src: "1. Rejackt - If I Can (320)"
    },
    {
        name: "You And I",
        artist: "Bladdy",
        img: "images/You And I.jpg",
        src: "1. Bladdy-T - You And I (320)"
    },
    {
        name: "If I Can",
        artist: "Rejackt",
        img: "images/If I Can.jpg",
        src: "1. Rejackt - If I Can (320)"
    },
    {
        name: "You And I",
        artist: "Bladdy",
        img: "images/You And I.png",
        src: "1. Bladdy-T - You And I (320)"
    },
    {
        name: "If I Can",
        artist: "Rejackt",
        img: "images/If I Can.jpg",
        src: "1. Rejackt - If I Can (320)"
    },
    {
        name: "You And I",
        artist: "Bladdy",
        img: "images/You And I.png",
        src: "1. Bladdy-T - You And I (320)"
    },
    {
        name: "If I Can",
        artist: "Rejackt",
        img: "images/If I Can.jpg",
        src: "1. Rejackt - If I Can (320)"
    },
    {
        name: "You And I",
        artist: "Bladdy",
        img: "images/You And I.png",
        src: "1. Bladdy-T - You And I (320)"
    },
    {
        name: "If I Can",
        artist: "Rejackt",
        img: "images/If I Can.jpg",
        src: "1. Rejackt - If I Can (320)"
    },
    {
        name: "You And I",
        artist: "Bladdy",
        img: "images/You And I.png",
        src: "1. Bladdy-T - You And I (320)"
    },
    {
        name: "If I Can",
        artist: "Rejackt",
        img: "images/If I Can.jpg",
        src: "1. Rejackt - If I Can (320)"
    },
]

const heavyStyleBtnPlayer = document.querySelector("#heavyStyleBtnPlayer")

heavyStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadheavyMusic(heavySongsIndex);
})

//load heavy songs

let songStatusHeavy;

function loadheavyMusic(indexNumber) {
    songName.innerHTML = heavyStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = heavyStyleSongs[indexNumber - 1].artist;
    songImage.src = heavyStyleSongs[indexNumber - 1].img;
    heavySongControler.src = "tracks/Heavy/" + heavyStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = heavyStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = heavyStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.pause()
    recentlySongControler.pause();
    calmnessSongControler.pause();
    classicSongControler.pause();
    playlistsSongControler.pause();
    russianSongControler.pause();
    heavySongControler.play();
    canadaSongControler.pause();
    likedSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = true;
    songStatusCanada = false;

}

playBtn.addEventListener("click", () => {
    heavySongControler.play();
})
pauseBtn.addEventListener("click", () => {
    heavySongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusHeavy == true) {
        nextHeavySong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusHeavy == true) {
        beforeHeavySong();
    }
})
likeEmptyBtn.style.display = "block";
likeFullBtn.style.display = "none";
likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

playSongBtn.style.display = "none";
playSongBtn.style.fill = "red";
pauseSongBtn.style.fill = "red";
pauseSongBtn.style.display = "block";

playSongBtn.addEventListener("click", () => {
    heavySongControler.play();
})

pauseSongBtn.addEventListener("click", () => {
    heavySongControler.pause();
})

nextSongBtn.addEventListener("click", () => {
if (songStatusHeavy == true) {
    nextHeavySong();
}
})

beforeSongBtn.addEventListener("click", () => {
if (songStatusHeavy == true) {
    beforeHeavySong();
}
})

//click next song button developing

function nextHeavySong() {
    heavySongsIndex++;
    heavySongsIndex > heavyStyleSongs.length ? heavySongsIndex = 1 : heavyStyleSongs = heavyStyleSongs;

    loadheavyMusic(heavySongsIndex);

}

//click before song button developing

function beforeHeavySong() {
    heavySongsIndex--;
    heavySongsIndex < 1 ? heavySongsIndex = heavyStyleSongs.length : heavySongsIndex = heavySongsIndex;

    loadheavyMusic(heavySongsIndex);

}

//updata progressBar with songTime

heavySongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";


    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    heavySongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = heavySongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = heavySongControler.duration;

        heavySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = heavySongControler.duration;
    
        heavySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState12 = false;
let randomState12 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState12 == false) {
        repeatState12 = true;
    }
    else {
        repeatState12 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState12 == false) {
        randomState12 = true;
    }
    else {
        randomState12 = false;
    }
})

songRepeatBtn.addEventListener("click", () => {
    if (repeatState12 == false) {
        repeatState12 = true;
    }
    else {
        repeatState12 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState12 == false) {
        randomState12 = true;
    }
    else {
        randomState12 = false;
    }
})

heavySongControler.addEventListener("ended", () => {
    if (randomState12 == false && repeatState12 == false) {
        nextHeavySong();
    }
    else if (randomState12 == false && repeatState12 == true) {
        heavySongControler.currentTime = 0;
        loadheavyMusic(heavySongsIndex);
        heavySongControler.play();
    }
    else if (randomState12 == true && repeatState12 == false) {
        let randomIndex12 = Math.floor((Math.random() * heavyStyleSongs.length) + 1);

        do {
            randomIndex12 = Math.floor((Math.random() * heavyStyleSongs.length) + 1);
        }
        while (heavySongsIndex == randomIndex12)

        heavySongsIndex = randomIndex12;
        loadheavyMusic(heavySongsIndex);
        heavySongControler.play();
    }
})

// set the songs in canada sont style

const canadaSongsImg = document.querySelectorAll(".canadaSongsImg");
const canadaSongsNames = document.querySelectorAll(".canadaSongsNames");
const canadaSongsArtistsNames = document.querySelectorAll(".canadaSongsArtistName");
const canadaSongsbuttonPlayer = document.querySelectorAll(".canadaSongsbuttonPlayer");
const canadaSongControler = document.querySelector("#canadaSongControler");
const canadaSongControlerSrc = document.querySelector("#canadaSongControlerSrc");
let canadaRecently = 0;
let canadaName;
let canadaImage;
let canadaSong;
let canadaArtistName;

for (let i = 0; i < canadaSongsbuttonPlayer.length; i++) {
    canadaSongsbuttonPlayer[i].addEventListener("click", () => {
        songStylesIndexClear();
        canadaRecently++;
        for (let j = 0; j < canadaStyleSongs.length; j++) {
            if (canadaSongsbuttonPlayer[i].dataset.songname == canadaStyleSongs[j].src) {
                chillName = chillStyleSongs[j].name;
                chillImage = "images/" + chillStyleSongs[j].img + ".jpg";
                canadaSong = "tracks/Canada/" + chillStyleSongs[j].src + ".mp3";
                canadaArtistName = canadaStyleSongs[j].artist;
                songName.innerHTML = canadaStyleSongs[j].name;
                sourceSongImg.innerHTML = canadaStyleSongs[j].img;
                songArtistName.innerHTML = canadaStyleSongs[j].artist;
                songImage.src = canadaStyleSongs[j].img;
                sourceSong.innerHTML = "tracks/Canada/" + canadaStyleSongs[j].src;
                canadaSongControler.src = "tracks/Canada/" + canadaStyleSongs[j].src + ".mp3";
                MiddleSongName.innerHTML = canadaStyleSongs[i].name;
                middlePlayerimageBoxImg.src = canadaStyleSongs[i].img;
                middlePlayerimageBoxImg.style.display = "block";
                songImage.style.display = "block";

                chillSongControler.pause();
                focusSongControler.pause();
                popSongControler.pause();
                studySongControler.pause();
                recentlySongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                calmnessSongControler.pause();
                animeSongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.play();
                likedSongControler.pause();

                    unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";

    likeEmptyBtn.style.display = "block";
    likeFullBtn.style.display = "none";
    likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

                canadaSongsIndex++;
            }

        }
        playBtn.style.display = "none";
        playBtn.style.fill = "red";
        pauseBtn.style.fill = "red";
        pauseBtn.style.display = "block";

        
    playSongBtn.style.display = "none";
    playSongBtn.style.fill = "red";
    pauseSongBtn.style.fill = "red";
    pauseSongBtn.style.display = "block"; 

        songStatusCanada = true;

        if (canadaRecently >= 2) {

            var resentlyUl = document.querySelector("#rsList");
            var resentlyLi = document.createElement("li");
            var resentlyDiv = document.createElement("div");
            var resentlyDivImage = document.createElement("div");
            var resentlyPara = document.createElement("p");
            var resentlyImage = document.createElement("img");
            var resentlyPlayImage = document.createElement("img");
            var resentlySongName = document.createElement("h3");
            var resentlyParaText = document.createTextNode("Lt");
            var resentlySongNameText = document.createTextNode(canadaName);

            resentlyPlayImage.dataset.rcanadasongname = canadaSong;
            resentlyPlayImage.dataset.rcanadanamesong = canadaName;
            resentlyPlayImage.dataset.rcanadasongartistname = canadaArtistName;
            resentlyPlayImage.dataset.rcanadasongimage = canadaImage;
            resentlyLi.classList.add("rsLi");
            resentlyDiv.classList.add("rsListBox");
            resentlyDivImage.classList.add("image");
            resentlyImage.classList.add("isImage");
            resentlyPlayImage.classList.add("resentlySongsbuttonPlayer");
            resentlySongName.classList.add("rsName");
            resentlyPlayImage.src = "images/play-64.png";
            resentlyImage.src = canadaImage;

            resentlyPara.appendChild(resentlyParaText);
            resentlySongName.appendChild(resentlySongNameText);
            resentlyDivImage.appendChild(resentlyPara);
            resentlyDivImage.appendChild(resentlyImage);
            resentlyDivImage.appendChild(resentlyPlayImage);
            resentlyDiv.appendChild(resentlyDivImage);
            resentlyDiv.appendChild(resentlySongName);
            resentlyLi.appendChild(resentlyDiv);
            resentlyUl.appendChild(resentlyLi);

            canadaRecently = 0;

        }

    })
}

searchItem.addEventListener("click", () => {
    var gozBazarCanada = document.querySelectorAll(".resentlySongsbuttonPlayer")
    for (let i = 0; i < gozBazarCanada.length; i++) {
        gozBazarCanada[i].addEventListener("click", () => {
            recentlySongControler.src = gozBazarCanada[i].dataset.rcanadasongname;
            songName.innerHTML = gozBazarCanada[i].dataset.rcanadanamesong;
            songImage.src = gozBazarCanada[i].dataset.rcanadasongimage;
            songArtistName.innerHTML = gozBazarCanada[i].dataset.rcanadasongartistname;
            MiddleSongName.innerHTML = gozBazarCanada[i].dataset.rcanadanamesong;
            middlePlayerimageBoxImg.src =gozBazarCanada[i].dataset.rcanadasongimage + ".jpg";
            middlePlayerimageBoxImg.style.display = "block";
            recentlySongControler.play();

            songStylesIndexClear();
            focusSongControler.pause();
            popSongControler.pause();
            chillSongControler.pause();
            studySongControler.pause();
            gameSongControler.pause();
            rAndbSongControler.pause();
            rapSongControler.pause();
            animeSongControler.pause()
            calmnessSongControler.pause();
            classicSongControler.pause();
            russianSongControler.pause();
            heavySongControler.pause();
            canadaSongControler.pause();
            likedSongControler.pause();

                unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


            playBtn.style.display = "none";
            playBtn.style.fill = "red";
            pauseBtn.style.fill = "red";
            pauseBtn.style.display = "block";

            songStatusFocus = false;
            songStatusStudy = false;
            songStatusPop = false;
            songStatusChill = false;
            songStatusGame = false;
            songStatusRAndb = false;
            songStatusRap = false;
            songStatusAnime = false;
            songStatusCalmness = false;
            songStatusClassic = false;
            songStatusRussian = false;
            songStatusHeavy = false;
            songStatusCanada = false;

            playBtn.addEventListener("click", () => {
                recentlySongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                recentlySongControler.pause();
            })

            likeEmptyBtn.style.display = "block";
            likeFullBtn.style.display = "none";
            likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";
        
            playSongBtn.style.display = "none";
            playSongBtn.style.fill = "red";
            pauseSongBtn.style.fill = "red";
            pauseSongBtn.style.display = "block";
        
            playSongBtn.addEventListener("click", () => {
            recentlySongControler.play();
        })
        
        pauseSongBtn.addEventListener("click", () => {
            recentlySongControler.pause();
        })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            recentlySongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";
                middleProgressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                recentlySongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = recentlySongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;

                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
                middleProgressArea.addEventListener("click", (e) => {
                    let progressWithVal = middleProgressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = recentlySongControler.duration;
                
                    recentlySongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });

        })
    }
})

canadaSongsNames[0].innerHTML = "Break up with your girlfriend, i'm bored";
canadaSongsNames[1].innerHTML = "Happier";
canadaSongsNames[2].innerHTML = "I Can't Get Enough";
canadaSongsNames[3].innerHTML = "MIDDLE CHILD";
canadaSongsNames[4].innerHTML = "Murder On My Mind";
canadaSongsNames[5].innerHTML = "Pure Water";
canadaSongsNames[6].innerHTML = "rings";
canadaSongsNames[7].innerHTML = "Robbery";
canadaSongsNames[8].innerHTML = "Shallow";
canadaSongsNames[9].innerHTML = "SICKO MODE";
canadaSongsNames[10].innerHTML = "Sucker";
canadaSongsNames[11].innerHTML = "Sunflowert";
canadaSongsNames[12].innerHTML = "thank u, next";
canadaSongsNames[13].innerHTML = "Without Me";
canadaSongsNames[14].innerHTML = "Wow";
canadaSongsNames[15].innerHTML = "Without Me";
canadaSongsNames[16].innerHTML = "Without Me";
canadaSongsNames[17].innerHTML = "Sucker";
canadaSongsNames[18].innerHTML = "SICKO MODE";
canadaSongsNames[19].innerHTML = "Sucker";
canadaSongsNames[20].innerHTML = "Without Me";

canadaSongsArtistsNames[0].innerHTML = "Ariana Grande";
canadaSongsArtistsNames[1].innerHTML = "Marshmello";
canadaSongsArtistsNames[2].innerHTML = "Russian";
canadaSongsArtistsNames[3].innerHTML = "Russian";
canadaSongsArtistsNames[4].innerHTML = "Russian";
canadaSongsArtistsNames[5].innerHTML = "Russian";
canadaSongsArtistsNames[6].innerHTML = "Russian";
canadaSongsArtistsNames[7].innerHTML = "Russian";
canadaSongsArtistsNames[8].innerHTML = "Russian";
canadaSongsArtistsNames[9].innerHTML = "Russian";
canadaSongsArtistsNames[10].innerHTML = "Russian";
canadaSongsArtistsNames[11].innerHTML = "Russian";
canadaSongsArtistsNames[12].innerHTML = "Russian";
canadaSongsArtistsNames[13].innerHTML = "Russian";
canadaSongsArtistsNames[14].innerHTML = "Russian";
canadaSongsArtistsNames[15].innerHTML = "Russian";
canadaSongsArtistsNames[16].innerHTML = "Russian";
canadaSongsArtistsNames[17].innerHTML = "Russian";
canadaSongsArtistsNames[18].innerHTML = "Russian";
canadaSongsArtistsNames[19].innerHTML = "Russian";
canadaSongsArtistsNames[20].innerHTML = "Russian";

canadaSongsImg[0].src = "images/Break up with your girlfriend, i'm bored.jpg";
canadaSongsImg[1].src = "images/Happier.png";
canadaSongsImg[2].src = "images/I Can't Get Enough.jpg";
canadaSongsImg[3].src = "images/MIDDLE CHILD.jpg";
canadaSongsImg[4].src = "images/Murder On My Mind.jpg";
canadaSongsImg[5].src = "images/Pure Water.jpg";
canadaSongsImg[6].src = "images/rings.jpg";
canadaSongsImg[7].src = "images/Robbery.png";
canadaSongsImg[8].src = "images/Shallow.jpg";
canadaSongsImg[9].src = "images/SICKO MODE.jpg";
canadaSongsImg[10].src = "images/Sucker.png";
canadaSongsImg[11].src = "images/Sunflower.jpg";
canadaSongsImg[12].src = "images/thank u, next.jpg";
canadaSongsImg[13].src = "images/Without Me.png";
canadaSongsImg[14].src = "images/Wow.jpg";
canadaSongsImg[15].src = "images/Without Me.png";
canadaSongsImg[16].src = "images/Without Me.png";
canadaSongsImg[17].src = "images/Sucker.png";
canadaSongsImg[18].src = "images/SICKO MODE.jpg";
canadaSongsImg[19].src = "images/Sucker.png";
canadaSongsImg[20].src = "images/Without Me.png";

let canadaStyleSongs = [
    {
        name: "Break up with your girlfriend, i'm bored",
        artist: "Ariana Grande",
        img: "images/break up with your girlfriend, i'm bored.jpg",
        src: "break up with your girlfriend, i'm bored"
    },
    {
        name: "Happier",
        artist: "Marshmello",
        img: "images/Happier.png",
        src: "Happier"
    },
    {
        name: "I Can't Get Enough",
        artist: "Benny blanco",
        img: "images/I Can't Get Enough.jpg",
        src: "I Can't Get Enough"
    },
    {
        name: "MIDDLE CHILD",
        artist: "J",
        img: "images/MIDDLE CHILD.jpg",
        src: "MIDDLE CHILD"
    },
    {
        name: "Murder On My Mind",
        artist: "YNW Melly",
        img: "images/Murder On My Mind.jpg",
        src: "Murder On My Mind"
    },
    {
        name: "Pure Water",
        artist: "Murder",
        img: "images/Pure Water.jpg",
        src: "Pure Water"
    },
    {
        name: "rings",
        artist: "Araina grande",
        img: "images/rings.jpg",
        src: "rings"
    },
    {
        name: "Robbery",
        artist: "Juice Wrld",
        img: "images/Robbery.jpg",
        src: "Robbery"
    },
    {
        name: "Shallow",
        artist: "Lady gaga",
        img: "images/Shallow.jpg",
        src: "Shallow"
    },
    {
        name: "SICKO MODE",
        artist: "Travis scotts",
        img: "images/SICKO MODE.png",
        src: "SICKO MODE"
    },
    {
        name: "Sucker",
        artist: "Jonas brothers",
        img: "images/Sucker.jpg",
        src: "Sucker"
    },
    {
        name: "Sunflower",
        artist: "Post malone",
        img: "images/Sunflower.jpg",
        src: "Sunflower"
    },
    {
        name: "thank u, next",
        artist: "Araina grande",
        img: "imagesthank u, next.jpg",
        src: "thank u, next"
    },
    {
        name: "Without Me",
        artist: "Halsey",
        img: "images/You And I.png",
        src: "Without Me"
    },
    {
        name: "Wow",
        artist: "Post malone",
        img: "images/Wow.jpg",
        src: "Wow."
    },
    {
        name: "Without Me",
        artist: "Halsey",
        img: "images/Without Me.png",
        src: "Without Me"
    },
    {
        name: "Without Me",
        artist: "Halsey",
        img: "images/Without Me.jpg",
        src: "Without Me"
    },
    {
        name: "Sucker",
        artist: "Bladdy",
        img: "images/Sucker.jpg",
        src: "Sucker"
    },
    {
        name: "SICKO MODE",
        artist: "Rejackt",
        img: "images/SICKO MODE.jpg",
        src: "SICKO MODE"
    },
    {
        name: "Sucker",
        artist: "Bladdy",
        img: "images/Sucker.png",
        src: "Sucker"
    },
    {
        name: "Without Me",
        artist: "Halsey",
        img: "images/Without Me.png",
        src: "Without Me"
    },
]

const canadaStyleBtnPlayer = document.querySelector("#canadaStyleBtnPlayer")

canadaStyleBtnPlayer.addEventListener("click", () => {
    songStylesIndexClear();
    loadcanadaMusic(canadaSongsIndex);
})

//load canada songs

let songStatusCanada;

function loadcanadaMusic(indexNumber) {
    songName.innerHTML = canadaStyleSongs[indexNumber - 1].name;
    songArtistName.innerHTML = canadaStyleSongs[indexNumber - 1].artist;
    songImage.src = canadaStyleSongs[indexNumber - 1].img;
    canadaSongControler.src = "tracks/Canada/" + canadaStyleSongs[indexNumber - 1].src + ".mp3";
    MiddleSongName.innerHTML = canadaStyleSongs[indexNumber - 1].name;
    middlePlayerimageBoxImg.src = canadaStyleSongs[indexNumber - 1].img;
    middlePlayerimageBoxImg.style.display = "block";
    songImage.style.display = "block";

    focusSongControler.pause();
    popSongControler.pause();
    chillSongControler.pause();
    studySongControler.pause();
    gameSongControler.pause();
    recentlySongControler.pause();
    rAndbSongControler.pause();
    rapSongControler.pause();
    animeSongControler.pause()
    calmnessSongControler.pause();
    classicSongControler.pause();
    russianSongControler.pause();
    heavySongControler.pause();
    canadaSongControler.play();
    likedSongControler.pause();

        unliked.style.display = "block";
    liked.style.display = "none";
    liked.style.transform = "translate(" + 125 + "px," + 10 + "px)";


    playBtn.style.display = "none";
    playBtn.style.fill = "red";
    pauseBtn.style.fill = "red";
    pauseBtn.style.display = "block";

    songStatusFocus = false;
    songStatusStudy = false;
    songStatusPop = false;
    songStatusChill = false;
    songStatusGame = false;
    songStatusRAndb = false;
    songStatusRap = false;
    songStatusAnime = false;
    songStatusCalmness = false;
    songStatusClassic = false;
    songStatusRussian = false;
    songStatusHeavy = false;
    songStatusCanada = true;

}

likeEmptyBtn.style.display = "block";
likeFullBtn.style.display = "none";
likeFullBtn.style.transform = "translate(" + 125 + "px," + 10 + "px)";

playSongBtn.style.display = "none";
playSongBtn.style.fill = "red";
pauseSongBtn.style.fill = "red";
pauseSongBtn.style.display = "block";

pauseSongBtn.addEventListener("click", () => {
canadaSongControler.pause();
})

playSongBtn.addEventListener("click", () => {
canadaSongControler.play();
})

nextSongBtn.addEventListener("click", () => {
if (songStatusCanada == true) {
    nextCanadaSong();
}
})

beforeSongBtn.addEventListener("click", () => {
if (songStatusCanada == true) {
    beforeCanadaSong();
}
})

playBtn.addEventListener("click", () => {
    canadaSongControler.play();
})
pauseBtn.addEventListener("click", () => {
    canadaSongControler.pause();
})

skipNext.addEventListener("click", () => {
    if (songStatusCanada == true) {
        nextCanadaSong();
    }
})

skipBack.addEventListener("click", () => {
    if (songStatusCanada == true) {
        beforeCanadaSong();
    }
})

//click next song button developing

function nextCanadaSong() {
    canadaSongsIndex++;
    canadaSongsIndex > canadaStyleSongs.length ? canadaSongsIndex = 1 : canadaStyleSongs = canadaStyleSongs;

    loadcanadaMusic(canadaSongsIndex);

}

//click before song button developing

function beforeCanadaSong() {
    canadaSongsIndex--;
    canadaSongsIndex < 1 ? canadaSongsIndex = canadaStyleSongs.length : canadaSongsIndex = canadaSongsIndex;

    loadcanadaMusic(canadaSongsIndex);

}

//updata progressBar with songTime

canadaSongControler.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    let progressWith = (currentTime / duration) * 100;
    progressBar.style.width = progressWith + "%";
    middleProgressBar.style.width = progressWith + "%";


    let songCurrentTime = document.querySelector("#songTimeLeft"),
        songDurationTime = document.querySelector("#songTimeRemaining")

    canadaSongControler.addEventListener("loadeddata", () => {

        //update song total duration

        let songDuration = canadaSongControler.duration;
        let totalMin = Math.floor(songDuration / 60);
        let totalSec = Math.floor(songDuration % 60);
        songDurationTime.innerHTML = totalMin + ":" + totalSec;
        if (totalSec < 10) {
            songDurationTime.innerHTML = totalMin + ":0" + totalSec;
        }

    });

    //update song total current time 

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
    }
    else {
        songCurrentTime.innerHTML = currentMin + ":" + currentSec;
    }

    //update playing song current time with progress bar 

    progressArea.addEventListener("click", (e) => {
        let progressWithVal = progressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = canadaSongControler.duration;

        canadaSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
    middleProgressArea.addEventListener("click", (e) => {
        let progressWithVal = middleProgressArea.clientWidth;
        let clickedOffsetX = e.offsetX;
        let songDuration = canadaSongControler.duration;
    
        canadaSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
    })
});

//developed the repeatand random play button 

let repeatState13 = false;
let randomState13 = false;

repeatPlayButton.addEventListener("click", () => {
    if (repeatState13 == false) {
        repeatState13 = true;
    }
    else {
        repeatState13 = false;
    }
})
randomPlayButton.addEventListener("click", () => {
    if (randomState13 == false) {
        randomState13 = true;
    }
    else {
        randomState13 = false;
    }
})

songRepeatBtn.addEventListener("click", () => {
    if (repeatState13 == false) {
        repeatState13 = true;
    }
    else {
        repeatState13 = false;
    }
})

songOrderBtn.addEventListener("click", () => {
    if (randomState13 == false) {
        randomState13 = true;
    }
    else {
        randomState13 = false;
    }
})

canadaSongControler.addEventListener("ended", () => {
    if (randomState13 == false && repeatState13 == false) {
        nextCanadaSong();
    }
    else if (randomState13 == false && repeatState13 == true) {
        canadaSongControler.currentTime = 0;
        loadcanadaMusic(canadaSongsIndex);
        canadaSongControler.play();
    }
    else if (randomState13 == true && repeatState13 == false) {
        let randomIndex13 = Math.floor((Math.random() * canadaStyleSongs.length) + 1);

        do {
            randomIndex13 = Math.floor((Math.random() * canadaStyleSongs.length) + 1);
        }
        while (canadaSongsIndex == randomIndex13)

        canadaSongsIndex = randomIndex13;
        loadcanadaMusic(canadaSongsIndex);
        canadaSongControler.play();
    }
})

//search box developing for song styles

let popStyle = document.querySelector(".PopStyle");
let SearchTxtBox = document.querySelector("#searchTxtBox");

searchIcon.addEventListener("click", () => {

    if (SearchTxtBox.value == "anime") {
        panelsHider();
        animeStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "pop") {
        panelsHider();
        popStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "rap") {
        panelsHider();
        rapStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "r&b") {
        panelsHider();
        rANDbStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "russian") {
        panelsHider();
        russianStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "canada") {
        panelsHider();
        canadaStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "classic") {
        panelsHider();
        classicStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "chill") {
        panelsHider();
        chillStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "heavy") {
        panelsHider();
        heavyStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "study") {
        panelsHider();
        studyStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "calmness") {
        panelsHider();
        calmnessStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "focus") {
        panelsHider();
        focusStyle.style.display = "block";
    }
    if (SearchTxtBox.value == "game") {
        panelsHider();
        gameStyle.style.display = "block"
    }

})

// add a song to a palylist

const addSong = document.querySelector("#addSong");
const playlistList = document.querySelector("#playlistList");
const container = document.querySelector("#container");
let addSongStatus = false;

addSong.addEventListener("click", () => {

    if (addSongStatus) {
        addSongStatus = false
        playlistList.style.display = "block"
        playlistList.style.opacity = 1;
    }
    else {
        addSongStatus = true;
        playlistList.style.opacity = 0;
        setTimeout(() => {
            playlistList.style.display = "none";
        }, 100)

    }
})

//liked the songs from middle song controler box

likeEmptyBtn.addEventListener("click",() => {

    var ALikedSong = document.createElement("div");
    var LikedSongName = document.createElement("H3");
    var LikedSongArtistName = document.createElement("p");
    var LikedSongArtistNameContent = document.createTextNode(songArtistName.innerHTML)
    var LikedSongNameSongContent = document.createTextNode(songName.innerHTML);
    var LikedSongImageBox = document.createElement("div");
    var LikedSongDefulfImage = document.createElement("p");
    var LikedSongDefulfImageContent = document.createTextNode("Lt");
    var playSongLikedImage = document.createElement("img");
    var LikedSongImage = document.createElement("img");

    LikedSongImage.classList.add("likedSongImage");
    LikedSongImage.src = sourceSongImg.innerHTML;
    LikedSongImageBox.appendChild(LikedSongImage);
    playSongLikedImage.classList.add("mfyPlayBox");
    playSongLikedImage.classList.add("playSongLikedImage");
    playSongLikedImage.style.zIndex = 100000;
    playSongLikedImage.src = "images/play-64.png";
    LikedSongImageBox.appendChild(playSongLikedImage);
    playSongLikedImage.dataset.src = sourceSong.innerHTML;
    playSongLikedImage.dataset.img = songImage.src;
    playSongLikedImage.dataset.name = songName.innerHTML;
    playSongLikedImage.dataset.artist = songArtistName.innerHTML;
    playSongLikedImage.dataset.index = likedSongsArrayCounter;
    ALikedSong.classList.add("AsongLiked");
    LikedSongImageBox.classList.add("image");
    LikedSongImageBox.appendChild(LikedSongDefulfImage)
    LikedSongName.appendChild(LikedSongNameSongContent)
    LikedSongName.classList.add("AlikedSongName");
    LikedSongDefulfImage.appendChild(LikedSongDefulfImageContent);
    LikedSongDefulfImage.classList.add("likedSongDefulfImage");
    LikedSongArtistName.appendChild(LikedSongArtistNameContent);
    LikedSongArtistName.classList.add("AplayListSongArtistName");
    LikedSongImageBox.appendChild(LikedSongImage);
    ALikedSong.appendChild(LikedSongName);
    ALikedSong.appendChild(LikedSongImageBox);
    ALikedSong.appendChild(LikedSongArtistName);

    likesPnl.appendChild(ALikedSong);

    likedSongsArray[likedSongsArrayCounter] = { name : songName.innerHTML, artist : songArtistName.innerHTML, img: sourceSongImg.innerHTML, src: sourceSong.innerHTML};
    likedSongsArrayCounter++;

    messageBoxTxt.innerHTML = "the song liked";
    messageBoxTxt.style.opacity = 1;

    setTimeout(() => {
        messageBoxTxt.style.opacity = 0;
    }, 5000)
    setTimeout(() => {
        messageBoxTxt.innerHTML = "";
    }, 5500)

    // play songs in liked song panel

    var playSongLikedButtons = document.querySelectorAll(".playSongLikedImage"); 

    for(let i = 0;i < playSongLikedButtons.length;i++){
        playSongLikedButtons[i].addEventListener("click",() => {

            likedSongIndex = playSongLikedButtons[i].dataset.index

            function loadLikedMusic(){
                likedSongControler.src = likedSongsArray[likedSongIndex].src + ".mp3";
                likedSongControler.play();
    
                songImage.src = playSongLikedButtons[likedSongIndex].dataset.img;
                songName.innerHTML = playSongLikedButtons[likedSongIndex].dataset.name;
                songArtistName.innerHTML = playSongLikedButtons[likedSongIndex].dataset.artist;
    
                liked.style.display = "block";
                unliked.style.display = "none";
    
                songStylesIndexClear();
                focusSongControler.pause();
                popSongControler.pause();
                chillSongControler.pause();
                studySongControler.pause();
                gameSongControler.pause();
                rAndbSongControler.pause();
                rapSongControler.pause();
                animeSongControler.pause()
                calmnessSongControler.pause();
                classicSongControler.pause();
                russianSongControler.pause();
                heavySongControler.pause();
                canadaSongControler.pause();
                playlistsSongControler.pause();
                likedSongControler.play()
    
                playBtn.style.display = "none";
                playBtn.style.fill = "red";
                pauseBtn.style.fill = "red";
                pauseBtn.style.display = "block";
    
                songStatusFocus = false;
                songStatusStudy = false;
                songStatusPop = false;
                songStatusChill = false;
                songStatusGame = false;
                songStatusRAndb = false;
                songStatusRap = false;
                songStatusAnime = false;
                songStatusCalmness = false;
                songStatusPlaylist = false;
                songStatusClassic = false;
                songStatusRussian = false;
                songStatusHeavy = false;
                songStatusCanada = false;
                songStatusLiked = true;
            }

            loadLikedMusic()

            playBtn.addEventListener("click", () => {
                likedSongControler.play();
            })
            pauseBtn.addEventListener("click", () => {
                likedSongControler.pause();
            })

            //updata progressBar with songTime

            const progressBar = document.querySelector(".progressBar"),
                progressArea = document.querySelector(".progressArea");

            likedSongControler.addEventListener("timeupdate", (e) => {
                const currentTime = e.target.currentTime;
                const duration = e.target.duration;

                let progressWith = (currentTime / duration) * 100;
                progressBar.style.width = progressWith + "%";

                let songCurrentTime = document.querySelector("#songTimeLeft"),
                    songDurationTime = document.querySelector("#songTimeRemaining")

                likedSongControler.addEventListener("loadeddata", () => {

                    //update song total duration

                    let songDuration = likedSongControler.duration;
                    let totalMin = Math.floor(songDuration / 60);
                    let totalSec = Math.floor(songDuration % 60);
                    songDurationTime.innerHTML = totalMin + ":" + totalSec;
                    if (totalSec < 10) {
                        songDurationTime.innerHTML = totalMin + ":0" + totalSec;
                    }

                });

                //update song total current time 

                let currentMin = Math.floor(currentTime / 60);
                let currentSec = Math.floor(currentTime % 60);
                if (currentSec < 10) {
                    songCurrentTime.innerHTML = currentMin + ":0" + currentSec;
                }
                else {
                    songCurrentTime.innerHTML = currentMin + ":" + currentSec;
                }

                //update playing song current time with progress bar 

                progressArea.addEventListener("click", (e) => {
                    let progressWithVal = progressArea.clientWidth;
                    let clickedOffsetX = e.offsetX;
                    let songDuration = likedSongControler.duration;

                    likedSongControler.currentTime = (clickedOffsetX / progressWithVal) * songDuration;
                })
            });
            skipNext.addEventListener("click", () => {
                if (songStatusLiked == true) {
                    nextLikedSong();
                }
            })
            
            skipBack.addEventListener("click", () => {
                if (songStatusLiked == true) {
                    beforeLikedSong();
                }
            })
            
            //click next song button developing
            
            function nextLikedSong() {
                likedSongIndex++;
                likedSongIndex > likedSongsArray.length ? likedSongIndex = 1 : likedSongsArray = likedSongsArray;
            
                loadLikedMusic(likedSongIndex);
            
            }
            
            //click before song button developing
            
            function beforeLikedSong() {
                likedSongIndex--;
                likedSongIndex < 1 ? likedSongIndex = likedSongsArray.length : likedSongIndex = likedSongIndex;
            
                loadLikedMusic(likedSongIndex);
            
            }
            let repeatStateLiked = false;
            let randomStateLiked = false;

            repeatPlayButton.addEventListener("click", () => {              
            if (repeatStateLiked == false) {
                repeatStateLiked = true;
            }
            else {
                repeatStateLiked = false;
            }
                })
                randomPlayButton.addEventListener("click", () => {              
                    if (randomStateLiked == false) {
                        randomStateLiked = true;
                    }
                    else {
                        randomStateLiked = false;
                    }
                })

    likedSongControler.addEventListener("ended", () => {
    if (randomStateLiked == false && repeatStateLiked == false) {
        nextLikedSong();
    }
    else if (randomStateLiked == false && repeatStateLiked == true) {
        likedSongControler.currentTime = 0;
        loadLikedMusic(likedSongIndex);
        likedSongControler.play();
    }
    else if (randomStateLiked == true && repeatStateLiked == false) {
        let randomIndexLiked = Math.floor((Math.random() * focusStyleSongs.length) + 1);

        do {
            randomIndexLiked = Math.floor((Math.random() * focusStyleSongs.length) + 1);
        }
        while (likedSongIndex == randomIndexLiked)

        likedSongIndex = randomIndexLiked;
        loadLikedMusic(likedSongIndex);
        likedSongControler.play();
    }
    })
   })
    }

})