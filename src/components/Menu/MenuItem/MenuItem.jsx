import { ArrowForward, AttachMoney, Collections, Comment, Dashboard, Group } from '@mui/icons-material';
import './MenuItem.scss';

export const MenuItem = ({ id, name, icon }) => {
	const iconEl = (icon) => {
		if (icon === "Dashboard") {
			return <Dashboard></Dashboard>;
		} else if (icon === "AttachMoney") {
			return <AttachMoney></AttachMoney>;
		} else if (icon === "Collections") {
			return <Collections></Collections>;
		} else if (icon === "Group") {
			return <Group></Group>;
		} else if (icon === "Comment") {
			return <Comment></Comment>;
		} else {
			return <ArrowForward></ArrowForward>;
		}
	};

	return <li className="menu__item"><a href="#" className="menu__item-link">
		<span className='menu__item-icon-container'>{iconEl(icon)}</span>
		<span className='menu__item-text'>{name}</span></a></li>
};