
// ---------------------------------------------------------

const edit = document.querySelector('.edit');
const body = document.body;
const textArea = document.createElement('textarea');
textArea.className = 'editText';


document.addEventListener('keydown', (event) => {
	if ((event.ctrlKey || event.metaKey) && event.code == 'KeyE') {
		event.preventDefault();
		textArea.value = edit.innerText;
		edit.innerText = '';
		edit.prepend(textArea);
		textArea.style.height = "";
		textArea.style.height = textArea.scrollHeight + 3 + "px";
	}
	if ((event.ctrlKey || event.metaKey) && event.code == 'KeyS') {
		event.preventDefault();
		edit.innerText = textArea.value;
	}
});

document.addEventListener('input', (event) => {
	textArea.style.height = "";
	textArea.style.height = textArea.scrollHeight + 2 + "px";
});

// ----------------------------------------------------------

const someTable = document.querySelector('.table');
const summTh = someTable.querySelector('.table__summ');
const priceTh = someTable.querySelector('.table__price');
const quantityTh = someTable.querySelector('.table__quantity');

function sortTableToHight(table, col) {
	let sortedRows = Array.from(table.rows)
		.slice(1)
		.sort((rowA, rowB) => { return rowA.cells[col].innerText - rowB.cells[col].innerText });
	table.rows[0].after(...sortedRows);
}

function sortTableToLow(table, col) {
	let sortedRows = Array.from(table.rows)
		.slice(1)
		.sort((rowA, rowB) => { return rowB.cells[col].innerText - rowA.cells[col].innerText });
	table.rows[0].after(...sortedRows);
}


let clickOnSummCounter = 0;
let summInnerText = summTh.innerHTML;
summTh.innerHTML = summTh.innerHTML + ' ' + '&darr;' + '&uarr;';
let clickOnPriceCounter = 0;
let summPriceText = priceTh.innerHTML;
priceTh.innerHTML = priceTh.innerHTML + ' ' + '&darr;' + '&uarr;';



summTh.addEventListener('click', (event) => {
	priceTh.innerHTML = summPriceText + ' ' + '&darr;' + '&uarr;';
	clickOnPriceCounter = 0;
	if (clickOnSummCounter == 0) {
		sortTableToHight(someTable, 4);
		summTh.innerHTML = summInnerText + ' ' + '&darr;';
	}
	else {
		sortTableToLow(someTable, 4);
		summTh.innerHTML = summInnerText + ' ' + '&uarr;';
	}
	clickOnSummCounter++;
	if (clickOnSummCounter > 1) { clickOnSummCounter = 0; }
});



priceTh.addEventListener('click', (event) => {
	summTh.innerHTML = summInnerText + ' ' + '&darr;' + '&uarr;';
	clickOnSummCounter = 0;
	if (clickOnPriceCounter == 0) {
		sortTableToHight(someTable, 3);
		priceTh.innerHTML = summPriceText + ' ' + '&darr;';
	}
	else {
		sortTableToLow(someTable, 3);
		priceTh.innerHTML = summPriceText + ' ' + '&uarr;';
	}
	clickOnPriceCounter++;
	if (clickOnPriceCounter > 1) { clickOnPriceCounter = 0; }
});



// -----------------------------------------------------------------------


let resizableBlock = document.querySelector('.resizable');
let resizeCorner = document.querySelector('.resize-corner');

let mouseX = 0;
let mouseY = 0;
let deltaX = 0;
let deltaY = 0;
let resizableBlockWidth = 0;
let resizableBlockHeight = 0;

const mainElement = document.documentElement;


resizeCorner.addEventListener('mousedown', initDrug);

function initDrug(event) {
	resizableBlockWidth = resizableBlock.offsetWidth;
	resizableBlockHeight = resizableBlock.offsetHeight;
	mouseX = event.clientX;
	mouseY = event.clientY;
	window.addEventListener('mousemove', doDrug);
}

function doDrug(event) {
	deltaX = event.clientX - mouseX;
	deltaY = event.clientY - mouseY;
	const documentWidth = mainElement.clientWidth;
	const windowWidth = window.innerWidth;
	if (windowWidth !== documentWidth) {
		resizableBlock.style.width = (resizableBlockWidth + deltaX) + 'px';
		resizableBlock.style.height = (resizableBlockHeight + deltaY) + 'px';
	} else {
		resizableBlock.style.width = (resizableBlockWidth + deltaX) + 'px';
		resizableBlock.style.height = (resizableBlockHeight + deltaY) + 'px';

	}
}

document.addEventListener('mouseup', (event) => {
	window.removeEventListener('mousemove', doDrug);
	resizeCorner.removeEventListener('mosedown', initDrug);
});

