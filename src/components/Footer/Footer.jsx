import { Contacts } from '../Contacts/Contacts';
import './Footer.scss';
import { FooterMenu } from './FooterMenu/FooterMenu';

export const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className='wrapper'>
					<div className="footer__container">
						<div className="footer__section">
							<div className="footer__title">About us</div>
							<div className="footer__content">
								<p>
									Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
								</p>
							</div>
						</div>
						<div className="footer__section">
							<div className="footer__title">Get in Touch</div>
							<div className="footer__content">
								<Contacts />
							</div>
						</div>
						<div className="footer__section">
							<div className="footer__title">Pages</div>
							<div className="footer__content">
								<FooterMenu />
							</div>
						</div>
						<div className="footer__section">
							<div className="footer__title">Subscribe</div>
							<div className="footer__content"></div>
						</div>
					</div>
					<div className="footer__copy-container">
						<div className="footer__copy"></div>
						<div className="footer__socials"></div>
					</div>
				</div>
			</footer>
		</>
	)
};