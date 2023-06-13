import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import './Brands.scss';
import 'swiper/css/autoplay';
import 'swiper/scss';
import './Brands.scss';
import { BrandsItem } from './BrandsItem/BrandsItem';

export const Brands = () => {

	const brandItems = ["1.png", "2.png", "3.png", "4.png", "5.png", "1.png", "2.png", "3.png", "4.png", "5.png"];


	return (
		<>
			<section className="slider-brands">
				<div className='wrapper'>
					<Swiper
						modules={[Autoplay]}
						spaceBetween={20}
						slidesPerView={2}
						slidesPerGroup={1}
						loop={true}
						autoplay={{ delay: 3500, disableOnInteraction: false }}
						parallax
						breakpoints={{
							768: {
								slidesPerView: 5,
								slidesPerGroup: 1,
								spaceBetween: 50
							}
						}}
					>

						{brandItems.map((item, n) => {
							return <SwiperSlide key={n} ><BrandsItem photoUrl={item}></BrandsItem></SwiperSlide>
						})}

					</Swiper >
				</div>
			</section>
		</>
	)
};