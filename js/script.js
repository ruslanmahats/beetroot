
const buttonSearchElem = document.querySelector('.search-btn');
const inputSearchElem = document.querySelector('.search');
const searchForm = document.forms.searchform;
const searchRadio = searchForm.elements.type;
let postsWrapper = document.querySelector('.posts');

const KEY = 'e555ace9';
const API = `http://www.omdbapi.com/?apikey=${KEY}&`;

let inputSearch = inputSearchElem;

const getData = (API) => {
	return fetch(API)
		.then(res => res.json())
		.then(data => data);
}

function createPost(el) {

	const div = document.createElement('div');
	div.classList.add('card');
	const img = document.createElement('img');
	img.classList.add('card-img-top');
	img.src = el.Poster;
	const divBody = document.createElement('div');
	divBody.classList.add('card-body');
	const h5 = document.createElement('h5');
	h5.classList.add('card-title');
	const p = document.createElement('p');
	p.classList.add('card-text');
	p.innerText = el.Title;

	divBody.appendChild(p);
	divBody.appendChild(h5);
	div.appendChild(img);
	div.appendChild(divBody);
	postsWrapper.appendChild(div);
}

buttonSearchElem.addEventListener('click', (e) => {
	e.preventDefault();
	postsWrapper.innerHTML = "";
	let inputSearch = inputSearchElem.value;
	if (inputSearch == '') {
		const errorMessage = 'Input is empty!';
		const errorDiv = document.createElement('div');
		errorDiv.classList.add('error');
		inputSearchElem.classList.add('error');
		errorDiv.innerText = errorMessage;
		inputSearchElem.after(errorDiv);
		console.log(errorMessage);
		return;
	}
	let radioValue = searchRadio.value;
	let search;
	if (radioValue == 'all') {
		search = API + 's=' + inputSearch;
	} else {
		search = API + 's=' + inputSearch + '&type=' + radioValue;
	}
	const getPosts = async () => {
		const data = await getData(search);
		if (data.Search) {
			data.Search.forEach(element => createPost(element));
		} else {
			const errorNoPosts = document.createElement('div');
			errorNoPosts.innerText = 'No entries found!';
			postsWrapper.appendChild(errorNoPosts);
		}

	}
	getPosts();
});