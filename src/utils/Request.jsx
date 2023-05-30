export class Request {
	static get(url) { return fetch(url).then(res => res.json()) }
}