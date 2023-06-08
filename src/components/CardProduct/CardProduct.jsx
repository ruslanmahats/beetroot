import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Button/Button';
import './CardProduct.scss';
import { faCartShopping, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

export const CardProduct = ({ title, descShort, price, priceOld, discount, labelDiscount, labelBestPrice, labelNew }) => {
	const [inputQuantity, setInputQuantity] = useState(1);
	const [random, setRandom] = useState(0);


	function handleQuantity(event) {
		setInputQuantity(event.target.value)
	}

	function handleQuantityMinus() {
		if (inputQuantity > 1) { setInputQuantity(+inputQuantity - 1) };
	}

	function handleQuantityPlus() {
		setInputQuantity(+inputQuantity + 1);
	}


	useEffect(() => {
		setRandom(Math.floor(Math.random() * 20) + 1);
	}, [])



	return (
		<>
			<div className="card-product">{labelNew && <div className="card-product__label-new">New</div>}
				<div className="card-product__fav-button"><FontAwesomeIcon icon={faHeart} /></div>

				{labelDiscount ? (
					<div className="card-product__label-off"><span className='card-product__label-off-percent-n' >{discount}</span><span className='card-product__label-off-percent'><p>%</p><p>off</p></span></div>
				) : (
					labelBestPrice && <div className="card-product__label-off card-product__label-off--best"><span className='card-product__label-off-percent-n' >Best</span><span className='card-product__label-off-percent'>Price</span></div>
				)}

				<div className="card-product__image-container"><img src={`./assets/images/products/product-${random}.jpg`} alt="Strawberry" className="card-product__image" /></div>
				<div className="card-product__text-container">
					<div className="card-product__title">{title}</div>
					<div className="card-product__desc">{descShort}</div>
					<div className="card-product__buy-container">
						<div className='card-product__price-container'>
							<div className="card-product__price">{price + " $"}</div>
							<div className="card-product__old-price">{labelDiscount && priceOld + " $"}</div>
						</div>
						<div className="card-product__counter-container">
							<div className="card-product__counter-minus" onClick={handleQuantityMinus}><FontAwesomeIcon icon={faMinus} /></div>
							<input className="card-product__counter-number" value={inputQuantity} onChange={handleQuantity} type='number' />
							<div className="card-product__counter-plus" onClick={handleQuantityPlus}><FontAwesomeIcon icon={faPlus} /></div>
						</div>
					</div>
					<div className="card-product__button">
						<Button icon={<FontAwesomeIcon icon={faCartShopping} />} text="Add to Cart" mod="solid" />
					</div>
				</div>
			</div >
		</>
	)
};