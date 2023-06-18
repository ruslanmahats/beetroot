import './BrandsItem.scss';

export const BrandsItem = ({ photoUrl }) => {
	return (
		<>
			<div className="slider-brands__slide">
				<div className="slider-brands__image-container"><img src={`/assets/images/brands/${photoUrl}`} alt="Brand" className="slider-brands__image" /></div>
			</div>
		</>
	)
};