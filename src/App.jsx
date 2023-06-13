import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop/Shop';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer/Footer';
import { Request } from './utils/Request';
import { Product } from './pages/Product';
import { BlogPost } from './pages/BlogPost';


function App() {
	const [scroll, setScroll] = useState(0);

	const [menuItems, setMenuItems] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		Request.get('./mock/menu.json').then(data => setMenuItems(data));
	}, []);

	useEffect(() => {
		Request.get('./mock/products.json').then(data => setProducts(data));
	}, []);

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
			<div className='mockup'>
				<div className='mockup__section'>
					<Header scroll={scroll} menuItems={menuItems} />
				</div>
				<div className='mockup__section--main'>
					<Routes>
						<Route path="/" element={<Home products={products} />} />
						<Route path="/shop" element={<Shop products={products} />} />
						<Route path="/shop/:id" element={<Product />} />
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
		</>
	)
};

export default App;