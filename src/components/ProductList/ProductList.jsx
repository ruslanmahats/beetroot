import './ProductList.scss';

import { CardProduct } from '../SectionCards/ProductCards/CardProduct/CardProduct';

const ProductList = ({ products }) => {
	return (
		<div className='product-list'>
			{products.map((item) => {
				return <CardProduct key={item.id} product={item} />;
			})}
		</div>
	);
};

export default ProductList;
