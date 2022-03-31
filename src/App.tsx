import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

const App: React.FC<{}> = () => {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const currentTheme = localStorage.getItem('theme');

	const [isDark, setDarkState] = useState<boolean>(currentTheme ? JSON.parse(currentTheme) : prefersDarkScheme);
	document.body.classList.add(isDark ? 'dark' : 'light');

	if (!currentTheme) {
		localStorage.setItem('theme', JSON.stringify(prefersDarkScheme));
	}

	function setDark() {
		localStorage.setItem('theme', JSON.stringify(!isDark));
		setDarkState((dark: boolean) => !dark);
		document.body.classList.toggle(isDark ? 'dark' : 'light');
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
