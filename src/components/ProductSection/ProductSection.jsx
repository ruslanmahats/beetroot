import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Button/Button';
import { Socials } from '../Socials/Socials';
import './ProductSection.scss';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const ProductSection = ({ photoUrl, id, title, descShort, descFull, price, priceOld, discount, labelDiscount, labelBestPrice, labelNew, catName }) => {
	return (
		<>
			<div className="product-section">
				<div className='wrapper'>
					<div className='product-section__details'>
						<div className="product-section__image-container"><img src={`http://localhost:3000/assets/images/products/${photoUrl}`} alt={title} className="product-section__image" /></div>
						<div className="product-section__info">
							<p className="product-section__short-desc">{descShort}</p>
							<div className="product-section__category"><span>Category:</span> <span>{catName}</span></div>
							<div className="product-section__product-id"><span>Product id:</span> <span>{id}</span></div>
							<div className="product-section__price-container">
								<div className="product-section__price">{price}$</div>
								<div className="product-section__price-old">{priceOld}$</div>
								<div className="product-section__units">per Kg</div>
							</div>
							<div className="product-section__buttons"><Button icon={<FontAwesomeIcon icon={faShoppingCart} />} text="Add to Cart" mod="solid" /><Button icon={<FontAwesomeIcon icon={faHeart} />} text="Add to Favourites" mod="orange" /></div>
							<div className="product-section__socials">
								<span>Share product:</span>
								<Socials /></div>
						</div>
					</div>
					<div className="product-section__description">
						<h3 className="product-section__description-title">Description</h3>
						<div className="product-section__description-text">{descFull}</div>
					</div>
				</div>
			</div>
		</>
	)
};