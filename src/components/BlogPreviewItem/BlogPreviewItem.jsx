import { Link } from 'react-router-dom';
import './BlogPreviewItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import { cutTextAfterNSymbols } from '../../utils/Functions';

export const BlogPreviewItem = ({ id, userName, addDate, title, text, image }) => {



	return (
		<>
			<div className="blog-preview-item">
				<div className="blog-preview-item__image-container"><div className="blog-preview-item__blur"></div><Link to={`/blog/${id}`} className="blog-preview-item__title-link"><img src={`./assets/images/blog/${image}`} alt={title} className="blog-preview-item__image" /></Link></div>
				<div className="blog-preview-item__text-container">
					<div className="blog-preview-item__title"><Link to={`/blog/${id}`} className="blog-preview-item__title-link">{title}</Link></div>
					<div className="blog-preview-item__info-container">
						<div className="blog-preview-item__user">
							<span className="blog-preview-item__user-icon"><FontAwesomeIcon icon={faUser} /></span>
							<span className="blog-preview-item__user-name">{userName}</span>
						</div>
						<div className="blog-preview-item__date">
							<span className="blog-preview-item__date-icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
							<span className="blog-preview-item__date-text">{addDate}</span>
						</div>
					</div>
					<div className="blog-preview-item__text">{cutTextAfterNSymbols(text, 200)}</div>
					<div className="blog-preview-item__more"><Link to={`/blog/${id}`} className="blog-preview-item__more-link">read more <FontAwesomeIcon icon={faArrowRightLong} /></Link></div>
				</div>
			</div>
		</>
	)
};