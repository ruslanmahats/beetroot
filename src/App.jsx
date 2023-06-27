import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop/Shop';
import { Blog } from './pages/Blog/Blog';
import { About } from './pages/About/About';
import { Contacts } from './pages/Contacts/Contacts';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Request } from './utils/Request';
import { Product } from './pages/Product';
import { BlogPost } from './pages/BlogPost';
import { ProductsInCart } from './context/context';


function App() {
	const [cart, setCart] = useState([]);
	const [scroll, setScroll] = useState(0);
	const [menuItems, setMenuItems] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		Request.get('https://648d6dee2de8d0ea11e7d552.mockapi.io/menu').then(data => setMenuItems(data));
	}, []);

	useEffect(() => {
		Request.get('https://648d6dee2de8d0ea11e7d552.mockapi.io/products').then(data => setProducts(data));
	}, []);

	useEffect(() => {
		if (localStorage.getItem('cart') !== null) {
			const productsFromStoradge = JSON.parse(localStorage.getItem("cart"));
			setCart(productsFromStoradge);
		}
	}, [])


	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	// const handleUpButton = () => {
	// 	window.scrollTo(0, 0);
	// };

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<ProductsInCart.Provider value={{ cart, setCart }}>
				<div className='mockup'>
					<div className='mockup__section'>
						<Header scroll={scroll} menuItems={menuItems} />
					</div>
					<div className='mockup__section--main'>
						<Routes>
							<Route path="/" element={<Home products={products} />} />
							<Route path="/shop" element={<Shop products={products} />} />
							<Route path="/shop/:id" element={<Product products={products} />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/blog/:id" element={<BlogPost />} />
							<Route path="/about" element={<About />} />
							<Route path="/contacts" element={<Contacts />} />
						</Routes>
					</div>
					<div className='mockup__section'>
						<Footer menuItems={menuItems} />
					</div>
				</div>
			</ProductsInCart.Provider>
		</>
	)
};

export default App;