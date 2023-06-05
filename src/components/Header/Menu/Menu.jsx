import { Link } from 'react-router-dom';
import './Menu.scss';

export const Menu = () => {
	return (
		<>
			<ul className="menu">
				<li className='menu__item'><Link to={"/"} className='menu__link'>Home</Link></li>
				<li className='menu__item'><Link to={"/shop"} className='menu__link'>Shop</Link></li>
				<li className='menu__item'><Link to={"/blog"} className='menu__link'>Blog</Link></li>
				<li className='menu__item'><Link to={"/about"} className='menu__link'>About</Link></li>
				<li className='menu__item'><Link to={"/contacts"} className='menu__link'>Contacts</Link></li>
			</ul>
		</>
	)
};