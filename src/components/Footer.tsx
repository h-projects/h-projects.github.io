import { MouseEventHandler } from 'react';
import transStyles from '../styles/Trans.module.css';
import styles from './Footer.module.css';

const links = [
	{
		name: 'Twitter',
		url: 'https://twitter.com/AytchSoftware'
	},
	{
		name: 'QitHub',
		url: 'https://github.com/h-projects'
	},
	{
		name: 'Discord',
		url: ''
	}
];

const Footer: React.FC<{ set: MouseEventHandler<HTMLButtonElement>; get: boolean }> = ({ set, get }) => (
	<footer>
		<div className={`${styles.hr} container`}></div>
		<nav className={`${styles.nav} container`}>
			<div>
				<p>&copy; Aytch Software 2022.</p>
			</div>
			<ul className={styles.ul}>
				<button onClick={set} className={`${styles.link} ${transStyles.transitionable}`}>
					Theme
				</button>
				{links.map((link, index) => (
					<li key={index} className={styles.li}>
						<a href={link.url} className={`${styles.link} ${transStyles.transitionable}`}>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	</footer>
);

export default Footer;
