import './Navbar.scss';
import { Burger } from "./Burger/Burger";
import { Logo } from '../Logo/Logo';
import { Service } from './Service/Service';

export const Navbar = () => <div className="navbar">
	<Burger></Burger>
	<Logo></Logo>
	<Service></Service>
</div>;