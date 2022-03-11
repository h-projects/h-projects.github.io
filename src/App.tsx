import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

const App: React.FC<{}> = () => {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const currentTheme = localStorage.getItem('theme');

	const [isDark, setDarkState] = useState(currentTheme ? JSON.parse(currentTheme) : prefersDarkScheme);

	useEffect(() => {
		if (!currentTheme) {
			localStorage.setItem('theme', JSON.stringify(prefersDarkScheme));
			setDarkState(JSON.parse(localStorage.getItem('theme') ?? JSON.stringify(prefersDarkScheme)));
		}

		document.body.classList.add(isDark ? 'dark' : 'light');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function setDark() {
		setDarkState((dark: boolean) => !dark);
		document.body.classList.remove(isDark ? 'light' : 'dark');
		document.body.classList.add(isDark ? 'dark' : 'light');
		localStorage.setItem('theme', JSON.stringify(isDark));
	}

	return (
		<>
			<Header get={isDark} set={setDark} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
