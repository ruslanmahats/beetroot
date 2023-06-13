import { Button } from '../Button/Button';
import './ShopBanner.scss';

export const ShopBanner = () => {
	return (
		<>
			<div className="shop-banner">
				<div className="wrapper">
					<div className='shop-banner__container'>
						<h3 className="shop-banner__title">December sale is on!<br />with big <span>Discount...</span></h3>
						<div className="shop-banner__after-title">
							<span>Sale!<br />Upto</span>
							<span>50%</span>
							<span>off</span>
						</div>
						<div className="shop-banner__button"><Button text="Shop Now" url="/shop" mod="solid" /></div>
					</div>
				</div>
			</div>
		</>
	)
};