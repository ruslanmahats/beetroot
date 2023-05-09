const API = 'https://jsonplaceholder.typicode.com/posts';
const wrapperEl = document.querySelector('.wrapper');

const getData = (api) => {
	return fetch(api)
		.then(res => res.json())
		.then(data => data);
}

/* <div class="card">
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
					content.</p>
				<a href="#" class="btn btn-primary">Go somewhere</a>
			</div> */

const createPost = (post) => {
	const div = document.createElement('div');
	div.classList.add('card');
	const divCb = document.createElement('div');
	divCb.classList.add('card');
	const h5 = document.createElement('h5');
	div.classList.add('card-title');
	div.classList.add('card-text');
	const a = document.createElement('a');
	div.classList.add('btn');
	div.classList.add('btn-primary');

	divCb.appendChild(a);
	divCb.appendChild(p);
	divCb.appendChild(h5);
	div.appendChild(divCb);

	return div;
}

const displayPosts = async () => {
	const data = await getData(API);
	console.log(data);
	data.forEach(element => {
		wrapperEl.appendChild(createPost(element));
	});
}

displayPosts();