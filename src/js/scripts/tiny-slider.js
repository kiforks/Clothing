const sliders = document.querySelectorAll('.my-slider');

sliders.forEach(sliderDom => {
  var slider = tns({
    container: sliderDom,
    slideBy: 'page',
    // autoplay: true
    mode: 'gallery',
    controlsText: ['', ''],
    navAsThumbnails: true,
    touch: true,
    speed: 1500,
    loop: false,
    rewind: true,
    responsive: {
      767: {
        mode: 'carousel'
      }
    }
  });

  const getInfoTns = slider.getInfo();
  const pagesAmount = getInfoTns.pages;
  const tnsLiveRegion = document.querySelectorAll('.tns-liveregion');
  const pagesValueSelector = document.createElement("span");

  tnsLiveRegion.forEach(box => {
    const count = box.appendChild(pagesValueSelector);
    count.classList.add('current');
    count.textContent = '/' + pagesAmount;
  });
});

