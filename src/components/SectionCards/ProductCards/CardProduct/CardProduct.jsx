import './CardProduct.scss';

import { faCartShopping, faHeart as faHeartSolid, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';

import { Button } from '../../../Button/Button';
import { CartContext } from '../../../../context/CartContextProvider';
import { FavoriteContext } from '../../../../context/FavoriteContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export const CardProduct = ({ product }) => {
	const { id, title, descShort, price, priceOld, discount, labelDiscount, labelBestPrice, labelNew, photoUrl } =
		product;

	const { favoriteProducts, toggleToFavoriteProduct } = useContext(FavoriteContext);

	const { cart } = useContext(CartContext);
	const [inputQuantity, setInputQuantity] = useState(1);

	function handleQuantity(event) {
		setInputQuantity(event.target.value);
	}

	function handleQuantityMinus() {
		if (inputQuantity > 1) {
			setInputQuantity(+inputQuantity - 1);
		}
	}

	function handleQuantityPlus() {
		setInputQuantity(+inputQuantity + 1);
	}

	return (
		<div className='card-product'>
			{labelNew && <div className='card-product__label-new'>New</div>}
			<div className='card-product__fav-button' onClick={() => toggleToFavoriteProduct(product)}>
				{favoriteProducts.find((item) => item.id === product.id) ? (
					<FontAwesomeIcon icon={faHeartSolid} />
				) : (
					<FontAwesomeIcon icon={faHeart} />
				)}
			</div>

			{labelDiscount ? (
				<div className='card-product__label-off'>
					<span className='card-product__label-off-percent-n'>{discount}</span>
					<span className='card-product__label-off-percent'>
						<p>%</p>
						<p>off</p>
					</span>
				</div>
			) : (
				labelBestPrice && (
					<div className='card-product__label-off card-product__label-off--best'>
						<span className='card-product__label-off-percent-n'>Best</span>
						<span className='card-product__label-off-percent'>Price</span>
					</div>
				)
			)}

			<div className='card-product__image-container'>
				<Link to={`/shop/${id}`}>
					<img src={`/beetroot/assets/images/products/${photoUrl}`} alt={title} className='card-product__image' />
				</Link>
			</div>
			<div className='card-product__text-container'>
				<div className='card-product__title'>
					<Link to={`/shop/${id}`} className='card-product__title-link'>
						{title}
					</Link>
				</div>
				<div className='card-product__desc'>
					{descShort.length && descShort.length > 35 ? descShort.substr(0, 35) + '...' : descShort}
				</div>
				<div className='card-product__buy-container'>
					<div className='card-product__price-container'>
						<div className='card-product__price'>{price + ' $'}</div>
						<div className='card-product__old-price'>{labelDiscount && priceOld + ' $'}</div>
					</div>
					<div className='card-product__counter-container'>
						<div className='card-product__counter-minus' onClick={handleQuantityMinus}>
							<FontAwesomeIcon icon={faMinus} aria-label='Minus' />
						</div>
						<input
							className='card-product__counter-number'
							value={inputQuantity}
							onChange={handleQuantity}
							type='number'
						/>
						<div className='card-product__counter-plus' onClick={handleQuantityPlus}>
							<FontAwesomeIcon icon={faPlus} aria-label='Plus' />
						</div>
					</div>
				</div>
				<div className='card-product__button'>
					<Button
						icon={<FontAwesomeIcon icon={faCartShopping} />}
						text='Add to Cart'
						mod='solid'
						onClickHandler={() => cart.add(product, inputQuantity)}
					/>
				</div>
			</div>
		</div>
	);
};
