import { Link } from 'react-router-dom';
import './Menu.scss';
import { useContext } from 'react';
import { MenuActive } from '../../../context/context';

export const Menu = ({ menuItems }) => {
	const { burgerClick, setBurgerClick } = useContext(MenuActive);

	const onClickLink = () => {
		setBurgerClick(false);
		window.scrollTo(0, 0);
		document.querySelector('body').classList.remove("lock");
	}

	return (
		<>
			<ul className={!burgerClick ? "menu" : "menu menu--active"}>
				{menuItems.map(item => {
					return <li className="menu__item" key={item.id}><Link to={item.url} className="menu__link" onClick={onClickLink}>{item.name}</Link></li>
				})}
			</ul>
		</>
	)
};