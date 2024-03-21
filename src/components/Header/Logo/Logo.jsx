import './Logo.scss';

import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<>
			<div className='logo'>
				<Link to={'/'} className='logo__link'>
					<img src='/beetroot/assets/images/logo.png' alt='Fruit Shop' className='logo__image' />
				</Link>
			</div>
		</>
	);
};
