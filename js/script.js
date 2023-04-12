// let number = Number(prompt('Введіть кількість овець:'));
// let result = 0;
// if (!number && number <= 0) {
// 	alert('Введіть число більше 0!');
// } else {
// 	for (let i = 1; i <= number; ++i) {
// 		result = result + i + ' Вівця...'
// 	}
// }

// console.log(result);

// let number = Number(prompt('Введіть число:'));

// for (let i = number; i > 0; i--) {
// 	console.log(i);
// }


let number = Number(prompt('Введіть число:'));
let res = '';

for (let i = number; i > 0; i--) {
	res = res + '#'
	console.log(res);
}