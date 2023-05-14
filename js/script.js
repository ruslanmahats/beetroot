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
		900: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});


let map;
let marker;
// const markerImg = document.createElement("img");
// markerImg.src = "/assets/icons/location.png";

async function initMap() {
	const { Map } = await google.maps.importLibrary("maps");
	map = new Map(document.getElementById("map"), {
		center: { lat: 40.668, lng: -73.928 },
		zoom: 15,
		mapId: '45a6b3075846a08b',
		disableDefaultUI: true,

	});
	marker = new google.maps.Marker({
		position: { lat: 40.673, lng: -73.930 },
		map,
		title: "Monticello",
		icon: '../assets/icons/location.png',
	});
}

initMap();