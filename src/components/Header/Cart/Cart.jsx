import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { CartActive, ProductsInCart } from '../../../context/context';
import { Request } from '../../../utils/Request';

export const Cart = () => {
	const { cartActive, setCartActive } = useContext(CartActive);
	const { cart, setCart } = useContext(ProductsInCart);
	const [productsToRender, setProductsToRender] = useState([]);



	useEffect(() => {
		console.log(cart);
		if (cart.length > 0) {
			const fetchData = async () => {
				const newProducts = [];
				for (const item of cart) {
					try {
						const response = await Request.get(`https://648d6dee2de8d0ea11e7d552.mockapi.io/products/${item.id}`);
						newProducts.push(response);
					} catch (error) {
						console.error(`Error fetching product with id ${item.id}:`, error);
					}
				}
				setProductsToRender(newProducts);
			};
			fetchData();
		}
		console.log(cart);
	}, [cart]);



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

							{productsToRender.map(item => {
								return item.title;
							})}

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