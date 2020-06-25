'use strict';

function selectorToggle(selector, button, accessibility = false, focus = false, preventDefault = true) {
  const acc = () => accessibility ? visuallyHidden : closedSelector;
  const toggleSelector = document.querySelectorAll('.' + selector);
  const toggleButton = document.querySelectorAll('.' + button);
  const closedSelector = selector + '--closed';
  const visuallyHidden = 'visually-hidden';
  const hidingClass = acc();
  const focusOpenClass = selector + '--opened';

  if(focus) {
    toggleButton.forEach(buttonItem => {
      buttonItem.onfocus = () => {
        toggleSelector.forEach(selectorItem => {
          let classList = selectorItem.classList;

          if(!(classList.contains(focusOpenClass))){
            classList.add(focusOpenClass);
          }
        })
      }

      buttonItem.onblur = () => {
        toggleSelector.forEach(selectorItem => {
          selectorItem.classList.remove(focusOpenClass);
        })
      }
    })
  } else {
    toggleButton.forEach(buttonItem => {
      buttonItem.addEventListener('click', event => {
        // if(!preventDefault) {
        //   if(toggleSelector.classList.contains('.' + selector + '--closed')) {
        //     event.preventDefault();
        //
        //     console.log(toggleSelector.classList.contains('.' + selector + '--closed'))
        //   }
        // }
        // event.preventDefault();
        //
        toggleSelector.forEach(selectorItem => {
          let classList = selectorItem.classList;

          if(!preventDefault) {
            if(classList.contains('header__search--closed')) {
              event.preventDefault();
            }
          } else {
            event.preventDefault();
          }

          classList.contains(hidingClass) ? classList.remove(hidingClass) : classList.add(hidingClass);
        })
      })
    })
  }
}

selectorToggle('header__search', 'header__search-button', false, false,false);
selectorToggle('header__search', 'header__input-button');
selectorToggle('header__nav-box', 'header__button');
selectorToggle('header__button', 'header__button');



