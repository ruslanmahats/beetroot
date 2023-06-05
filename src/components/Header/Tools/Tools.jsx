import './Tools.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

export const Tools = () => {
	return (
		<>
			<ul className='tools'>
				<li className='tools__item'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
				<li className='tools__item'><FontAwesomeIcon icon={faCartShopping} /></li>
				<li className='tools__item burger'><FontAwesomeIcon icon={faBars} /></li>
			</ul>
		</>
	)
};