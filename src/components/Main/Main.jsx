import { Menu } from '../Menu/Menu';
import { Customers } from './Customers/Customers';
import { Hero } from './Hero/Hero';
import { Label } from './Label/Label';
import './Main.scss';
import { PendingOrders } from './PendingOrders/PendingOrders';
import { Reviews } from './Reviews/Reviews';

export const Main = () => {
	return <div className='main'>
		<div className='main__column'>
			<Menu></Menu>
		</div>
		<div className='main__column'>
			<div className="main__column-labels">
				<Label name={'Monthly Revenue'} value={'1385 $US'} colour={'blue'}></Label>
				<Label name={'New Orders'} value={'12'} colour={'orange'}></Label>
			</div>
			<Hero />
			<PendingOrders />
		</div>
		<div className='main__column'>
			<Label name={'Pending Reviews'} value={'3'} colour={'red'} nobr={'nobr'}></Label>
			<Reviews></Reviews>
		</div>
		<div className='main__column'>
			<Label name={'New Customers'} value={'9'} colour={'green'} nobr={'nobr'}></Label>
			<Customers></Customers>
		</div>
	</div>
};