// gift box
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




//flash card
const cardWrapper = document.querySelector(".cards");

cardWrapper.addEventListener('click', e => {
  const cardMoreBtn = e.target.closest(".card__more-info");
  const cardLessBtn = e.target.closest(".card__less-info");
  
  if(cardMoreBtn) {
    cardMoreBtn.parentNode.parentNode.classList.add('card--open');
  }

  if(cardLessBtn) {
    cardLessBtn.parentNode.parentNode.classList.remove('card--open');
  }
})