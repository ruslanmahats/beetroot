import './SwiperHero.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';

import { Autoplay, Navigation, Pagination, Parallax } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import { Request } from '../../utils/Request';
import { SwiperHeroSlide } from './SwiperHeroSlide/SwiperHeroSlide';

export const SwiperHero = () => {
	const [sliderHeroItems, setSliderHeroItems] = useState([]);

	useEffect(() => {
		Request('/beetroot/mock/slider-hero.json').then((data) => setSliderHeroItems(data));
	}, []);

	return (
		<>
			<section className='slider-hero'>
				<Swiper
					modules={[Navigation, Pagination, Autoplay, Parallax]}
					navigation={{ clickable: true }}
					pagination={{ clickable: true, type: 'bullets' }}
					spaceBetween={0}
					slidesPerView={1}
					loop={true}
					autoplay={{ delay: 3800, disableOnInteraction: false }}
					parallax>
					{sliderHeroItems.map((item) => {
						return (
							<SwiperSlide key={item.id}>
								<SwiperHeroSlide {...item} key={item.id} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
		</>
	);
};
