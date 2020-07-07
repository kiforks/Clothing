function sectionsToggle(selector, button, parent) {
  let toggleButton = document.querySelectorAll('.' + button);

  toggleButton.forEach(button => {
    button.onclick = function(event) {
      let parentSelector = event.target.closest('.' + parent);
      let classList = parentSelector.classList;
      let activeSelector = selector + '--active';
      let star = parentSelector.querySelectorAll('.specification__star');
      let starBox = parentSelector.querySelector('.sections__star-box');
      let starActive = 'sections__star-box--active';
      let mainStarActive = 'specification__star--active';

      // console.log(star);
      // console.log(parentSelector.classList.contains('123'))

      classList.contains(activeSelector) ? classList.remove(activeSelector) : classList.add(activeSelector);
    };
  });
}

sectionsToggle('sections__item', 'sections__picture', 'sections__item');
sectionsToggle('sections__item', 'specification__button', 'sections__item');
sectionsToggle('specification__star', 'specification__star', 'specification__star');
