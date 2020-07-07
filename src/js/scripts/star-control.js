function sectionsToggle(selector, button, parent) {
  let toggleButton = document.querySelectorAll('.' + button);
  // let star = document.querySelectorAll('.specification__star');

  toggleButton.forEach(button => {
    button.onclick = function(event) {
      let parentSelector = event.target.closest('.' + parent);
      let classList = parentSelector.classList;
      let activeSelector = selector + '--active';
      // let star = parentSelector.querySelector('.specification__star');
      // let starClone = parentSelector.querySelector('.sections__star-box');

      classList.contains(activeSelector) ? classList.remove(activeSelector) : classList.add(activeSelector);

      // star.onclick = function (event) {
      //   if(star.classList.contains('specification__star--active')) {
      //     starClone.classList.add('sections__star-box--active');
      //   } else {
      //     starClone.classList.remove('sections__star-box--active');
      //   }
      // }
    };
  });

  // star.forEach(star => {
  //   star.onclick = function (event) {
  //
  //   }
  // })
}

sectionsToggle('sections__item', 'sections__picture', 'sections__item');
sectionsToggle('sections__item', 'specification__button', 'sections__item');
sectionsToggle('specification__star', 'specification__star', 'specification__star');
