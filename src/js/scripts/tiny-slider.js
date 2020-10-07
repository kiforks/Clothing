const sliders = document.querySelectorAll('.banner__gallery');
const gallery = document.querySelectorAll('.gallery');

sliders.forEach(sliderDom => {
  const galleryList = sliderDom.querySelector('.banner__list');

    var slider = tns({
      container: galleryList,
      slideBy: 'page',
      autoplay: true,
      mode: 'gallery',
      controlsText: ['', ''],
      // navAsThumbnails: true,
      touch: true,
      speed: 2000,
      loop: false,
      rewind: true,
      responsive: {
        767: {
          mode: 'carousel'
        }
      }
    });


  let getInfoTns = slider.getInfo();
  const pagesAmount = getInfoTns.pages;
  const tnsLiveRegion = sliderDom.querySelectorAll('.tns-liveregion');
  const pagesValueSelector = document.createElement("span");

  tnsLiveRegion.forEach(box => {
    const count = box.appendChild(pagesValueSelector);
    count.classList.add('current');
    count.textContent = ' / ' + pagesAmount;
  });
});

gallery.forEach(sliderDom => {
  const galleryList = sliderDom.querySelector('.gallery__list');
  const galleryItem  = sliderDom.querySelectorAll('.gallery__item');
  const galleryMax = sliderDom.querySelector('.gallery__max');

  galleryMax.textContent = galleryItem.length;


  var sliderGallery = tns({
    container: galleryList,
    items: 1,
    slideBy: 1,
    // autoplay: true
    controlsText: ['', ''],
    touch: true,
    speed: 500,
    loop: true,
    // rewind: true,
    responsive: {
      768: {
        items: 2,
      },
      1200: {
        items: 4,
      }
    },
    onInit: buttonClick,
  });

  function buttonClick() {
    const buttons = sliderDom.querySelectorAll('button');
    const galleryCount = sliderDom.querySelector('.gallery__count');

    buttons.forEach(button => {
      let displayIndexGallery;
      button.addEventListener('click', () => {
        setTimeout(() => {
          displayIndexGallery = sliderGallery.getInfo().displayIndex;
          galleryCount.textContent = displayIndexGallery;
        },0);
      });
    })
  }

  const getInfoTns = sliderGallery.getInfo();
  const pagesAmount = getInfoTns.pages;
  const tnsLiveRegion = sliderDom.querySelectorAll('.tns-liveregion');
  const pagesValueSelector = document.createElement("span");

  tnsLiveRegion.forEach(box => {
    const count = box.appendChild(pagesValueSelector);
    count.classList.add('current');
    count.textContent = ' / ' + pagesAmount;
  });
});

