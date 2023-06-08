import './AdvantagesItem.scss';

export const AdvantagesItem = ({ icon, title, desc }) => {
	return (
		<>
			<li className="advatages__item">
				<div className="advatages__icon-container">{icon}</div>
				<div className="advatages__text-container">
					<h3 className="advatages__title">{title}</h3>
					<p className="advatages__description">{desc}</p>
				</div>
			</li>
		</>
	)
};