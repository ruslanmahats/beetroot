const sideBarHideLinkElm = document.querySelector('.side-bar__hide-link');
const hideElm = document.querySelector('.hide');
const sideBarElm = document.querySelector('.side-bar');
const logoElm = document.querySelector('.logo');
const logoIconElm = document.querySelector('.logo__icon');
const logoTextElm = document.querySelector('.logo__text');
const sideBarSectionDividerElm = document.querySelector('.side-bar__section-divider');
const sideBarSectionNameElm = document.querySelector('.side-bar__section-name');
const sideBarItemLinkElm = document.querySelector('.side-bar__item-link');
const sideBarIconElm = document.querySelector('.side-bar__icon');
const sideBarLabelElm = document.querySelector('.side-bar__label');
const sideBarItemNameElm = document.querySelector('.side-bar__item-name');

sideBarHideLinkElm.addEventListener('click', () => {
	hideElm.classList.toggle('hide--active');
	sideBarElm.classList.toggle('side-bar--active');
	logoElm.classList.toggle('logo--active');
	logoIconElm.classList.toggle('logo__icon--active');
	logoTextElm.classList.toggle('logo__text--active');
	sideBarSectionDividerElm.classList.toggle('side-bar__section-divider--active');
	sideBarSectionNameElm.classList.toggle('side-bar__section-name--active');
	sideBarItemLinkElm.classList.toggle('side-bar__item-link--active');
	sideBarIconElm.classList.toggle('side-bar__icon--active');
	sideBarLabelElm.classList.toggle('side-bar__label--active');
	sideBarItemNameElm.classList.toggle('side-bar__item-name--active');
	sideBarHideLinkElm.classList.toggle('side-bar__hide-link--active');
});
