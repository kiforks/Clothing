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

childToggleSelector('sections__star-box', 'sections__star-box', 'results__item');



const specificationButton = document.querySelectorAll('.specification__button');
const sectionsImage =  document.querySelectorAll('.sections__image');

specificationButton.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();

    sectionsImage.forEach(image => {
      image.classList.add('sections__image--closed')
    });
  })
});
