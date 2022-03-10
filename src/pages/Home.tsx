import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC<{}> = () => (
	<>
		<main>
			<h1>Hi</h1>
			<Link to="/about">Yeah</Link>
		</main>
	</>
);

export default Home;
