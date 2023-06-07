import { Button } from '../../Button/Button';
import './SwiperHeroSlide.scss';

export const SwiperHeroSlide = ({ title, preTitle, imgUrl, btnSolidText, btnRegularText, urlSolid, urlRegular }) => {
	return (
		<>
			<div className="slide-hero__container">
				<div className="slide-hero__image-conteainer"><img src={'./assets/images/slider-hero/' + imgUrl} alt="" className="slide-hero__image" /></div>
				<div className="slide-hero__blur"></div>
				<div className="slide-hero__text-container">
					<div className="slide-hero__pre-title" data-swiper-parallax="-200" data-swiper-parallax-duration="1000" data-swiper-parallax-opacity="0.2">{preTitle}</div>
					<div className="slide-hero__title" data-swiper-parallax="-400" data-swiper-parallax-duration="1200" data-swiper-parallax-opacity="0.2">{title}</div>
					<div className="slide-hero__buttons" data-swiper-parallax="-600" data-swiper-parallax-duration="1400" data-swiper-parallax-opacity="0.2">
						<Button text={btnSolidText} mod="solid" urlSolid={urlSolid} />
						<Button text={btnRegularText} mod='regular' urlRegular={urlRegular} />
					</div>
				</div>
			</div>
		</>
	)
};