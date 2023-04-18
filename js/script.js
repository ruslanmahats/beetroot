
// function sum(...args) {
// 	let res = 0;
// 	for (let i = 0; i < args.length; i++) {
// 		console.log(args[i]);
// 		res = res + args[i];
// 	}
// 	return res;
// }

// console.log(sum(1, 2, 3, 4, 5));

// ----------------------------

// function sum(a, b) {
// 	let x = a + b;
// 	return x;
// }

// function show(string) {
// 	console.log(string);
// }

// show(sum(2, 3));

// ----------------------------

// function sum(a, b, showFunc) {
// 	let x = a + b;
// 	showFunc(x);
// }

// function show(string) {
// 	console.log(string);
// }

// function alertMessage(string) {
// 	alert(string);
// }

// sum(2, 3, alertMessage);

// HOMEWORK MIN ------------------------------------------------


// function newDeclaration (){}
// let someFunc1 = function newDeclar (){};
// let someFunc = function (){};
// let someFunc3 = () => {};

// ----------------------------------

// function argsArrLengs (...args){
// 	console.log(args.length);
// }

// argsArrLengs(1, 2, 3, 4);

// --------------------------------------

// function compare(a, b) {
// 	if (a < b) { return -1; }
// 	else if (a > b) { return 1; }
// 	else { return 0; }
// }

// console.log(compare(40, 40));

// --------------------------------------


// let res = 1;
// function factorialRecur(x) {
// 	let i = x;
// 	if (i > 0) {
// 		res = res * i;
// 		i--;
// 		factorialRecur(i);
// 	}
// 	if (i < 0) {
// 		res = res * i;
// 		i++;
// 		factorialRecur(i);
// 	}
// 	if (i = 0) {
// 		return 1;
// 	}
// 	return res;
// }

// console.log(factorialRecur(0));


// --------------------------------------


// let res = '';
// let i = 0;
// function concRec(...args) {
// 	if (i < args.length) {
// 		res = res + args[i];
// 		i++;
// 		concRec(...args);
// 	}
// 	return res;
// }

// console.log(concRec(1, 2, 3));


// --------------------------------------


// function rectangleArea(a, b) {
// 	return arguments.length < 2 ? res = a ** 2 : res = a * b;
// }

// console.log(rectangleArea(1, 6));


// HOMEWORK NORM ------------------------------------------------


function perfectNumber(x) {
	let sum = 0;
	for (let i = 1; i < x; i++) {
		let res = x % i;
		if (res == 0) {
			sum = sum + i;
		}
	}
	if (sum == x) {
		return true;
	} else {
		return false;
	}
}


// --------------------------------------

function perfectNumberRange(min, max) {
	let res = [];
	for (let i = min; i < max; i++) {
		if (perfectNumber(i) == true) {
			res.push(i);
			console.log(i);
		}
	}
	return res;
}

console.log(perfectNumberRange(0, 100));

// --------------------------------------