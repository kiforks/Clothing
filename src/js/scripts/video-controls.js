const videoBox = document.querySelector('.video__box');
const videoInner = document.querySelector('.video__inner');
const videoButton = document.querySelector('.video__button');

videoButton && videoButton.addEventListener('click', () => {
  if(!videoBox.classList.contains('video__box--closed')) {
    videoInner.setAttribute('controls','controls');
  } else {
    videoInner.removeAttribute('controls');
  }
});
