import './Header.scss';
import { Logo } from './Logo/Logo';
import { Menu } from './Menu/Menu';
import { Tools } from './Tools/Tools';

export const Header = ({ scroll }) => {
	console.log(scroll);
	return (
		<>
			<header className={scroll === 0 ? "header" : "header header--fixed"}>
				<div className='wrapper'>
					<div className="header__inner">
						<div className="header__logo"><Logo /></div>
						<div className="header__menu"><Menu /></div>
						<div className="header__tools"><Tools /></div>
					</div>
				</div>
			</header >
		</>
	)
};
