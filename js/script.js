/* MIN +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// let userAge = prompt('How old are you?');
// if (userAge == null) {
// 	console.log('See you!');
// } else if (!isNaN(userAge)) {
// 	switch (true) {
// 		case (+userAge > 0 && userAge <= 11):
// 			console.log('You are a kid!');
// 			break;
// 		case (+userAge > 11 && userAge <= 17):
// 			console.log('You are a teen!');
// 			break;
// 		case (+userAge > 18 && userAge <= 59):
// 			console.log('You are adult!');
// 			break;
// 		case (+userAge > 59):
// 			console.log('You are pensioner!');
// 			break;
// 		default:
// 			console.log('Enter positive number!');
// 			break;
// 	}
// } else {
// 	console.log('Sorry, not a number! Enter positive number!');
// }



//----------------------

// let number = prompt('Enter number 0-9:');
// console.log(number);
// if (number == null) {
// 	console.log('See you!');
// } else if (!isNaN(number) && number !== '' && /^\s+$/.test(number) == false) {
// 	switch (true) {
// 		case (number == 0):
// 			console.log(')');
// 			break;
// 		case (number == 1):
// 			console.log('!');
// 			break;
// 		case (number == 2):
// 			console.log('@ "');
// 			break;
// 		case (number == 3):
// 			console.log('# №');
// 			break;
// 		case (number == 4):
// 			console.log('$ ;');
// 			break;
// 		case (number == 5):
// 			console.log('%');
// 			break;
// 		case (number == 6):
// 			console.log('^ :');
// 			break;
// 		case (number == 7):
// 			console.log('& ?');
// 			break;
// 		case (number == 8):
// 			console.log('*');
// 			break;
// 		case (number == 9):
// 			console.log('(');
// 			break;
// 		default:
// 			console.log('This number is not 0-9!');
// 			break;
// 	}
// } else {
// 	console.log('Sorry, not a number! Enter number 0-9!');
// }

//--------------------------------------------

// let numberOne = prompt('Enter number one:');
// if (numberOne == null) {
// 	console.log('See you!');
// } else {
// 	let numberTwo = prompt('Enter number two:');
// 	if (numberTwo == null) {
// 		console.log('See you!');
// 	} else if (!isNaN(numberOne) && numberOne !== '' && /^\s+$/.test(numberOne) == false && !isNaN(numberTwo) && numberTwo !== '' && /^\s+$/.test(numberTwo) == false) {
// 		let res = 0;
// 		for (let i = +numberOne; i <= +numberTwo; i++) {
// 			res = res + i;
// 		}
// 		console.log(`The sum of numbers in the range from ${numberOne} to ${numberTwo} is ${res}`);
// 	} else {
// 		console.log('Sorry, one of entered symbols is not a number! Try again!');
// 	}
// }


//-----------------------------------------------



// let A = [140, 400];


// let n = A.length;
// let x = Math.abs(A[0]);
// for (var i = 1; i < n; i++) {
// 	let y = Math.abs(A[i]);
// 	while (x && y) {
// 		console.log(`${x} ${y}`);
// 		if (x > y) {
// 			x = x % y;
// 			console.log(`x = x % y;`);
// 		} else {
// 			y = y % x;
// 			console.log(`y = y % x;`);
// 		}
// 		console.log(`${x} ${y}\n\n`);
// 	}
// 	x += y;
// 	console.log(x);
// }



//-----------------------------------------------

// let x = +prompt("Введіть число:");
// for (let i = 1; i <= x; i++) {
// 	if (x % i == 0) {
// 		console.log(i);
// 	}
// }



/* NORM +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



// let number = +prompt("Введіть пятизначне число!");
// let res = 0;
// let num = number;
// while (number) {
// 	res = res * 10 + (number % 10);
// 	number = Math.floor(number / 10);
// }
// if (num === res) {
// 	console.log(`Вітання! Ви ввели паліндром!`);
// }
// else {
// 	console.log(`Ви ввели звичайне число!`);
// }


//-----------------------------------------------


// let sum = prompt("Введіть суму покупки");
// let discount = [3, 5, 7];
// let discountSum = [200, 300, 500];
// let toNextDiscount;
// let pay;
// if (sum >= discountSum[0] && sum < discountSum[1]) {
// 	sum = (+sum).toFixed(2);
// 	pay = (sum - (sum * discount[0] / 100)).toFixed(2);
// 	toNextDiscount = (discountSum[1] - sum).toFixed(2);
// 	console.log(`Ваша сума покупки ${sum}грн., ви отримали знижку ${discount[0]}%.\nДо оплати ${pay}грн.\nЩоб отримати знижку ${discount[1]}% необхідно ще докупити товару на ${toNextDiscount}грн.`);
// } else if (sum >= 300 && sum < 500) {
// 	sum = (+sum).toFixed(2);
// 	pay = (sum * discount[0] / 100).toFixed(2);
// 	toNextDiscount = (discountSum[2] - sum).toFixed(2);
// 	console.log(`Ваша сума покупки ${sum}грн., ви отримали знижку ${discount[1]}%.\nДо оплати ${pay}грн.\nЩоб отримати знижку ${discount[2]}% необхідно ще докупити товару на ${toNextDiscount}грн.`);
// } else if (sum >= 500) {
// 	sum = (+sum).toFixed(2);
// 	pay = (sum * discount[0] / 100).toFixed(2);
// 	console.log(`Ваша сума покупки ${sum}грн., ви отримали максимальну знижку ${discount[3]}%.\nДо оплати ${pay}грн.\n10`);
// } else if (!sum || /^\s+$/.test(sum) == true) {
// 	console.log(`Всього доброго!`);
// } else {
// 	sum = (+sum).toFixed(2);
// 	toNextDiscount = (discountSum[0] - sum).toFixed(2);
// 	console.log(`Ваша сума покупки ${sum}грн., ви не отримали знижку на покупку.\nДо оплати ${pay}грн.\nЩоб отримати знижку ${discount[0]}% необхідно ще докупити товару на ${toNextDiscount}грн.`);
// }

//-----------------------------------------------


// let number;
// let numbersCount = 10;
// let even = 0, odd = 0, zero = 0, positive = 0, negative = 0;
// for (i = 1; i <= numbersCount; i++) {
// 	number = prompt(`Enter ${numbersCount} numbers:`);
// 	if (number == null) {
// 		alert('See you!');
// 		break;
// 	} else if (isNaN(number) || /^\s+$/.test(number)) {
// 		alert('Not a number!!!');
// 		i--;
// 	} else {
// 		if (number > 0) { positive += 1; }
// 		if (number < 0) { negative += 1; }
// 		if (number == 0) { zero += 1; }
// 		if (number != 0 && number % 2 == 0) { even += 1; }
// 		if (number % 2 !== 0) { odd += 1; }
// 	}
// }
// if (number == null || isNaN(number) || /^\s+$/.test(number)) {
// } else {
// 	console.log(`You entered ${numbersCount} numbers:\n
// even -  ${even}
// odd -  ${odd}
// zero -  ${zero}
// positive -  ${positive}
// negative -  ${negative}`)
// }


//-----------------------------------------------