import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SwiperCommItem.scss';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export const SwiperCommItem = ({ id, userName, position, commText, avatarUrl }) => {
	return (
		<>
			<div className="slider-comment">
				<div className="slider-comment__avatar-container"><img src={`./assets/images/avatars/${avatarUrl}`} alt={`${userName} comment`} className="slider-comment__image" /></div>
				<div className="slider-comment__name">{userName}</div>
				<div className="slider-comment__position">{position}</div>
				<div className="slider-comment__text">{`"${commText}"`}</div>
				<div className="slider-comment__icon"><FontAwesomeIcon icon={faQuoteLeft} /></div>
			</div>
		</>
	)
};