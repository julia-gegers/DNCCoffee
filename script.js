const open = document.getElementById('open');
const modalContainer = document.getElementById('modalContainer');
const close =  document.getElementById('close');

open.addEventLister('click', () => {
    modalContainer.classList.add('show');
});

close.addEventLister('click', () => {
    modalContainer.classList.remove('show');
});

