import './Advantages.scss';

import { faArrowsRotate, faPhoneVolume, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import { AdvantagesItem } from './AdvantagesItem/AdvantagesItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Advantages = () => {
	return (
		<>
			<section className='advatages'>
				<div className='wrapper'>
					<ul className='advatages__container'>
						<AdvantagesItem
							icon={<FontAwesomeIcon icon={faTruckFast} />}
							title='Free Shipping'
							desc='When order over $75'
						/>
						<AdvantagesItem
							icon={<FontAwesomeIcon icon={faPhoneVolume} />}
							title='24/7 Support'
							desc='Get support all day'
						/>
						<AdvantagesItem
							icon={<FontAwesomeIcon icon={faArrowsRotate} />}
							title='Get support all day'
							desc='Get refund within 3 days!'
						/>
					</ul>
				</div>
			</section>
		</>
	);
};
