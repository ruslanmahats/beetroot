import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Socials.scss';
import { faDribbble, faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Socials = ({ cut }) => {
	return (
		<>
			{!cut ? <ul className="socials">
				<li className="socials__item"><a href="https://www.facebook.com/" className="socials__item-link" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
				<li className="socials__item"><a href="https://twitter.com/" className="socials__item-link" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
				<li className="socials__item"><a href="https://www.instagram.com/" className="socials__item-link" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
				<li className="socials__item"><a href="https://www.linkedin.com/" className="socials__item-link" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
				<li className="socials__item"><a href="https://dribbble.com/" className="socials__item-link" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faDribbble} /></a></li>
			</ul> : <ul className="socials">
				<li className="socials__item"><a href="https://www.facebook.com/" className="socials__item-link" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
				<li className="socials__item"><a href="https://twitter.com/" className="socials__item-link" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
				<li className="socials__item"><a href="https://www.instagram.com/" className="socials__item-link" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
			</ul>}
		</>
	)
};