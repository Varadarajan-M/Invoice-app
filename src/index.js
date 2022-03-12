import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UIContextProvider } from './context/UIcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		<UIContextProvider>
			<App />
		</UIContextProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
