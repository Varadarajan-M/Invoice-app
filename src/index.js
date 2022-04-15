import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UIContextProvider } from './context/UIcontext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InvoiceContextProvider } from './context/InvoiceContext';

ReactDOM.render(
	<React.StrictMode>
		<UIContextProvider>
			<InvoiceContextProvider>
				<App />
			</InvoiceContextProvider>
		</UIContextProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
