import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import buttonStyles from '../styles/Button.module.css';

const NotFound: React.FC<{}> = () => (
	<main className="container">
		<small className={styles.small}>404</small>
		<h1 className={styles.mainHeading}>We didn't find that</h1>
		<p className={styles.mainParagraph}>Either the G spies ate that paqe on the way, or React shat itself.</p>
		<Link to="/" className={buttonStyles.button}>
			Qo back home
		</Link>
	</main>
);

export default NotFound;
