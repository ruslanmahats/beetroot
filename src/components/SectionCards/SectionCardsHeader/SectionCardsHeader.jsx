import './SectionCardsHeader.scss';

export const SectionCardsHeader = ({ titleCol1, titleCol2, text }) => {
	return (
		<>
			<div className='section-card-header'>
				{titleCol1 && titleCol2 ? (
					<h2 className='section-card-header__title'>
						<span>{titleCol1}</span>
						{' ' + titleCol2}
					</h2>
				) : null}
				{text ? <p className='section-card-header__text'>{text}</p> : null}
			</div>
		</>
	);
};
