import styles from './Header.module.css';
import buttonStyles from '../styles/Button.module.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const links = [
	{
		name: 'About',
		url: '/about'
	},
	{
		name: 'Credits',
		url: '/credits'
	}
];

const Header: React.FC<{}> = () => (
	<>
		<header className={styles.header}>
			<nav className={`${styles.desktopNav} container`}>
				<Link to="/" className={styles.logo}>
					<Logo />
				</Link>
				<ul className={styles.ul}>
					{links.map((link, index) => (
						<li key={index} className={styles.li}>
							<Link to={link.url} className={styles.link}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
				<div>
					<Link to="/projects" className={buttonStyles.button}>
						Our Projects
					</Link>
				</div>
			</nav>
		</header>
	</>
);

export default Header;
