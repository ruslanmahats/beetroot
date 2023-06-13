import './SectionCards.scss';
import { SectionCardsHeader } from './SectionCardsHeader/SectionCardsHeader';

export const SectionCards = ({ products, titleCol1, titleCol2, text, component }) => {
	return (
		<>
			<div className='wrapper'>
				<section className='section-cards'>
					<SectionCardsHeader titleCol1={titleCol1} titleCol2={titleCol2}
						text={text} />
					<div className="section-cards__body">
						{component}
					</div>
				</section>
			</div>
		</>
	)
};