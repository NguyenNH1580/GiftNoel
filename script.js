// gift box
const box = document.querySelector(".box");
box.addEventListener('click', e => {
  var boxGifts = document.querySelector('.box');
  var flashCard = document.querySelector('.cards');
  boxGifts.style.display = 'none';
  flashCard.style.display = 'block';
  // playMusic();
})

//flash card
const cardWrapper = document.querySelector(".cards");
cardWrapper.addEventListener('click', e => {
  const cardMoreBtn = e.target.closest(".card__more-info");
  const cardLessBtn = e.target.closest(".card__less-info");

  if (cardMoreBtn) {
    cardMoreBtn.parentNode.parentNode.classList.add('card--open');
  }

  if (cardLessBtn) {
    cardLessBtn.parentNode.parentNode.classList.remove('card--open');
  }
})


function playMusic() {
  var audio = new Audio("I-Want-For-Christmas-Is-You.mp3");
  if (audio.paused) {
    audio.play();
  }
  audio.loop = true;
}