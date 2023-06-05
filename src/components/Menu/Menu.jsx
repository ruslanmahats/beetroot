import { About } from '../../pages/About';
import { Blog } from '../../pages/Blog';
import { Home } from '../../pages/Home';
import './Menu.scss';
import {
	Link
} from 'react-router-dom';


export const Menu = () => <ul className="menu">

	<li className="menu__item"><Link to={`/`} className="menu__link">Home</Link></li>
	<li className="menu__item"><Link to={`/blog`} className="menu__link">Blog</Link></li>
	<li className="menu__item"><Link to={`/about`} className="menu__link">About</Link></li>

</ul>;