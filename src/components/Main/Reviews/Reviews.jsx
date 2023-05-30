import './Reviews.scss';
import { ReviewItem } from './ReviewItem/ReviewItem';
import { useState, useEffect } from 'react';
import { Request } from '../../../utils/Request';

export const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		Request.get('./mock/reviews.json').then(data => setReviews(data))
	}, []);

	return <ul className="reviews">
		{reviews.map(item => <ReviewItem image={item.image} comment={item.comment} key={item.id}></ReviewItem>)}
	</ul>
};