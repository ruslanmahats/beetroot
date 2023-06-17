
import { Contacts } from '../Contacts/Contacts';
import './Footer.scss';
import { FooterMenu } from './FooterMenu/FooterMenu';
import { Subscribe } from './Subscribe/Subscribe';
import { Socials } from '../Socials/Socials';

export const Footer = ({ menuItems }) => {
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
								<FooterMenu menuItems={menuItems} />
							</div>
						</div>
						<div className="footer__section">
							<div className="footer__title">Subscribe</div>
							<div className="footer__content">
								<p>Subscribe to our mailing list to get the latest updates.</p>
								<Subscribe />
							</div>
						</div>
					</div>
				</div>
				<div className="footer__copy-container">
					<div className='wrapper'>
						<div className='footer__inner'>
							<div className="footer__copy">
								<p>Copyrights © 2019 - <a href="https://imransdesign.com/">Fruitkha</a >, Design Imran Hossain. All Rights Reserved.</p>
							</div>
							<div className="footer__socials"><Socials /></div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
};