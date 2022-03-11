import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import { MouseEventHandler, useEffect, useState } from 'react';
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

const Header: React.FC<{ set: MouseEventHandler<HTMLButtonElement>; get: boolean }> = ({ set, get }) => {
	const shouldBeShown = JSON.parse(localStorage.getItem('banner') ?? '{"shown": true}');
	const shouldShow =
		(shouldBeShown.shown && shouldBeShown.message === headerText) ||
		(!shouldBeShown.shown && shouldBeShown.message !== headerText);

	const [showMessage, setShown] = useState(shouldShow);

	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
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
				<ul className={styles.ul}>
					<li>
						<button onClick={set} className={`${styles.link} ${transStyles.transitionable}`}>
							{get ? <FaSun title="Light" size="1.5em" /> : <FaMoon title="Dark" size="1.5em" />}
						</button>
					</li>
					<li>
						<Link to="/projects" className={buttonStyles.button}>
							Our Projects
						</Link>
					</li>
				</ul>
			</nav>
			<nav className={`${styles.mobileNav} container`}>
				<Link to="/" className={`${styles.logo} ${transStyles.transitionable}`}>
					<Logo />
				</Link>

				<ul className={styles.mobileUlRow}>
					<li>
						<button onClick={set} className={`${styles.link} ${transStyles.transitionable}`}>
							{get ? <FaSun title="Light" size="1.5em" /> : <FaMoon title="Dark" size="1.5em" />}
						</button>
					</li>
					<li>
						<button
							className={styles.mobileMenuButton}
							onClick={() => setOpenMenu(mobileIsOpen => !mobileIsOpen)}
						>
							<FaBars size="2em" />
						</button>
					</li>
				</ul>
			</nav>
			{openMenu && (
				<div className={styles.mobileMenu}>
					<ul className={styles.mobileUl}>
						{links.map((link, index) => (
							<li key={index} className={styles.li}>
								<Link to={link.url} className={`${styles.link} ${transStyles.transitionable}`}>
									{link.name}
								</Link>
							</li>
						))}
						<li className={styles.mobileCta}>
							<Link to="/projects" className={buttonStyles.button}>
								Our Projects
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
