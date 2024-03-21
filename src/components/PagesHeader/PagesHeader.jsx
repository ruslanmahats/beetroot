import './PagesHeader.scss';

export const PagesHeader = ({ id, title, preTitle }) => {
	return (
		<>
			<section className='pages-header'>
				<div className='wrapper'>
					<div className='pages-header__container'>
						<p className='pages-header__pre-title'>{preTitle}</p>
						<h1 className='pages-header__title'>{title}</h1>
					</div>
				</div>
			</section>
		</>
	);
};
