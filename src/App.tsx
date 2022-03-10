import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

const App: React.FC<{}> = () => {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
	const currentTheme = localStorage.getItem('theme');

	const [isDark, setDarkState] = useState(currentTheme ? JSON.parse(currentTheme) : prefersDarkScheme);

	useEffect(() => {
		if (!currentTheme) {
			localStorage.setItem('theme', JSON.stringify(prefersDarkScheme));
		}

		document.body.classList.add(isDark ? 'dark' : 'light');
	});

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</>
	);
};

export default App;
