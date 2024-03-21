import './WhyWe.scss';

import { faArrowsRotate, faMoneyBill1, faToolbox, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import { AdvantagesItem } from '../Advantages/AdvantagesItem/AdvantagesItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WhyWe = () => {
	return (
		<>
			<section className='why-we'>
				<div className='why-we__container'>
					<h2 className='why-we__title'>
						Why <span>FruitShop</span>
					</h2>
					<ul className='why-we__advantages advantages'>
						<AdvantagesItem
							icon={<FontAwesomeIcon icon={faTruckFast} />}
							title='Home Delivery'
							desc='Sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'
						/>
						<AdvantagesItem
							icon={<FontAwesomeIcon icon={faMoneyBill1} />}
							title='Best Price'
							desc='Sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'
						/>
						<AdvantagesItem
							icon={<FontAwesomeIcon icon={faToolbox} />}
							title='Custom Box'
							desc='Sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'
						/>
						<AdvantagesItem
							icon={<FontAwesomeIcon icon={faArrowsRotate} />}
							title='Quick Refund'
							desc='Sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.'
						/>
					</ul>
				</div>
				<div className='why-we__bg'></div>
			</section>
		</>
	);
};
