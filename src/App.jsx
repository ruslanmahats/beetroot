import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import { Footer } from './components/Footer/Footer';


function App() {
	const [scroll, setScroll] = useState(0);

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
					<Header scroll={scroll} />
				</div>
				<div className='mockup__section--main'>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/shop" element={<Shop />}></Route>
						<Route path="/blog" element={<Blog />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/contacts" element={<Contacts />}></Route>
					</Routes>
				</div>
				<div className='mockup__section'>
					<Footer />
				</div>
			</div>
		</>
	)
};

export default App;