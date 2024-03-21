import { createContext, useEffect, useState } from 'react';

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
	const [favoriteProducts, setFavoriteProducts] = useState([]);

	useEffect(() => {
		const favoriteStorage = localStorage.getItem('favorite');

		if (favoriteStorage !== null) {
			setFavoriteProducts(JSON.parse(favoriteStorage));
		}
	}, []);

	const toggleToFavoriteProduct = (product) => {
		let newFavoriteProducts = [...favoriteProducts];
		const existingProduct = favoriteProducts.find((item) => item.id === product.id);

		if (existingProduct) {
			newFavoriteProducts = newFavoriteProducts.filter((item) => item.id !== product.id);
		} else {
			newFavoriteProducts.push(product);
		}

		setFavoriteProducts(newFavoriteProducts);
		localStorage.setItem('favorite', JSON.stringify(newFavoriteProducts));
	};

	const clearFavoriteProducts = () => setFavoriteProducts([]);

	return (
		<FavoriteContext.Provider value={{ favoriteProducts, toggleToFavoriteProduct, clearFavoriteProducts }}>
			{children}
		</FavoriteContext.Provider>
	);
};

export default FavoriteContextProvider;
