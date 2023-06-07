import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Subscribe.scss';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Subscribe = () => {
	const [valueInput, setValueInput] = useState(true);


	const handleValue = (event) => {
		setValueInput(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value))
	}


	return (
		<>
			<form action="" className="subscribe">
				<input onChange={handleValue} type="email" name="email" className={valueInput ? 'subscribe__input' : 'subscribe__input subscribe__input--error'} placeholder='Email' pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required />
				<button type='submit' className='subscribe__btn' disabled={!valueInput}><FontAwesomeIcon icon={faPaperPlane} /></button>
			</form>
		</>
	)
};