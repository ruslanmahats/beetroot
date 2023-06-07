import './Header.scss';
import { CartActive, MenuActive } from '../../context/context';
import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';
import { Tools } from './Tools/Tools';
import { useState } from 'react';
import { Cart } from './Cart/Cart';

export const Header = ({ scroll, menuItems }) => {
	const [burgerClick, setBurgerClick] = useState(false);
	const [cartActive, setCartActive] = useState(false);

	return (
		<>
			<CartActive.Provider value={{ cartActive, setCartActive }}>
				<MenuActive.Provider value={{ burgerClick, setBurgerClick }}>
					<header className={(scroll === 0 ? "header" : "header header--fixed") + (!burgerClick ? "" : " header--active")}>
						<div className='wrapper'>
							<div className="header__inner">
								<div className="header__logo"><Logo /></div>
								<div className="header__menu"><Menu menuItems={menuItems} /></div>
								<div className="header__tools"><Tools /></div>
							</div>
						</div>
					</header >
					<Cart />
				</MenuActive.Provider>
			</CartActive.Provider>
		</>
	)
};
