export const cutTextAfterNSymbols = (text, nSymbols) => {
	const newText = text.replace(/\n/g, ' ').substr(0, nSymbols);
	return <p>{`${newText}...`}</p>;
};

export const makeTextToPText = (text) => {
	const newText = text.split('\n');
	return (newText.map(item => {
		return <p>{item}</p>
	})
	)
};

export const getNRandomItems = (number, arr, setFunc) => {
	const copy = [...arr];
	const randomProducts = [];

	while (randomProducts.length < number && copy.length > 0) {
		const randomIndex = Math.floor(Math.random() * copy.length);
		const randomProduct = copy.splice(randomIndex, 1)[0];
		randomProducts.push(randomProduct);
	}
	setFunc(randomProducts);
};