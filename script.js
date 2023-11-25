function handleBoxClick() {
    var boxGifts = document.querySelector('.box');
    boxGifts.style.display = 'none';
    playMusic();
}

function playMusic() {
    var audio = new Audio("Justin-Bieber-All-I-Want-For-Christmas-Is-You-ur.mp3");
    if (audio.paused) {
        audio.play();
    }
    audio.loop = true;
}