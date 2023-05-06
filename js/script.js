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
	},
});

const swiperArrivals = new Swiper('.swiper-arrivals', {
	initialSlide: 2,
	centeredSlides: true,
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
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 5,
			spaceBetween: 20,
			loopedSlides: 4,
		},
	},
});

const swiperPartners = new Swiper('.swiper-partners', {
	initialSlide: 0,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next2',
		prevEl: '.swiper-button-prev2',
	},
	pagination: {
		el: '.swiper-pagination2',
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 6,
			spaceBetween: 10,
		},
		1200: {
			slidesPerView: 9,
			spaceBetween: 20,
		},
	},
});
