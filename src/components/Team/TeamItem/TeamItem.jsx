import './TeamItem.scss';

import { Socials } from '../../Socials/Socials';

export const TeamItem = ({ name, position, image }) => {
	return (
		<>
			<li className='team__item'>
				<div className='team__image-container'>
					<img className='team__image' src={`/beetroot/assets/images/team/${image}`} alt={name} />
					<div className='team__socials'>
						<Socials cut={true} />
					</div>
				</div>
				<div className='team__name'>{name}</div>
				<div className='team__position'>{position}</div>
			</li>
		</>
	);
};
