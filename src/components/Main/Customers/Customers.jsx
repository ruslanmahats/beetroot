import './Customers.scss';
import { CustomersItem } from './CustomersItem/CustomersItem';
import { useState, useEffect } from 'react';
import { Request } from '../../../utils/Request';

export const Customers = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		Request.get('./mock/customers.json').then(data => setReviews(data))
	}, []);

	return <ul className="customers">
		{reviews.map(item => <CustomersItem image={item.image} name={item.name} key={item.id}></CustomersItem>)}
	</ul>
};