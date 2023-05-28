import './App.scss';

import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Main } from './components/Main/Main';
import { Aside } from './components/Aside/Aside';
import { Footer } from './components/Footer/Footer';


function App() {
	return <>
		<Header></Header>
		<Hero></Hero>
		<div className='wrapper'>
			<div className='page-content'>
				<Main></Main>
				<Aside></Aside>
			</div>
		</div>
		<Footer></Footer>
	</>;
}

export default App;