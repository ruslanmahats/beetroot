import { AttachMoney, Comment, PersonAdd, ShoppingCart } from '@mui/icons-material';
import './Label.scss';

export const Label = ({ name, value, colour, nobr }) => {

	const Icon = (colour) => {
		if (colour === 'blue') {
			return <AttachMoney />
		} else if (colour === 'orange') {
			return <ShoppingCart />
		} else if (colour === 'red') {
			return <Comment />
		} else if (colour === 'green') {
			return <PersonAdd />
		}
	}

	return <div className={'label' + ' ' + 'label--' + nobr}>
		<div className={'label__icon-container' + ' ' + 'label__icon-container--' + colour}>{Icon(colour)}</div>
		<div className={'label__text-container' + ' ' + colour}>
			<div className="label__name">{name}</div>
			<div className="label__value">{value}</div>
		</div>
	</div>
}