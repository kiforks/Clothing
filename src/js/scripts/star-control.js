function sectionsToggle(button, selector, parent) {
  let toggleButton = document.querySelectorAll('.' + button);
  let modalWindow = document.querySelector('.specification');
  let sectionsContainer = document.querySelector('.sections__container');

  toggleButton.forEach(button => {
    button.onclick = event => {
      let parentSelector = event.target.closest('.' + parent);
      let toggleSelector = parentSelector.querySelector('.' + selector);
      let toggleClass = toggleSelector.classList;
      let activeSelector = selector + '--active';

      if(button.classList.contains('sections__picture')) {
        toggleSelector.appendChild(modalWindow);
      } else if (button.classList.contains('specification__button')) {
        toggleSelector.removeChild(modalWindow);
      }

      // modalWindow.scrollIntoView();

      if(toggleClass.contains(activeSelector)) {
        toggleClass.remove(activeSelector);
        parentSelector.removeAttribute('style');
      } else {
        toggleClass.add(activeSelector);
        parentSelector.style = 'z-index: 10000';
      }

      // toggleClass.contains(activeSelector) ? toggleClass.remove(activeSelector) : toggleClass.add(activeSelector);

      let parentStar = parentSelector.querySelector('.sections__star-box');
      let star = document.querySelector('.specification__star');

      if(event.target.classList.contains('specification__button')) {
        return;
      }

      if(parentStar.classList.contains('sections__star-box--active')) {
        star.classList.add('specification__star--active');
      } else {
        star.classList.remove('specification__star--active');
      }
    }
  })
}

function favoriteControl() {
  let star = document.querySelector('.specification__star');

  star && star.addEventListener('click', () => {
    let parent = star.parentElement.parentElement.parentElement;
    let cloneStar = parent.querySelector('.sections__star-box');

    if(!star.classList.contains('specification__star--active')) {
      star.classList.add('specification__star--active');
      cloneStar.classList.add('sections__star-box--active');
    } else {
      star.classList.remove('specification__star--active');
      cloneStar.classList.remove('sections__star-box--active');
    }
  });
}

sectionsToggle('sections__picture', 'sections__wrapper',
  'sections__item');
sectionsToggle('specification__button', 'sections__wrapper',
  'sections__item');

favoriteControl();
