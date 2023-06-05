import logo from './logo.svg';
import './App.scss';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { UpButton } from './components/UpButton/UpButton';





function App() {
	return <>

		<Header></Header>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/about" element={<About />} />
		</Routes>
		<Footer></Footer>
		<UpButton />
	</>;
}

export default App;
