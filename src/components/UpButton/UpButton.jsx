import { useState, useEffect } from "react";
import './UpButton.scss';


export const UpButton = () => {
	const [scroll, setScroll] = useState(0);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	const handleUpButton = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="up-button">
			<button
				className={scroll < 300 ? "" : "show"}
				onClick={handleUpButton}
			>
				Go Up
			</button>

		</div>
	);
};