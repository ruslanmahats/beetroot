export const Request = (url) => {
	return fetch(url).then((res) => res.json());
};
