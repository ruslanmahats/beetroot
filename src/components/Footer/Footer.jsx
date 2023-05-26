import './Footer.scss';

export const Footer = () => <footer className="footer">
	<div className="footer__logo logo">
		<div className="logo__container">
			<div className="logo__image-container"><img src="" alt="" className="logo__image" /></div>
			<div className="logo__text-container">MYLOGOTEXT</div>
		</div>
	</div>
	<ul className="footer__menu footer-menu">
		<li className="footer-menu__item"><a href="#" className="footer-menu__link"></a></li>
	</ul>
	<div className="footer__contacts footer-contacts">
		<div className="footer-contacts__phone"></div>
		<div className="footer-contacts__email"></div>
		<div className="footer-contacts__address"></div>
	</div>
</footer>;