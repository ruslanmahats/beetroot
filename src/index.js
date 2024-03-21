import App from './App';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

export const bodyElement = document.querySelector('body');
const rootEl = document.querySelector(':root');

rootEl.style.setProperty('--scrollbar-width', window.innerWidth - document.body.clientWidth + 'px');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<HashRouter>
		<App />
	</HashRouter>
	// </React.StrictMode>
);
