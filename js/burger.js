const burgerElm = document.querySelector('.burger');
const menuElm = document.querySelector('.menu');
const menuContainerElm = document.querySelector('.menu__container');
const menunavElm = document.querySelector('.menu__nav');
const navListElm = document.querySelector('.navigation__list');
const bodyElm = document.querySelector('.body');
burgerElm.addEventListener('click', () => {
	burgerElm.classList.toggle('burger--active');
	menuElm.classList.toggle('menu--active');
	menuContainerElm.classList.toggle('menu__container--active');
	menunavElm.classList.toggle('menu__nav--active');
	navListElm.classList.toggle('navigation__list--active');
	bodyElm.classList.toggle('body--lock');
});