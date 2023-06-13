import { ContactForm } from '../../../components/ContactForm/ContactForm';
import './ContactSection.scss';

export const ContactSection = () => {
	return (
		<>
			<div className='contact-section'>
				<div className='contact-section__form-container'>
					<h2 className='contact-section__title'>Have you any question?</h2>
					<p className="contact-section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
					<ContactForm />
				</div>
				<div className="contact-section__adress-container">

				</div>
			</div>
		</>
	)
};