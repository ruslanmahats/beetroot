let playList = [
	{ author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
	{ author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
	{ author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
	{ author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
	{ author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
	{ author: "AC/DC", song: "BACK IN BLACK" },
	{ author: "QUEEN", song: "WE WILL ROCK YOU" },
	{ author: "METALLICA", song: "ENTER SANDMAN" }
];

let body = document.body;
body.className = 'wrapper';
let ol = document.createElement('ol');
ol.className = 'song-list';
body.prepend(ol);
playList.forEach((elem, index) => {
	let li = document.createElement('li');
	li.className = 'song-list__item';
	li.textContent = (`${index + 1}. ${elem.song} - ${elem.author}`).toLowerCase();
	ol.append(li);
});

let modBtn = document.querySelector('.modal-btn');
let closeModal = document.querySelector('.modal__close');
let modal = document.querySelector('.modal');
let modalContainer = document.querySelector('.modal__container');

modBtn.onclick = () => {
	modal.classList.add('modal--active');
	setTimeout(() => modalContainer.classList.add('modal__container--active'), 100);
}

modal.addEventListener('click', () => {
	modalContainer.classList.remove('modal__container--active');
	setTimeout(() => modal.classList.remove('modal--active'), 200);
})

modalContainer.addEventListener('click', event => {
	event.stopPropagation();
})

closeModal.onclick = () => {
	modalContainer.classList.remove('modal__container--active');
	setTimeout(() => modal.classList.remove('modal--active'), 200);
}



let lightsBtn = document.querySelector('.lights-btn');
let lights = document.querySelector('.lights');
let lightCircles = lights.querySelectorAll('li');
let lightCount = 0;

lightsBtn.onclick = () => {

	// console.log(lightCount);

	// if (lightCount > 0) {
	// 	lightCircles[lightCount - 1].className = 'circle';
	// 	lightCircles[lightCount].className = 'circle';
	// }

	// lightCount++;

	// if (lightCount > 2) { lightCount = 0 }

	// const curLight = lightCircles[lightCount];
	// curLight.classList.add(curLight.getAttribute('color'));


	console.log(lightCount);
	if (lightCount == 0) {
		lightCircles[1].classList.add('yellow');
	}
	if (lightCount == 1) {
		lightCircles[0].className = 'circle';
		lightCircles[1].className = 'circle';
		lightCircles[2].classList.add('green');
	}
	if (lightCount == 2) {
		lightCircles[0].className = 'circle';
		lightCircles[1].classList.add('yellow');
		lightCircles[2].className = 'circle';
	}
	if (lightCount == 3) {
		lightCircles[0].classList.add('red');
		lightCircles[1].className = 'circle';
		lightCircles[2].className = 'circle';
	}
	lightCount++;
	if (lightCount > 3) { lightCount = 0 }
}