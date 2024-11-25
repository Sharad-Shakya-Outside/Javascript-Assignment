let trackName = document.querySelector('#track-name');
let trackArtist = document.querySelector('#track-artist');
let trackArt = document.querySelector('#track-art');

let playPauseBtn = document.querySelector('.playpause-track');
let nextBtn = document.querySelector('.next-track');
let prevBtn = document.querySelector('.prev-track');

let seekSlider = document.querySelector('.seek-slider');
let currentTime = document.querySelector('.current-time');
let totalDuration = document.querySelector('.total-duration');

let currentTrack = document.createElement('audio');

let trackIndex = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const trackList = [
    {
        img: 'assets/images/mr_brightside.png',
        name: 'Mr.Brightside',
        artist: 'The Killers',
        music: 'assets/music/Mr. Brightside - The Killers.mp3'
    },
    {
        img: 'assets/images/nevergonnagiveyouup.png',
        name: 'Never Gonna Give You Up',
        artist: 'Rick Astley',
        music: 'assets/music/Never Gonna Give You Up - Rick Astley.mp3',
    },
    {
        img: 'assets/images/ohcaroline.png',
        name: 'Oh Caroline',
        artist: 'The 1975',
        music: 'assets/music/Oh Caroline - The 1975.mp3',
    },
    {
        img: 'assets/images/rocketman.png',
        name: 'Rocketman',
        artist: 'Elton John',
        music: 'assets/music/Rocket Man - Elton John.mp3'
    },
]

loadTrack(trackIndex);

function loadTrack(trackIndex) {
    clearInterval(updateTimer);
    reset();

    currentTrack.src = trackList[trackIndex].music;
    currentTrack.load();

    trackArt.style.backgroundImage = "url(" + trackList[trackIndex].img + ")";
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;

    updateTimer = setInterval(setUpdate, 1000);

    currentTrack.addEventListener('ended', nextTrack);

    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}

function reset() {
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    seekSlider.value = 0;
}

function playPauseTrack() {
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
    currentTrack.play();
    isPlaying = true;
    trackArt.classList.add('rotate');
    playPauseBtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
    currentTrack.pause();
    isPlaying = false;
    trackArt.classList.remove('rotate');
    playPauseBtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
    if (trackIndex < trackList.length - 1) {
        trackIndex += 1;
    } else {
        trackIndex = 0;
    }
    loadTrack(trackIndex);
    playTrack();
}

function prevTrack() {
    if (trackIndex > 0) {
        trackIndex -= 1;
    } else {
        trackIndex = trackList.length - 1;
    }
    loadTrack(trackIndex);
    playTrack();
}

function seekTo() {
    let seekto = currentTrack.duration * (seekSlider.value / 100);
    currentTrack.currentTime = seekto;
}

function setUpdate() {
    let seekPosition = 0;
    if (!isNaN(currentTrack.duration)) {
        seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
        seekSlider.value = seekPosition;

        let currentMinutes = Math.floor(currentTrack.currentTime / 60);
        let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(currentTrack.duration / 60);
        let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
}