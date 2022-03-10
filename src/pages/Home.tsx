import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC<{}> = () => (
	<>
		<div className={styles.hero}></div>
		<main>
			<h1>Hi</h1>
			<Link to="/about">Yeah</Link>
		</main>
	</>
);

export default Home;
