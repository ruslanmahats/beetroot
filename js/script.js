const numbers = [5, 3, 9, 10, 45];




// function summ(arr) {
// 	return arr.reduce((previousValue, item) => item + previousValue, 0);
// }

// console.log(summ(numbers));

// let max = (arr) => [...arr].sort((a, b) => b - a).shift();

// console.log(max(numbers));


// console.log(numbers);

// function addElements(arr, fromEl, ...el) {
// 	arr.splice(fromEl, 0, ...el);
// 	return arr;
// }

// addElements(numbers, 2, 'Вася', 'Вова');


// let removeElements = (arr, fromEl, quantity) => arr.splice(fromEl, quantity);

// console.log(numbers);

// removeElements(numbers, 2, 2);

// console.log(numbers);



const numbers2 = [5, 3, 9, 10, 45];

let joinArrays = (arr, arr2) => {
	let arrSliced = arr2;
	let newArr = [];
	arr.forEach(element => {
		newArr.push(element);
		let i = 0;
		arrSliced.forEach(element2 => {
			if (element === element2) {
				arrSliced.splice(i, 1);
			}
			i++;
		});
	});
	return [...newArr, ...arrSliced];
}


console.log(joinArrays(numbers, numbers2));
