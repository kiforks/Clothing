function childToggleSelector(selector, button, parent) {
  let toggleButton = document.querySelectorAll('.' + button);

  toggleButton.forEach(button => {
    button.onclick = function(event) {
      let parentSelector = event.target.closest('.' + parent);
      let toggleSelector = parentSelector.querySelector('.' + selector);
      let classList = toggleSelector.classList;
      let closedSelector = selector + '--closed';

      classList.contains(closedSelector) ? classList.remove(closedSelector) : classList.add(closedSelector);
    };
  });
}

const sectionsButton = document.querySelectorAll('.sections__modal-button');

sectionsButton.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const sectionsPicture = document.querySelectorAll('.sections__picture');

    sectionsPicture.forEach(picture => {
      picture.classList.add('sections__picture--closed');
    })
  })
});

childToggleSelector('sections__modal','sections__picture',
  'sections__item');
childToggleSelector('sections__modal','sections__modal-button',
  'sections__item');
childToggleSelector('sections__picture', 'sections__image',
  'sections__item');


