function sectionsToggle(selector, button, parent) {
  let toggleButton = document.querySelectorAll('.' + button);

  toggleButton.forEach(button => {
    button.onclick = function(event) {
      let parentSelector = event.target.closest('.' + parent);

      console.log(parentSelector)

      let classList = parentSelector.classList;
      let activeSelector = selector + '--active';

      if(classList.contains(activeSelector)) {
        classList.remove(activeSelector);
        parentSelector.querySelector('.sections__star-box').classList.remove('sections__star-box--active')
      } else {
        classList.add(activeSelector);
        parentSelector.querySelector('.sections__star-box').classList.add('sections__star-box--active')
      }

      // classList.contains(activeSelector) ? classList.remove(activeSelector) : classList.add(activeSelector);

    };
  });
}

sectionsToggle('sections__item', 'sections__picture', 'sections__item');
sectionsToggle('sections__item', 'specification__button', 'sections__item');
sectionsToggle('specification__star', 'specification__star', 'specification__star');
