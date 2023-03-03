import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { hooks } from './model';
import About from './pages/About';
import Clicker from './pages/Clicker';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: React.FC<{}> = () => {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

	const state = hooks.useStoreState(store => ({
		currentTheme: store.currentTheme
	}));

	const actions = hooks.useStoreActions(state => {
		return {
			setTheme: state.setTheme
		};
	});

	if (state.currentTheme === 'system') {
		actions.setTheme(prefersDarkScheme ? 'dark' : 'light');
	}

	document.body.classList.add(state.currentTheme);

	function setDark() {
		actions.setTheme(state.currentTheme === 'dark' ? 'light' : 'dark');
		document.body.classList.toggle(state.currentTheme);
	}

	function route(component: React.ReactNode, route: string) {
		return (
			<Route
				path={route}
				element={
					<>
						<Header />
						{component}
						<Footer />
					</>
				}
			/>
		);
	}

	return (
		<Routes>
			{route(<Home />, '/')}
			{route(<About />, '/about')}
			{route(<NotFound />, '*')}
			{/* <Route path="/clicker" element={<Clicker />} /> */}
		</Routes>
	);
};

export default App;
