import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Button/Button';
import './HomeWeAre.scss';
import { faPlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const HomeWeAre = () => {

	const [videoModal, setVideoModal] = useState(false);

	const video = <iframe src="https://www.youtube.com/embed/a_0AgvcCQ20" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

	const videoModalHandle = () => {
		videoModal ? setVideoModal(false) : setVideoModal(true)
	}

	return (
		<>
			<section className={videoModal ? 'we-are we-are--active' : 'we-are'}>
				<div className="wrapper">
					<div className="we-are__container">
						<div className="we-are__video-container"><img src="./assets/images/design/video-image-bg.jpg" alt="Video Frutkha" className="we-are__video-image" /><div className="we-are__video-blur"></div><div className="we-are__video-play-btn" onClick={videoModalHandle} ><FontAwesomeIcon icon={faPlay} /></div></div>
						<div className="we-are__text-container">
							<div className="we-are__pre-title">Since Year 1975</div>
							<h3 className="we-are__title">We are <span>FruitShop</span></h3>
							<div className="we-are__text">
								<p>Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.</p>
							</div>
							<div className="we-are__button"><Button text="know more" url="/about" mod="solid" /></div>
						</div>
					</div>
				</div>
				<div className="we-are__modal">
					<div className='we-are__modal-video'>{video}<div className='we-are__modal-close-btn' onClick={videoModalHandle} ><FontAwesomeIcon icon={faXmark} /></div></div>
				</div>
			</section>
		</>
	)
};