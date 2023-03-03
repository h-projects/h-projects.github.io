import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { model } from './model';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreProvider store={model}>
				<App />
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
