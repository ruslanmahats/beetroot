import './Team.scss';

import { TeamItem } from './TeamItem/TeamItem';

export const Team = () => {
	const team = [
		{
			name: 'Jimmy Doe',
			position: 'Farmer',
			image: 'team-1.jpg',
		},
		{
			name: 'Marry Doe',
			position: 'Farmer',
			image: 'team-2.jpg',
		},
		{
			name: 'Simon Joe',
			position: 'Farmer',
			image: 'team-3.jpg',
		},
	];

	return (
		<>
			<section className='team'>
				<div className='wrapper'>
					<ul className='team__inner'>
						{team.map((item, n) => {
							return <TeamItem key={n} {...item} />;
						})}
					</ul>
				</div>
			</section>
		</>
	);
};
