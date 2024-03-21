import './Tools.scss';

import { faBars, faCartShopping, faHeart, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';

import { CartContext } from '../../../context/CartContextProvider';
import { FavoriteContext } from '../../../context/FavoriteContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

export const Tools = ({ menuIsOpen, toggleMenuIsOpen }) => {
	const { cart, toggleCartIsOpen } = useContext(CartContext);
	const { favoriteProducts } = useContext(FavoriteContext);

	return (
		<ul className='tools'>
			<li className='tools__item'>
				<FontAwesomeIcon icon={faUser} />
			</li>
			<li>
				<Link to='/favorite' className='tools__item'>
					<FontAwesomeIcon icon={faHeart} />
					{favoriteProducts.length > 0 ? (
						<span className='tools__label tools__fav'>{favoriteProducts.length}</span>
					) : null}
				</Link>
			</li>
			<li className='tools__item' onClick={toggleCartIsOpen}>
				<FontAwesomeIcon icon={faCartShopping} />
				{cart.products.length > 0 ? <span className='tools__label'>{cart.products.length}</span> : null}
			</li>
			<li
				className={!menuIsOpen ? 'tools__item burger' : 'tools__item burger burger--active'}
				onClick={toggleMenuIsOpen}>
				{!menuIsOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
			</li>
		</ul>
	);
};
