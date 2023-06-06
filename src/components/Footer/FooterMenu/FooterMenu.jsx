import { Link } from 'react-router-dom';
import './FooterMenu.scss';

export const FooterMenu = () => {

	function scrollUp() {
		window.scrollTo(0, 0);
	}

	return (
		<>
			<ul className="footer-menu">
				<li className="footer-menu__item"><Link to="/" className="footer-menu__link" onClick={scrollUp}>Home</Link></li>
			</ul>
		</>
	)
};