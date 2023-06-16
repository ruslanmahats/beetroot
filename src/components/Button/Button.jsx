import { Link } from 'react-router-dom';
import './Button.scss';

export const Button = ({ icon, text, mod, url, addToCart }) => {

	const iconEl = () => {
		if (icon) {
			return <span className='button__icon'>{icon}</span>;
		}
	}

	const textEl = () => {
		if (text) {
			return <span className='button__text'>{text}</span>;
		}
	}

	return (
		<>
			{addToCart ? <Link to={url} className={'button button--' + mod} onClick={addToCart}>{iconEl()}{textEl()}</Link> : <Link to={url} className={'button button--' + mod}>{iconEl()}{textEl()}</Link>}
		</>
	)
};