import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import buttonStyles from '../styles/Button.module.css';
import transStyles from '../styles/Trans.module.css';
import styles from './Header.module.css';
import Logo from './Logo';

const links = [
	{
		name: 'Home',
		url: '/'
	},
	{
		name: 'About',
		url: '/about'
	},
	{
		name: 'Credits',
		url: '/credits'
	}
];

const headerText = 'Aytch Software stands in support of arrow function components.';

const Header: React.FC<{}> = () => {
	const shouldBeShown = JSON.parse(localStorage.getItem('banner') ?? '{"shown": true}');
	const shouldShow = !shouldBeShown.shown && shouldBeShown.message !== headerText;
	const [showMessage, setShown] = useState(shouldShow);

	useEffect(() => {
		console.log(showMessage);

		if (!localStorage.getItem('banner')) {
			localStorage.setItem(
				'banner',
				JSON.stringify({
					shown: true,
					message: headerText
				})
			);
		}
	});

	function hideBanner() {
		setShown(false);
		localStorage.setItem(
			'banner',
			JSON.stringify({
				shown: false,
				message: headerText
			})
		);
	}

	return (
		<header className={styles.header}>
			{showMessage && (
				<aside className={styles.banner}>
					<div className={`${styles.bannerText} container`}>
						<p>{headerText}</p>{' '}
						<button
							className={`${buttonStyles.button} ${styles.bannerButton} ${transStyles.transitionable}`}
							onClick={hideBanner}
						>
							Close
						</button>
					</div>
				</aside>
			)}
			<nav className={`${styles.desktopNav} container`}>
				<Link to="/" className={`${styles.logo} ${transStyles.transitionable}`}>
					<Logo />
				</Link>
				<ul className={styles.ul}>
					{links.map((link, index) => (
						<li key={index} className={styles.li}>
							<Link to={link.url} className={`${styles.link} ${transStyles.transitionable}`}>
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
	);
};

export default Header;
