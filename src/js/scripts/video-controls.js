const videoBox = document.querySelector('.video__box');
const videoInner = document.querySelector('.video__inner');
const videoButton = document.querySelector('.video__button');

videoButton && videoButton.addEventListener('click', () => {
  console.log(videoInner);

  if(!videoBox.classList.contains('video__box--closed')) {
    console.log(1);
    videoInner.setAttribute('controls','controls');
  } else {
    console.log(2);
    videoInner.removeAttribute('controls');
  }

  console.log(videoInner);
});
