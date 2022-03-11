import styles from './Footer.module.css';
import { MouseEventHandler } from 'react';

const links = [
	{
		name: 'Twitter',
		url: 'https://twitter.com/AytchSoftware'
	},
	{
		name: 'GitHub',
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
				<button onClick={set} className={styles.link}>
					Theme
				</button>
				{links.map((link, index) => (
					<li key={index} className={styles.li}>
						<a href={link.url} className={styles.link}>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	</footer>
);

export default Footer;
