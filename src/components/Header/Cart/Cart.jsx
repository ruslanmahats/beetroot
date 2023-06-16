import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import { CartActive, ProductsInCart } from '../../../context/context';

export const Cart = () => {
	const { cartActive, setCartActive } = useContext(CartActive);
	const { cart, setCart } = useContext(ProductsInCart);


	const onClickButton = () => {
		setCartActive(false);
		document.querySelector('body').classList.remove("lock");
	}



	return (
		<>
			<div className={!cartActive ? 'cart' : 'cart cart--active'}>
				<div className="cart__container">
					<div className='cart__inner'>
						<div className="cart__header">
							<button className="cart__btn-close" onClick={onClickButton}><FontAwesomeIcon icon={faXmark} /></button>
							<div className="cart__title">Order</div>
						</div>
						<div className="cart__orders">

							{ }

						</div>
						<div className="cart__checkout">
							<div className="cart__order-summary">Order Summary</div>
							<div className="cart__total-amount">
								<div className='cart__total-amount-text'>Total Amount</div>
								<div className='cart__total-amount-summ'>1037 $</div>
							</div>
							<div className='cart__checkout-button'><button className="cart__btn-checkout" onClick={onClickButton}>Checkout Now</button></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
};