// gift box
const box = document.querySelector(".box");
box.addEventListener('click', () => {
    var boxGifts = document.querySelector('.box');
    var flashCard = document.querySelector('.cards');

    // Ẩn hộp quà và hiển thị thẻ flash
    boxGifts.style.opacity = 0;
    boxGifts.style.transform = "scale(0.8)";
    flashCard.style.opacity = 1;
    flashCard.style.transform = "scale(1)";

    playMusic();
});

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

//show button next
const heart = document.querySelector(".heart");
heart.addEventListener('click', () => {
  var arrowButton = document.querySelector('.arrow-button');

  arrowButton.style.opacity = 1;
  arrowButton.style.transform = "scale(1)";

});


function playMusic() {
  var audio = new Audio("I-Want-For-Christmas-Is-You.mp3");
  if (audio.paused) {
    audio.play();
  }
  audio.loop = true;
}