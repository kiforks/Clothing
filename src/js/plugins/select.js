// require('nodelist-foreach-polyfill');

if(document.querySelector('.select')) {
  InitSelects();
}

function InitSelects() {
  const selects = document.querySelectorAll('.select');

  if (selects.length === 0) return;

  selects.forEach(select => initSelect(select));
}

function initSelect (select) {
  const input = select.querySelector('input');
  if (!input) {
    return;
  }
  const list = select.querySelector('.select__list');
  const options = list.querySelectorAll('.select__option');

  // //show list on focus
  // select.addEventListener('click', () => {

  //   // list.classList.('open');
  //   list.classList.toggle('open');

  //   select.addEventListener('mouseleave', () => {

  //     list.classList.remove('.open');
  //   })
  // })

  //show list on focus
  input.addEventListener('focus', () => {
    console.log('focus');

    list.classList.add('open');
    select.classList.add('active-open');
  });

  //hide list on focusout
  input.addEventListener('focusout', () => {
    list.classList.remove('open');
    select.classList.remove('active-open');
    if (input.value !== '') {
      input.classList.add('has-content');
    } else {
      input.classList.remove('has-content');
    }
  });

  //show list on list hover in
  list.addEventListener('mouseenter', () => {
    list.classList.add('hovered');
  });

  //hide list on list hover out
  list.addEventListener('mouseleave', () => {
    list.classList.remove('hovered');
  });


  //set value of input equal clicked option textContent and hide list
  options.forEach(option => {
    option.addEventListener('click', () => {
      input.value = option.textContent.toString().trim();
      list.classList.remove('hovered');
      list.classList.remove('open');
      select.classList.remove('active-open');
      input.classList.add('has-content');
    })
  });

}

