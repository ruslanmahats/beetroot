import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo = () => {
	return (
		<>
			<div className='logo'><Link to={"/"} className='logo__link'><img src="/assets/images/logo.png" alt="Fruitha" className="logo__image" /></Link></div>
		</>
	)
};