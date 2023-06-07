import { Link } from 'react-router-dom';
import './Button.scss';

export const Button = ({ icon, text, mod, url }) => {

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
			<Link to={url} className={'button button--' + mod}>{iconEl()}{textEl()}</Link>
		</>
	)
};