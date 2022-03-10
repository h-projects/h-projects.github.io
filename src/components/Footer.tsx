import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const links = [
	{
		name: 'About',
		url: '/'
	}
];

const Footer: React.FC<{}> = () => (
	<footer className={styles.header}>
		<nav className={styles.nav}>
			<div className={styles.logo}>
				<Link to="/" className={styles.logo}>
					<Logo />
				</Link>
			</div>
			<ul className={styles.ul}>
				{links.map((link, index) => (
					<li key={index} className={styles.li}>
						<Link to={link.url} className={styles.link}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	</footer>
);

export default Footer;
