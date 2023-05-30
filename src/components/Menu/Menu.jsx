import { useEffect, useState } from 'react';
import { MenuItem } from './MenuItem/MenuItem';
import { Request } from '../../utils/Request';
import './Menu.scss';

export const Menu = () => {
	const [menuItems, setMenuItems] = useState([]);

	useEffect(() => {
		Request.get('./mock/menu.json').then(data => setMenuItems(data));
	}, []);



	return <ul className="menu">
		{menuItems.map(item => {
			return <MenuItem id={item.id} name={item.name} icon={item.icon} key={item.id}></MenuItem>
		})}
	</ul >
};