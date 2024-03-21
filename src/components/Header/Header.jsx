import './Header.scss';

import { Cart } from './Cart/Cart';
import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';
import { MenuContext } from '../../context/MenuContextProvider';
import { ScrollContext } from '../../context/ScrollContextProvider';
import { Tools } from './Tools/Tools';
import { useContext } from 'react';

export const Header = ({ menuItems }) => {
	const { menuIsOpen, toggleMenuIsOpen } = useContext(MenuContext);
	const scroll = useContext(ScrollContext);

	return (
		<>
			<header
				className={(scroll === 0 ? 'header' : 'header header--fixed') + (!menuIsOpen ? '' : ' header--active')}>
				<div className='wrapper'>
					<div className='header__inner'>
						<div className='header__logo'>
							<Logo />
						</div>
						<div className='header__menu'>
							<Menu menuItems={menuItems} menuIsOpen={menuIsOpen} toggleMenuIsOpen={toggleMenuIsOpen} />
						</div>
						<div className='header__tools'>
							<Tools menuIsOpen={menuIsOpen} toggleMenuIsOpen={toggleMenuIsOpen} />
						</div>
					</div>
				</div>
			</header>
			<Cart />
		</>
	);
};
