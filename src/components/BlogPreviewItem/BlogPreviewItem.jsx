import { Link } from 'react-router-dom';
import './BlogPreviewItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';
import { cutTextAfterNSymbols, cutTextAfterNSymbolsP } from '../../utils/Functions';

export const BlogPreviewItem = ({ id, userName, addDate, title, text, image, urlToImage, url }) => {



	return (
		<>


			<div className="blog-preview-item">
				<div className="blog-preview-item__image-container"><div className="blog-preview-item__blur">
				</div>{id ? <Link to={`/blog/${id}`} className="blog-preview-item__title-link"><img src={`./assets/images/blog/${image}`} alt={title} className="blog-preview-item__image" /></Link> : <a href={url} className="blog-preview-item__title-link" target='_blank' rel="noreferrer"><img src={urlToImage} alt={title} className="blog-preview-item__image" /></a>}
				</div>
				<div className="blog-preview-item__text-container">
					<div className="blog-preview-item__title">{id ? <Link to={`/blog/${id}`} className="blog-preview-item__title-link">{title}</Link> : <a href={url} className="blog-preview-item__title-link" target='_blank' rel="noreferrer">{title}</a>}</div>
					<div className="blog-preview-item__info-container">
						<div className="blog-preview-item__user">
							<span className="blog-preview-item__user-icon"><FontAwesomeIcon icon={faUser} /></span>
							<span className="blog-preview-item__user-name">{userName && userName.length > 20 ? cutTextAfterNSymbols(userName, 20) : userName}</span>
						</div>
						<div className="blog-preview-item__date">
							<span className="blog-preview-item__date-icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
							<span className="blog-preview-item__date-text">{addDate}</span>
						</div>
					</div>
					<div className="blog-preview-item__text">{text && text.length > 200 ? cutTextAfterNSymbolsP(text, 200) : text}</div>
					<div className="blog-preview-item__more">{id ? <Link to={`/blog/${id}`} className="blog-preview-item__more-link">read more <FontAwesomeIcon icon={faArrowRightLong} /></Link> : <a href={url} className="blog-preview-item__more-link" target='_blank' rel="noreferrer">read more <FontAwesomeIcon icon={faArrowRightLong} /></a>}</div>
				</div>
			</div>
		</>
	)
};