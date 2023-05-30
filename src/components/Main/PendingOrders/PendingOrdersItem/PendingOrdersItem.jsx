import './PendingOrdersItem.scss';

export const PendingOrdersItem = ({ id, name, date, time, image, url, quantity, summ }) => {
	return <li className="pending-order-item" href={url}>
		<div className="pending-order-item__user-image-container"><img src={'./images/' + image} alt={name} className="pending-order-item__user-image" /></div>
		<div className="pending-order-item__order-info">
			<div className="pending-order-item__time">{date + ', ' + time}</div>
			<div className="pending-order-item__user">{'by ' + name + ', ' + quantity + ' items'}</div>
		</div>
		<div className="pending-order-item__summ">{summ}$</div>
	</li>
}