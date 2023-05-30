import './Burger.scss';
import { Menu } from "@mui/icons-material";
import React, { useState, useEffect } from "react";



export const Burger = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuItems, setMenuItems] = useState([]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const fetchMenuItems = async () => {
			try {
				const response = await fetch("./mock/menu-burger.json");
				const data = await response.json();
				setMenuItems(data);
			} catch (error) {
				console.error("Error fetching menu items:", error);
			}
		};

		fetchMenuItems();
	}, []);


	return (<>
		<div className="burger">
			<Menu onClick={toggleMenu}></Menu>
		</div>
		{isMenuOpen && (
			<div className="burger-menu">
				<ul>
					{menuItems.map((item) => (
						<li className="burger-menu__item" key={item.id}><a href='#' className="burger-menu__item-link">{item.name}</a></li>
					))}
				</ul>
			</div>
		)}
	</>
	);
};