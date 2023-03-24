const sideBarHideLinkElm = document.querySelector('.side-bar__hide-link');
const hideElm = document.querySelector('.hide');
const sideBarElm = document.querySelector('.side-bar');
const topBarElm = document.querySelector('.top-bar');
const logoElm = document.querySelector('.logo');
const logoIconElm = document.querySelector('.logo__icon');
const logoTextElm = document.querySelector('.logo__text');


sideBarHideLinkElm.addEventListener('click', () => {
	sideBarHideLinkElm.classList.toggle('side-bar__hide-link--active');
	hideElm.classList.toggle('hide--active');
	sideBarElm.classList.toggle('side-bar--active');
	topBarElm.classList.toggle('top-bar--active');
	logoElm.classList.toggle('logo--active');
	logoIconElm.classList.toggle('logo__icon--active');
	logoTextElm.classList.toggle('logo__text--active');
});
