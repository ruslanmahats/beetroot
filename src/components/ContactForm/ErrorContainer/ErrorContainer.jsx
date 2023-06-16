import './ErrorContainer.scss';

export const ErrorContainer = ({ msg }) => {
	return (
		<>
			<p className='error-container'>{msg}</p>
		</>
	)
};