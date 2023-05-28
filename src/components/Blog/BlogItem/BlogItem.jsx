import { Button, Card } from 'react-bootstrap';
import './BlogItem.scss';

export const BlogItem = ({ title, body }) => <Card className='mb-5'>
	<Card.Body>
		<Card.Title>{title}</Card.Title>
		<Card.Text>
			{body}
		</Card.Text>
		<Button variant="primary">Go somewhere</Button>
	</Card.Body>
</Card>;