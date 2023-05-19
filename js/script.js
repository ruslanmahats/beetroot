class Computer {
	constructor(processor, ram, hdd, video, wifi) {
		this.processor = processor;
		this.ram = ram;
		this.hdd = hdd;
		this.video = video;
		this.wifi = wifi;
	}
	get processorInfo() {
		return `${this.processor} ${this.ram}`;
	}
	showInfo() {
		console.log(`${this.processor} / ${this.ram} / ${this.hdd} / ${this.video} / Wi-Fi: ${this.wifi}`)
	}
}


const newComputer = new Computer('Intel Core i5-11320H', 'RAM 8 ГБ', 'SSD 512 ГБ', 'nVidia GeForce GTX 1650, 4 ГБ', 'Так');
newComputer.showInfo();
console.log(newComputer.processorInfo);

