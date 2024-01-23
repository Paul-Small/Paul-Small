const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const bodyElement = document.body;

menuIcon.addEventListener('click', (e) => {
   menuIcon.classList.toggle('active');
   menuBody.classList.toggle('menu-open');
   bodyElement.classList.toggle('lock')
});