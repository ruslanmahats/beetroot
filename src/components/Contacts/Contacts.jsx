import './Contacts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contacts = () => {
	return (
		<>
			<ul className='contacts'>
				<li className="contacts__item"><span><FontAwesomeIcon icon={faLocationDot} /> 34/8, East Hukupara, Gifirtok, Sadan</span></li>
				<li className="contacts__item"><a href='mailto:support@fruitkha.com' className='contacts__item-link'><FontAwesomeIcon icon={faEnvelope} />support@fruitkha.com</a></li>
				<li className="contacts__item"><a href='tel:+001112223333' className='contacts__item-link'><FontAwesomeIcon icon={faPhone} />+00 111 222 3333</a></li>
			</ul>
		</>
	)
};