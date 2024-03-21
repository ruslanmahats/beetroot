import './Menu.scss';

import { NavLink } from 'react-router-dom';

export const Menu = ({ menuItems, menuIsOpen, toggleMenuIsOpen }) => {
	const onClickLink = () => {
		if (menuIsOpen) {
			toggleMenuIsOpen();
		}
		window.scrollTo(0, 0);
	};

	return (
		<ul className={!menuIsOpen ? 'menu' : 'menu menu--active'}>
			{menuItems.map((item) => {
				return (
					<li className='menu__item' key={item.id}>
						<NavLink to={item.url} className='menu__link' onClick={onClickLink}>
							{item.name}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};
