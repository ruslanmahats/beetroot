import './Tools.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { MenuActive, CartActive } from '../../../context/context';

export const Tools = () => {
	const { burgerClick, setBurgerClick } = useContext(MenuActive);
	const { cartActive, setCartActive } = useContext(CartActive);

	const onClickChangeBurger = () => {
		const body = document.querySelector('body');
		if (!burgerClick) {
			setBurgerClick(true);
			body.classList.add("lock");
		}
		else {
			setBurgerClick(false);
			body.classList.remove("lock");
		}
	}

	const onClickChangeCart = () => {
		const body = document.querySelector('body');
		console.log(cartActive)
		if (!cartActive) {
			setCartActive(true);
			body.classList.add("lock");
		}
		else {
			setCartActive(false);
			body.classList.remove("lock");
		}
	}

	return (
		<>
			<ul className='tools'>
				<li className='tools__item'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
				<li className='tools__item' onClick={onClickChangeCart}><FontAwesomeIcon icon={faCartShopping} /></li>
				<li className={!burgerClick ? 'tools__item burger' : 'tools__item burger burger--active'} onClick={onClickChangeBurger}>{!burgerClick ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}</li>
			</ul>
		</>
	)
};