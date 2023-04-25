let buyList = [];

function ItemInList(name, quantity, price, bought) {
	this.name = name;
	this.quantity = quantity;
	this.price = price;
	this.summ = price * quantity;
	this.bought = bought;
}

buyList.push(
	new ItemInList('Monitor Bosh', 1, 200, false),
	new ItemInList('Computer Dell', 10, 500, true),
	new ItemInList('Vacuum Cleaner Bosh', 6, 200, false),
	new ItemInList('TV', 10, 500, true),
	new ItemInList('Phone iPhone', 8, 200, false),
	new ItemInList('Microwave LG', 2, 500, true),
	new ItemInList('Scooter', 2, 200, false)
);

// ф покупка продукту
function hasBought(name) {
	let flag;
	buyList.forEach((element) => {
		if (name == element.name) {
			element.bought = true;
			console.log(`"${element.name}" property 'bought' set to '${element.bought}'.`);
			flag = true;
			return;
		}
	});
	if(flag){return;}
	console.log(`Element with name "${name}" not found.`);
}

hasBought('Scooter');

// ф сортування списку
let sortedList = [...buyList].sort((a, b) => a.bought > b.bought ? -1 : 1);

// ф видалення обєкта по назві
function removeItem(name) {
	let newBuyList;
	buyList.forEach((element, index) => {
		if (name == element.name) {
			newBuyList = buyList.slice();
			newBuyList.splice(index, 1);
			console.log(`Element "${element.name}" removed.`);
		}
	});
	return newBuyList;
}


let newBuyList = removeItem('Scooter');

// ф додавання нового/додавання кількості існуючого за назвою
function addItem(name, quantity, price, bought) {
	let index = newBuyList.findIndex((item) => item.name == name);
	if (index != -1) {
		newBuyList[index].quantity += quantity;
		newBuyList[index].price = price;
		newBuyList[index].summ = newBuyList[index].quantity * newBuyList[index].price;

	} else {
		newBuyList.push(new ItemInList(name, quantity, price, bought));
		console.log('New item added');
	}
}

console.log(buyList);
console.log(sortedList);
console.log(newBuyList);

addItem('TV', 10, 500, true); // тест додавання існуючого обєкта
addItem('TV2', 10, 500, true); // тест додавання нового обєкта

console.log(newBuyList);

// ф сума всіх у списку враховуючи кількість
function summTotal(arr) {
	let res = 0;
	arr.forEach((item) => {
		res += item.summ;
	});
	return 'Total: ' + res;
}

// ф сума не куплених у списку враховуючи кількість
function summNotBought(arr) {
	let res = 0;
	arr.forEach((item) => {
		if (item.bought == false) {
			res += item.summ;
		}
	});
	return 'Summary not bought: ' + res;
}

// ф сортування за вартістю (0 = 0...n)
function sortBySumm(arr, sort = 0) {
	return sort === 0 ? arr.sort((a, b) => a.summ - b.summ) : arr.sort((a, b) => b.summ - a.summ);
}

console.log(summTotal(newBuyList));
console.log(summNotBought(newBuyList));
console.log(sortBySumm(newBuyList, 1));