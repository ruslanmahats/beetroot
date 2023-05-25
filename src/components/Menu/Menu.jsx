import './Menu.scss';

const liItems = [
	{ anchor: 'Home' },
	{ anchor: 'Blog' },
	{ anchor: 'News' },
	{ anchor: 'Gallery' },
	{ anchor: 'About' }
];

export const Menu = () => <ul className="menu">
	<li className="menu__item"><a href="#" className="menu__link">Item 1</a></li>
	<li className="menu__item"><a href="#" className="menu__link">Item 2</a></li>
	<li className="menu__item"><a href="#" className="menu__link">Item 3</a></li>
	<li className="menu__item"><a href="#" className="menu__link">Item 4</a></li>
	<li className="menu__item"><a href="#" className="menu__link">Item 5</a></li>
</ul>;