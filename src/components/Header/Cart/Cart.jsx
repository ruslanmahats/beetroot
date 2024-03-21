import './Cart.scss';

import { memo, useContext } from 'react';

import { CartContext } from '../../../context/CartContextProvider';
import CartProduct from './CartProduct/CartProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export const Cart = memo(() => {
	const { cartIsOpen, toggleCartIsOpen, cart } = useContext(CartContext);

	return (
		<div className={!cartIsOpen ? 'cart' : 'cart cart--active'}>
			<div className='cart__container'>
				<div className='cart__inner'>
					<div className='cart__header'>
						<button className='cart__btn-close' onClick={toggleCartIsOpen}>
							<FontAwesomeIcon icon={faXmark} />
						</button>
						<div className='cart__title'>Order</div>
					</div>
					<div className='cart__orders'>
						{cart.products.length > 0
							? cart.products
									.sort((a, b) => +a.id - +b.id)
									.map((product) => {
										return <CartProduct key={product.id} product={product} cart={cart} />;
									})
							: 'Your cart is empty!'}
					</div>
					<div className='cart__checkout'>
						<div className='cart__order-summary'>Order Summary</div>
						<div className='cart__total-amount'>
							<div className='cart__total-amount-text'>Total Amount</div>
							<div className='cart__total-amount-sum'>{cart.getAmount()} $</div>
						</div>
						<div className='cart__checkout-button'>
							<button className='cart__btn-checkout' onClick={toggleCartIsOpen}>
								Checkout Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});
