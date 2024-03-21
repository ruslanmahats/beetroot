import './Contacts.scss';

import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contacts = () => {
	return (
		<>
			<ul className='contacts'>
				<li className='contacts__item'>
					<span>
						<span>
							<FontAwesomeIcon icon={faLocationDot} />
						</span>
						34/8, Fruits St., New York, Nepal
					</span>
				</li>
				<li className='contacts__item'>
					<a href='mailto:support@fruitshop.com' className='contacts__item-link'>
						<span>
							<FontAwesomeIcon icon={faEnvelope} />
						</span>
						support@fruitsshop.com
					</a>
				</li>
				<li className='contacts__item'>
					<a href='tel:+451115553333' className='contacts__item-link'>
						<span>
							<FontAwesomeIcon icon={faPhone} />
						</span>
						+45 111 555 3333
					</a>
				</li>
			</ul>
		</>
	);
};
