import { Link } from 'react-router-dom';
import './Menu.scss';
import { useContext } from 'react';
import { MenuActive } from '../../../context/context';

export const Menu = () => {
	const { burgerClick, setBurgerClick } = useContext(MenuActive);

	const onClickLink = () => {
		setBurgerClick(false);
		window.scrollTo(0, 0);
		document.querySelector('body').classList.remove("lock");
	}

	return (
		<>
			<ul className={!burgerClick ? "menu" : "menu menu--active"}>
				<li className='menu__item'><Link to={"/"} className='menu__link' onClick={onClickLink}>Home</Link></li>
				<li className='menu__item'><Link to={"/shop"} className='menu__link' onClick={onClickLink}>Shop</Link></li>
				<li className='menu__item'><Link to={"/blog"} className='menu__link' onClick={onClickLink}>Blog</Link></li>
				<li className='menu__item'><Link to={"/about"} className='menu__link' onClick={onClickLink}>About</Link></li>
				<li className='menu__item'><Link to={"/contacts"} className='menu__link' onClick={onClickLink}>Contacts</Link></li>
			</ul>
		</>
	)
};