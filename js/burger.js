const menuElm = document.querySelector('.menu');
const burgerElm = document.querySelector('.burger__menu');
const bodyElm = document.querySelector('body');

burgerElm.addEventListener('click', () => {
	burgerElm.classList.toggle('burger__menu--active');
	menuElm.classList.toggle('menu--active');
	bodyElm.classList.toggle('lock');

});