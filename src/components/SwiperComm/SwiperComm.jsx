import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperComm.scss';
import 'swiper/css/autoplay';
import 'swiper/scss';
import { useEffect, useState } from 'react';
import { Request } from '../../utils/Request';
import { SwiperCommItem } from './SwiperCommItem/SwiperCommItem';

export const SwiperComm = () => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		Request.get('/mock/comments.json').then(data => setComments(data));
	}, []);



	return (
		<>
			<section className="swiper-comm">
				<div className='wrapper'>
					<Swiper
						modules={[Autoplay]}
						spaceBetween={50}
						slidesPerView={1}
						slidesPerGroup={1}
						loop={true}
						autoplay={{ delay: 8000, disableOnInteraction: false }}
						parallax
						breakpoints={{
							768: {
								slidesPerView: 2,
								slidesPerGroup: 2
							}
						}}
					>
						{comments.map(item => {
							return <SwiperSlide key={item.id}><SwiperCommItem {...item} /></SwiperSlide>
						})}
					</Swiper >
				</div>
			</section>
		</>
	)
};