const burgerElement = document.querySelector('.burger');
const menuElement = document.querySelector('.menu');
const bodyElement = document.querySelector('body');

burgerElement.addEventListener('click', () => {
	burgerElement.classList.toggle('burger--active');
	menuElement.classList.toggle('menu--active');
	bodyElement.classList.toggle('lock');
});

const swiperHero = new Swiper('.swiper-hero', {
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const swiperLatest = new Swiper('.swiper-latest', {
	initialSlide: 0,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next1',
		prevEl: '.swiper-button-prev1',
	},
	pagination: {
		el: '.swiper-pagination1',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});