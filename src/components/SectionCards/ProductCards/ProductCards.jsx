import { useEffect, useState } from 'react';
import './ProductCards.scss';
import { CardProduct } from './CardProduct/CardProduct';
import { getNRandomItems } from '../../../utils/Functions';

export const ProductCards = ({ products }) => {

	const [randomProducts, setRandomProducts] = useState([]);

	useEffect(() => {
		getNRandomItems(8, products, setRandomProducts)
	}, [products]);


	return (
		<>
			<div className='product-cards'>
				{randomProducts.map(item => {
					return <CardProduct key={item.id} {...item} />
				})}
			</div>
		</>
	)
};