class User {
	constructor(id, name, role) {
		if (role !== 'admin' && role !== 'user') {
			console.log('Некоректне поле role. Повинно бути або "admin", або "user".');
		} else {
			this.id = id;
			this.name = name;
			this.role = role;
			this.userLogged = false;
			this.pass;
		}
	}
	getName() {
		console.log(this.name);
	}
	getRole() {
		console.log(this.role);
	}
	logIn() {
		this.userLogged = true;
		console.log(`Вітаємо, ${this.name}!`)
	}
	logOut() {
		this.userLogged = false;
		console.log(`Всього доброго, ${this.name}!`)
	}
	сhangeName(name) {
		this.name = name;
		console.log(`Ваше імя змінено на ${this.name}!`)
	}
	changePassword(newPass) {
		this.pass = newPass;
		console.log(`Ваш пароль успішно змінено!`)
	}
}

class Admin extends User {
	constructor(id, name) {
		super(id, name, 'admin');
		this.users = [];
	}
	addUser(user) {
		if (user instanceof User) {
			this.users.push(user);
		} else {
			console.log("Невірний клас об'єкта!");
		}
	}
	removeUser(user) {
		const index = this.users.indexOf(user);
		if (index !== -1) {
			const removedUser = this.users.splice(index, 1)[0];
			console.log('Користувач ' + removedUser.getName() + ' видалений.');
		} else {
			console.log('Користувача не знайдено.');
		}
	}
	changeUserRole(user, newRole) {
		if (user instanceof User) {
			user.role = newRole;
			console.log('Роль користувача ' + user.getName() + ' змінено на ' + newRole);
		} else {
			console.log('Невірний обʼєкт користувача.');
		}
	}
	getAllUsers() {
		return this.users;
	}
	removeAllUsers() {
		this.users = [];
		console.log('Всі користувачі видалені.');
	}
}



const admin = new Admin(1234, 'Ruslan');
const user1 = new User(1234, 'Ihor', 'user');
const user2 = new User(1234, 'Victor', 'user');

user1.changePassword('rtO?Yw');

console.log(admin);

console.log(user1.pass);


const lol = 1;

admin.addUser(user1);
admin.addUser(user2);

console.log(admin.users);


//---------------------------------------------------------------------