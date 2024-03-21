import { createContext, useEffect, useState } from 'react';

import { bodyElement } from '..';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const [cartProducts, setCartProducts] = useState([]);

	useEffect(() => {
		const cartStorage = localStorage.getItem('cart');

		if (cartStorage !== null) {
			setCartProducts(JSON.parse(cartStorage));
		}
	}, []);

	const toggleCartIsOpen = () => {
		setCartIsOpen(!cartIsOpen);
		bodyElement.classList.toggle('cart-lock');
	};

	const addProduct = (product, addQuantity, isEditCart = false) => {
		const newCartProducts = cartProducts.filter((obj) => obj.id !== product.id);
		let existingProduct = cartProducts.find((obj) => obj.id === product.id);

		if (isEditCart) {
			existingProduct.quantity = +addQuantity;
			existingProduct.amount =
				Math.round(parseFloat(+existingProduct.quantity * +existingProduct.price) * 100) / 100;
			newCartProducts.push(existingProduct);
		} else {
			if (existingProduct) {
				existingProduct.quantity += +addQuantity;
				existingProduct.amount =
					Math.round(parseFloat(+existingProduct.quantity * +existingProduct.price) * 100) / 100;
				newCartProducts.push(existingProduct);
			} else {
				const newProduct = {
					...product,
					quantity: +addQuantity,
					amount: Math.round(parseFloat(+product.price * +addQuantity) * 100) / 100,
				};
				newCartProducts.push(newProduct);
			}
		}

		setCartProducts(newCartProducts);
		localStorage.setItem('cart', JSON.stringify(newCartProducts));
	};

	const removeProduct = (product) => {
		const newCartProducts = cartProducts.filter((item) => item.id !== product.id);
		setCartProducts(newCartProducts);
		localStorage.setItem('cart', JSON.stringify(newCartProducts));
	};

	const clearCart = () => setCartProducts([]);

	const getAmount = () =>
		Math.round(parseFloat(cartProducts.reduce((amount, item) => amount + +item.amount, 0)) * 100) / 100;

	return (
		<CartContext.Provider
			value={{
				cartIsOpen,
				toggleCartIsOpen,
				cart: { products: cartProducts, add: addProduct, remove: removeProduct, clear: clearCart, getAmount },
			}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
