import { Link } from 'react-router-dom';
import './FooterMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const FooterMenu = ({ menuItems }) => {
	return (
		<>
			<ul className="footer-menu">
				{menuItems.map(item => {
					return <li className="footer-menu__item" key={item.id}><Link to={item.url} className="footer-menu__link"><span><FontAwesomeIcon icon={faAngleRight} /></span>{item.name}</Link></li>
				})}
			</ul>
		</>
	)
};