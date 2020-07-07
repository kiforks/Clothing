// function initModal(button, selector, parent) {
//   let toggleButton = document.querySelectorAll('.' + button);
//   let modalWindow = document.querySelector('.specification');
//
//   toggleButton.forEach(button => {
//     button.onclick = event => {
//       let parentSelector = event.target.closest('.' + parent);
//       let toggleSelector = parentSelector.querySelector('.' + selector);
//
//       // console.log(parentSelector);
//       //
//       toggleSelector.appendChild(modalWindow);
//     }
//   })
// }
//
// initModal('sections__picture', 'sections__item', 'sections__list');
