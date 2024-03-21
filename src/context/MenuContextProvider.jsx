import { createContext, useState } from 'react';

import { bodyElement } from '..';

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const toggleMenuIsOpen = () => {
		setMenuIsOpen(!menuIsOpen);
		bodyElement.classList.toggle('menu-lock');
	};

	return <MenuContext.Provider value={{ menuIsOpen, toggleMenuIsOpen }}>{children}</MenuContext.Provider>;
};

export default MenuContextProvider;
