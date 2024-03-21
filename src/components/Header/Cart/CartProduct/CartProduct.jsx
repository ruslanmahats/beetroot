import './CartProduct.scss';

import { faEquals, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const CartProduct = ({ product, cart }) => {
	const { id, title, price, photoUrl, amount, quantity } = product;

	const minusButtonHandle = () => {
		if (quantity > 1) {
			cart.add(product, quantity - 1, true);
		} else {
			cart.remove(product);
		}
	};

	return (
		<div className='cart-product'>
			<button className='cart-product__btn-remove' onClick={() => cart.remove(product)}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
			<div className='cart-product__image-container'>
				<Link to={`/shop/${id}`}>
					<img src={`/beetroot/assets/images/products/${photoUrl}`} alt={title} className='cart-product__image' />
				</Link>
			</div>
			<div className='cart-product__details'>
				<div className='cart-product__title'>
					<Link to={`/shop/${id}`} className='cart-product__title-link'>
						{title}
					</Link>
				</div>
				<div className='cart-product__input-container'>
					<div className='cart-product__price'>
						{price} <FontAwesomeIcon icon={faXmark} />
					</div>
					<div className='card-product__counter-container'>
						<div className='card-product__counter-minus' onClick={minusButtonHandle}>
							<FontAwesomeIcon icon={faMinus} aria-label='Minus' />
						</div>
						<input
							className='card-product__counter-number'
							value={quantity}
							onChange={(e) => cart.add(product, e.target.value, true)}
							type='number'
						/>
						<div className='card-product__counter-plus' onClick={() => cart.add(product, quantity + 1, true)}>
							<FontAwesomeIcon icon={faPlus} aria-label='Plus' />
						</div>
					</div>
					<div className='cart-product__amount'>
						<FontAwesomeIcon icon={faEquals} /> {amount}$
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartProduct;
