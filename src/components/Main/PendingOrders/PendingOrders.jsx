import './PendingOrders.scss';
import { PendingOrdersItem } from './PendingOrdersItem/PendingOrdersItem';
import { useEffect, useState } from 'react';
import { Request } from '../../../utils/Request';

export const PendingOrders = () => {

	const [orders, setOrders] = useState([]);

	useEffect(() => {
		Request.get('./mock/pending-orders.json').then(data => setOrders(data))
	}, []);

	return <div className="pending-orders">
		<div className="pending-orders__title">Pending Orders</div>
		<ul className="pending-orders__items">
			{orders.map(item => < PendingOrdersItem id={item.id} name={item.name} date={item.date} time={item.time} image={item.image} url={item.url} quantity={item.quantity} summ={item.summ} key={item.id} />)}
		</ul>
	</div>
}