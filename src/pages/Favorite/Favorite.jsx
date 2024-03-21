import './Favorite.scss';

import { Button } from '../../components/Button/Button';
import { FavoriteContext } from '../../context/FavoriteContextProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PagesHeader } from '../../components/PagesHeader/PagesHeader';
import ProductList from '../../components/ProductList/ProductList';
import ScrollToTop from '../../utils/ScrollToTop';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';

const Favorite = () => {
	const { favoriteProducts, clearFavoriteProducts } = useContext(FavoriteContext);
	return (
		<div className='favorite'>
			<ScrollToTop />
			<PagesHeader title='My Favorite Products' />
			<div className='wrapper'>
				{favoriteProducts.length > 0 ? (
					<>
						<div className='favorite-center'>
							<Button
								icon={<FontAwesomeIcon icon={faXmark} />}
								text='Clear Favorites'
								mod='orange'
								onClickHandler={() => clearFavoriteProducts()}
							/>
						</div>
						<ProductList products={favoriteProducts} />
					</>
				) : (
					<div className='favorite__warn'>No products in your favorites!</div>
				)}
			</div>
		</div>
	);
};

export default Favorite;
