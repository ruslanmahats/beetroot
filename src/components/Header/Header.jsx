import './Header.scss';

import { Menu } from "../Menu/Menu";
import { Logo } from "../Logo/Logo";

export const Header = () => <header className="header">
	<div className='wrapper'>
		<div className='header__container'>
			<div className="header__logo"><Logo></Logo></div>
			<div className="header__menu"><Menu></Menu></div>
		</div>
	</div>
</header>;