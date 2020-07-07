function sectionsToggle(button, selector, parent) {
  let toggleButton = document.querySelectorAll('.' + button);
  let modalWindow = document.querySelector('.specification');

  toggleButton.forEach(button => {
    button.onclick = event => {
      let parentSelector = event.target.closest('.' + parent);
      let toggleSelector = parentSelector.querySelector('.' + selector);
      let toggleClass = toggleSelector.classList;
      let activeSelector = selector + '--active';
      let star = parentSelector.querySelector('.specification__star');
      let cloneStar = parentSelector.querySelector('.sections__star-box');


      if(button.classList.contains('sections__picture')) {
        toggleSelector.appendChild(modalWindow);
      } else if (button.classList.contains('specification__button')) {
        toggleSelector.removeChild(modalWindow);
      }

      toggleClass.contains(activeSelector) ? toggleClass.remove(activeSelector) : toggleClass.add(activeSelector);

      if(star.classList.contains('specification__star--active')) {
        cloneStar.classList.add('sections__star-box--active')
      } else {
        cloneStar.classList.remove('sections__star-box--active')
      }
    }
  })
}

sectionsToggle('sections__picture', 'sections__wrapper',
  'sections__item');
sectionsToggle('specification__button', 'sections__wrapper',
  'sections__item');
sectionsToggle('specification__star', 'specification__star',
  'sections__item');
