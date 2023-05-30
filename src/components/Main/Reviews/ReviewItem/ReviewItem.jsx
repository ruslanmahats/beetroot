import { Stars } from '@mui/icons-material';
import './ReviewItem.scss';

export const ReviewItem = ({ id, image, comment }) => {
	return <li className="review-item">
		<div className='review-item__image-container'><img src={'./images/' + image} alt="User icon" className="review-item__image" /></div>
		<div className="review-item__info-container">
			<div className="review-item__icon"><Stars /></div>
			<p className="review-item__text">{comment.slice(0, 75) + '...'}</p>
		</div>
	</li>
};
