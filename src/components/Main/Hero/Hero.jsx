import { useEffect, useState } from 'react';
import './Hero.scss';
import { Request } from '../../../utils/Request';
import { Home, UnfoldMore } from '@mui/icons-material';

export const Hero = () => {

	const [{ image, title, text, urlSite, urlDemo }, setPost] = useState({});
	useEffect(() => {
		Request.get('./mock/hero.json').then(data => setPost(...data))
	}, []);

	return <div className="hero">
		<div className="hero__image-container"><img src={'./images/' + image} alt={title} className="hero__image" /></div>
		<div className="hero__text-container">
			<div className="hero__title">{title}</div>
			<div className="hero__text">{text}</div>
		</div>
		<ul className="hero__links-container">
			<li className="hero__links-item"><a className="hero__link" href={urlSite}><div className='hero__link-icon'><Home /></div><span className='hero__link-text'>React-Admin Site</span></a></li>
			<li className="hero__links-item"><a className="hero__link" href={urlDemo}><div className='hero__link-icon hero__link-icon--rotate'><UnfoldMore /></div><span className='hero__link-text'>Source for this demo</span></a></li>
		</ul>
	</div>
}