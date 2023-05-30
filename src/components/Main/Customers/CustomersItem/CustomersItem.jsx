import './CustomersItem.scss';

export const CustomersItem = ({ id, image, name }) => {
	return <li className="customer-item">
		<div className='customer-item__image-container'><img src={'./images/' + image} alt="User icon" className="customer-item__image" /></div>
		<p className="customer-item__text">{name}</p>
	</li>
};