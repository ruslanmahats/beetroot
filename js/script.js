

/* MIN ================================================================ */

// const numberOne = 0.2;
// const numberTwo = 0.1;
// const res = (numberOne + numberTwo);
// const result = (+res.toFixed(2));
// console.log(typeof(result)+ " " + result);



// let numberOne = "1";
// let numberTwo = 2;
// let result = Number(numberOne) + numberTwo;
// console.log(typeof (result) + " " + result);

// let userDiskSize;
// let numberOfFiles;
// const fileSize = 820;
// const giga = 1024;


// do {
// 	userDiskSize = prompt("Enter disc size (Gb):");
// 	if (isFinite(userDiskSize) == false || userDiskSize === "" || userDiskSize === " ") {
// 		alert("Please, enter number!");
// 	}
// 	if (+userDiskSize < 0) {
// 		alert("Sorry, number must be positive!");
// 	}
// } while (isFinite(userDiskSize) == false || userDiskSize === "" || userDiskSize === " " || +userDiskSize < 0) {
// 	if (userDiskSize === null) {
// 		alert("See you!!!");
// 	} else {
// 		numberOfFiles = (Number(userDiskSize) * giga / fileSize);
// 		alert(`You can load ${Math.floor(numberOfFiles)} file(s) to the disk.`);
// 	}
// }

/* NORM ================================================================ */

// const amount = +prompt("Enter the amount in the wallet ($):");
// const price = +prompt("Enter the price of a chocolate ($):");
// const pieces = (amount / price);
// const remainder = (amount - (Math.floor(pieces) * price));
// console.log(`You can buy ${Math.floor(pieces)} and will have ${remainder.toFixed(2)}$ left in your wallet.`);


// let num = 695;
// let result = 0;
// while (num) {
//   result = result * 10 + num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(result);

/* MAX ================================================================ */

// const depAmount = Number(prompt("Введіть суму депозиту:"));
// let monthes = Number(prompt("Введіть кількість місяців:"));
// let profit = 0.20;
// let res = 0;
// let amount = depAmount;
// let monthCount = 0;
// while (monthes) {
// 	monthes--;
// 	monthCount++;
// 	res = (amount * profit / 12);
// 	amount = (amount + res);
// 	console.log(`Нарахування за % за ${monthCount} міс.: ${res.toFixed(2)}$.`);
// }

// console.log(`\nВсього нарахувань за ${monthCount} місяців: ${(amount - depAmount).toFixed(2)}$.\nСума вашого депозиту становитиме: ${amount.toFixed(2)}$.`);



//console.log(2 && 0 && 3); // 0
//console.log(2 || 0 || 3); // 2
//console.log(2 && 0 || 3); // 3

// && has to evaluate all expressions. 2 && 3 will first evaluate the “truthiness” of 2 which is a true value but then it has to evaluate 3 as well. That last evaluated value is then returned. If at least one value is non-truthy then the first such value is returned instead.

// || on the other hand returns the first truthy expression or the last non-truthy if there are no truthy expressions.

// The reason why && returns the last possible value is that it simply has to check all expressions in order to return a result. || doesn’t have to do that. If the first expression for || is true it ignores all further ones. Likewise if the first expression for && is false it ignores all further ones (see short-circuiting in logical operators).
