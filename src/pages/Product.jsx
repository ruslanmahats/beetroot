import { useEffect, useState } from 'react';

import { PagesHeader } from '../components/PagesHeader/PagesHeader';
import { ProductSection } from '../components/ProductSection/ProductSection';
import { Request } from '../utils/Request';
import ScrollToTop from '../utils/ScrollToTop';
import { useParams } from 'react-router-dom';

export const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		Request('/beetroot/mock/products.json').then((data) =>
			setProduct(
				data.find((item) => {
					return +item.id === +id;
				})
			)
		);
	}, [id]);

	return (
		<>
			<ScrollToTop />
			<PagesHeader title={product.title} preTitle='FRESH AND ORGANIC' />
			<ProductSection product={product} />
		</>
	);
};
