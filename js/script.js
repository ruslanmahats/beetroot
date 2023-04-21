// min -----------------------------------


const carBrand = {
	brand: 'Fiat',
	name: 'Punto',
}

const carEngine = {
	fuel: 'disel',
	capacity: 2.0,
	turbo: true,
	consumption: 9,
}

const carBody = {
	color: 'white',
	person: 5,
	type: 'hatchback',
}

const carDriver = {
	color: 'white',
	person: 5,
	type: 'hatchback',
}

const methods = {
	showCar: function () {
		console.log(`This car is ${this.brand} ${this.name}:
		fuel: ${this.fuel}
		capacity: ${this.capacity}
		type: ${this.type}`);
	},
	addDriver: function (name) {
		this.driver = name;
	},
	checkDriver: function () {
		if (this.driver) {
			console.log(true);
			return true;
		} else {
			console.log(false);
			return false;
		}
	},
	checkTimeAndFuel: function (distance, speed) {
		let time = distance / speed;
		let fuel = this.consumption / 100 * distance;
		let stops = Math.floor(time / 4);
		console.log(stops);
		if (time > 4) {
			if (time % 4 === 0) { time = time + stops - 1 }
			else { time = time + stops };
		};
		let hv = 60 * (time - Math.floor(time));
		return console.log(`Ваша подорож триватиме ${Math.floor(time)}год. ${Math.floor(hv)}хв. та витрата палива становитиме ${fuel}л. на відстань ${distance}км із середньою швидкістю ${speed}км/год.`);
	}
}


const car = { ...carBrand, ...carEngine, ...carBody, ...carDriver, ...methods }
car.showCar();
car.addDriver('Ruslan');
console.log(car.driver);
car.checkDriver();
car.checkTimeAndFuel(1650, 50);


// norm -----------------------------------


const timer = {
	hours: 0,
	minutes: 0,
	seconds: 0,
	showTimer: function () {
		if (this.hours <= 9) {
			this.hours = '0' + this.hours;
		}
		if (this.minutes <= 9) {
			this.minutes = '0' + this.minutes;
		}
		if (this.seconds <= 9) {
			this.seconds = '0' + this.seconds;
		}
		console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
	},
	setTime: function (h, m, s) {
		if (this.seconds < 60) {
			this.seconds = this.seconds + s;
		} else {
			this.minutes = this.minutes + Math.floor((this.seconds + s) / 60);
			this.seconds = (this.seconds + s) % 60;
		};
		if (this.minutes < 60) {
			this.minutes = this.minutes + m;
		} else {
			this.hours = this.hours + Math.floor((this.minutes + m) / 60);
			this.minutes = (this.minutes + m) % 60;
		};
		this.hours = this.hours + h;
	},
	setHours: function (h) {
		this.hours = this.hours + h;
	},
	setMinutes: function (m) {
		this.hours = this.hours + Math.floor((this.minutes + m) / 60);
		this.minutes = (this.minutes + m) % 60;
	},
	setSeconds: function (s) {
		this.minutes = this.minutes + Math.floor((this.seconds + s) / 60);
		this.seconds = (this.seconds + s) % 60;
		if (this.minutes >= 60) {
			this.hours = this.hours + Math.floor((this.minutes) / 60);
			this.minutes = (this.minutes) % 60;
		};
	},
}


timer.setTime(8, 50, 5);
timer.setSeconds(30);
timer.setMinutes(20);
timer.setHours(0);

timer.showTimer();