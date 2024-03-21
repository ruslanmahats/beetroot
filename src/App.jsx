import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { About } from './pages/About/About';
import { Blog } from './pages/Blog/Blog';
import { BlogPost } from './pages/BlogPost';
import { Contacts } from './pages/Contacts/Contacts';
import ContextProviders from './context/ContextProviders';
import Favorite from './pages/Favorite/Favorite';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { Request } from './utils/Request';
import { Shop } from './pages/Shop/Shop';

function App() {
	const [menuItems, setMenuItems] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		Request('https://648d6dee2de8d0ea11e7d552.mockapi.io/menu').then((data) => setMenuItems(data));
		Request('https://648d6dee2de8d0ea11e7d552.mockapi.io/products').then((data) => setProducts(data));
	}, []);

	console.log('App render!');

	return (
		<ContextProviders>
			<div className='mockup'>
				<div className='mockup__section'>
					<Header menuItems={menuItems} />
				</div>
				<div className='mockup__section--main'>
					<Routes>
						<Route path='/' element={<Home products={products} />} />
						<Route path='/shop' element={<Shop products={products} />} />
						<Route path='/shop/:id' element={<Product products={products} />} />
						<Route path='/blog' element={<Blog />} />
						<Route path='/blog/:id' element={<BlogPost />} />
						<Route path='/about' element={<About />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/favorite' element={<Favorite />} />
					</Routes>
				</div>
				<div className='mockup__section'>
					<Footer menuItems={menuItems} />
				</div>
			</div>
		</ContextProviders>
	);
}

export default App;
