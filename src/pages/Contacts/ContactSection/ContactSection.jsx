import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactForm } from '../../../components/ContactForm/ContactForm';
import './ContactSection.scss';
import { faContactBook, faMap } from '@fortawesome/free-solid-svg-icons';
import { faClockFour } from '@fortawesome/free-regular-svg-icons';

export const ContactSection = () => {
	return (
		<>
			<div className='contact-section'>

				<div className='contact-section__form-container'>
					<h2 className='contact-section__title'>Have you any question?</h2>
					<p className="contact-section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
					<div className='contact-section__form'><ContactForm /></div>
				</div>
				<ul className="contact-section__adress-container">

					<li className="contact-section__adress-item">
						<div className="contact-section__adress-icon"><FontAwesomeIcon icon={faMap} /></div>
						<div className="contact-section__adress-text">
							<h4 className="contact-section__adress-title">Shop Address</h4>
							<ul>
								<li>34/8, Fruits St.,</li>
								<li>New York, Brooklyn</li>
								<li>Nepal</li>
							</ul>
						</div>
					</li>

					<li className="contact-section__adress-item">
						<div className="contact-section__adress-icon"><FontAwesomeIcon icon={faContactBook} /></div>
						<div className="contact-section__adress-text">
							<h4 className="contact-section__adress-title">Shop Hours</h4>
							<ul>
								<li>MON - FRIDAY: 8 to 9 PM</li>
								<li>SAT - SUN: 10 to 8 PM</li>
							</ul>
						</div>
					</li>

					<li className="contact-section__adress-item">
						<div className="contact-section__adress-icon"><FontAwesomeIcon icon={faClockFour} /></div>
						<div className="contact-section__adress-text">
							<h4 className="contact-section__adress-title">Contact</h4>
							<ul>
								<li>Phone: <a href='tel:+451115553333'>+45 111 555 3333</a></li>
								<li>Email: <a href='mailto:support@fruitshop.com'>support@fruitshop.com</a></li>
							</ul>
						</div>
					</li>

				</ul>
			</div>
		</>
	)
};