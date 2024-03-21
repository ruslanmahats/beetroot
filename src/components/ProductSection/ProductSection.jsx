import './ProductSection.scss';

import { faHeart as faHeartSolid, faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';

import { Button } from '../Button/Button';
import { CartContext } from '../../context/CartContextProvider';
import { FavoriteContext } from '../../context/FavoriteContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Socials } from '../Socials/Socials';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export const ProductSection = ({ product }) => {
	const { photoUrl, id, title, descShort, descFull, price, priceOld, catName } = product;

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
		<>
			<div className='product-section'>
				<div className='wrapper'>
					<div className='product-section__details'>
						<div className='product-section__image-container'>
							<img
								src={`/beetroot/assets/images/products/${photoUrl}`}
								alt={title}
								className='product-section__image'
							/>
						</div>
						<div className='product-section__info'>
							<p className='product-section__short-desc'>{descShort}</p>
							<div className='product-section__category'>
								<span>Category:</span> <span>{catName}</span>
							</div>
							<div className='product-section__product-id'>
								<span>Product id:</span> <span>{id}</span>
							</div>
							<div className='product-section__price-container'>
								<div className='product-section__price'>{price}$</div>
								<div className='product-section__price-old'>{priceOld}$</div>
								<div className='product-section__units'>per Kg</div>
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
							<div className='product-section__buttons'>
								<Button
									icon={<FontAwesomeIcon icon={faShoppingCart} />}
									text='Add to Cart'
									mod='solid'
									onClickHandler={() => cart.add(product, inputQuantity)}
								/>
								{favoriteProducts.find((item) => item.id === product.id) ? (
									<Button
										icon={<FontAwesomeIcon icon={faHeartSolid} />}
										text='Remove from Favorites'
										mod='orange'
										onClickHandler={() => toggleToFavoriteProduct(product)}
									/>
								) : (
									<Button
										icon={<FontAwesomeIcon icon={faHeart} />}
										text='Add to Favorites'
										mod='orange'
										onClickHandler={() => toggleToFavoriteProduct(product)}
									/>
								)}
							</div>
							<div className='product-section__socials'>
								<span>Share product:</span>
								<Socials />
							</div>
						</div>
					</div>
					<div className='product-section__description'>
						<h3 className='product-section__description-title'>Description</h3>
						<div className='product-section__description-text'>{descFull}</div>
					</div>
				</div>
			</div>
		</>
	);
};
