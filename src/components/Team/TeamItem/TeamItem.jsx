import { Socials } from '../../Socials/Socials';
import './TeamItem.scss';

export const TeamItem = ({ name, position, image }) => {


	return (
		<>
			<li className="team__item">
				<div className="team__image-container"><img className='team__image' src={`./assets/images/team/${image}`} alt={name} />
					<div className='team__socials'><Socials cut={true} /></div>
				</div>
				<div className="team__name">{name}</div>
				<div className="team__position">{position}</div>
			</li>
		</>
	)
};