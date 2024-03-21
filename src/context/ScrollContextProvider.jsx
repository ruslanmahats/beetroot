import { createContext, useEffect, useState } from 'react';

export const ScrollContext = createContext();

const ScrollContextProvider = ({ children }) => {
	const [scroll, setScroll] = useState(0);

	const handleScroll = () => {
		const scrollY = window.scrollY;
		if (scrollY === 0) {
			setScroll(0);
		} else {
			setScroll(1);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return <ScrollContext.Provider value={scroll}>{children}</ScrollContext.Provider>;
};

export default ScrollContextProvider;
