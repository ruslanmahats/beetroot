import './Button.scss';

import { Link } from 'react-router-dom';

export const Button = ({ icon, text, mod, url, onClickHandler }) => {
	const iconEl = () => {
		if (icon) {
			return <span className='button__icon'>{icon}</span>;
		}
	};

	const textEl = () => {
		if (text) {
			return <span className='button__text'>{text}</span>;
		}
	};

	if (!url) {
		return (
			<button className={'button button--' + mod} onClick={onClickHandler}>
				{iconEl()}
				{textEl()}
			</button>
		);
	} else {
		return (
			<Link to={url} className={'button button--' + mod}>
				{iconEl()}
				{textEl()}
			</Link>
		);
	}
};
