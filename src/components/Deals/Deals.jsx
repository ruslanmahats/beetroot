import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Button/Button';
import './Deals.scss';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Countdown from 'react-countdown';

export const Deals = () => {

	const Completionist = () => <div className='counter counter__completed'>Completed!</div>;


	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			return <Completionist />;
		} else {
			return (
				<div className='counter'>
					<div className='counter__item'>
						<div className='counter__number'>{days < 10 ? '0' + days : days}</div>
						<div className="counter__text">Days</div>
					</div>
					<div className='counter__item'>
						<div className='counter__number'>{hours < 10 ? '0' + hours : hours}</div>
						<div className="counter__text">Hours</div>
					</div>
					<div className='counter__item'>
						<div className='counter__number'>{minutes < 10 ? '0' + minutes : minutes}</div>
						<div className="counter__text">Mins</div>
					</div>
					<div className='counter__item'>
						<div className='counter__number'>{seconds < 10 ? '0' + seconds : seconds}</div>
						<div className="counter__text">Secs</div>
					</div>
				</div>
			);
		}
	};

	return (
		<>
			<section className='deals'>
				<div className='wrapper'>
					<div className="deals__container">
						<div className='deals__off-outer'>
							<div className='deals__off'>
								<div className="deals__off-under"></div>
								<div className='deals__off-inner'>
									<span className="deals__off-perc">30%</span>
									<span className="deals__off-text">off per kg</span>
								</div>
							</div>
						</div>
						<div className="deals__image-container">
							<img src="./assets/images/design/splash.jpg" alt="" className="deals__image" />
						</div>
						<div className="deals__content-container">
							<h3 className="deals__title"><span>Deal</span> of the month</h3>
							<h4 className="deals__title-after">HIKAN STRWABERRY</h4>
							<p className="deals__text">Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</p>
							<Countdown
								date={Date.now() + (1687530355000 - Date.now())}
								renderer={renderer}
							/>
							<div className='deals__btn'><Button icon={<FontAwesomeIcon icon={faShoppingCart} />} text="Add to Cart" mod='solid' /></div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
};