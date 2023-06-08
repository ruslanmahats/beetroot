import { useEffect, useState } from 'react';
import { CardProduct } from '../CardProduct/CardProduct';
import './SectionCards.scss';
import { SectionCardsHeader } from './SectionCardsHeader/SectionCardsHeader';

export const SectionCards = ({ products }) => {

	const [randomProducts, setRandomProducts] = useState([]);

	useEffect(() => {
		getRandomProducts()
	}, [products]);

	const getRandomProducts = () => {
		const copy = [...products];
		const randomProducts = [];

		while (randomProducts.length < 8 && copy.length > 0) {
			const randomIndex = Math.floor(Math.random() * copy.length);
			const randomProduct = copy.splice(randomIndex, 1)[0];
			randomProducts.push(randomProduct);
		}

		setRandomProducts(randomProducts);
	};




	return (
		<>
			<div className='wrapper'>
				<section className='section-cards'>
					<SectionCardsHeader titleCol1='Our' titleCol2='Products'
						text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.' />
					<div className="section-cards__body">
						{randomProducts.map(item => {
							return <CardProduct key={item.id} {...item} />
						})}
					</div>
				</section>
			</div>
		</>
	)
};