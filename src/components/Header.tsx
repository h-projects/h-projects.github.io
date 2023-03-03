import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import { MouseEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import { banner, hooks } from '../model';
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

const Header: React.FC = () => {
	const state = hooks.useStoreState(store => ({
		showBanner: store.showBanner,
		currentBannerText: store.currentBannerText,
		shouldShowBanner: store.shouldShowBanner,
		currentTheme: store.currentTheme
	}));

	const actions = hooks.useStoreActions(state => {
		return {
			setBannerShown: state.setBannerShown,
			setUserBannerText: state.setUserBannerText,
			setCurrentBannerText: state.setCurrentBannerText,
			setTheme: state.setTheme
		};
	});

	if (state.currentBannerText !== banner) {
		// always make sure we have the latest current banner text
		actions.setCurrentBannerText(banner);
	}

	const [openMenu, setOpenMenu] = useState(false);

	function hideBanner() {
		actions.setUserBannerText(banner);
		actions.setBannerShown();
	}

	return (
		<header className={styles.header}>
			{state.shouldShowBanner && (
				<aside className={styles.banner}>
					<div className={`${styles.bannerText} container`}>
						<p>{banner}</p>
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
						<button
							onClick={() => {
								actions.setTheme(state.currentTheme === 'dark' ? 'light' : 'dark');
								document.body.classList.toggle(state.currentTheme);
							}}
							className={`${styles.link} ${transStyles.transitionable}`}
						>
							{state.currentTheme === 'dark' ? (
								<FaSun title="Light" size="1.5em" />
							) : (
								<FaMoon title="Dark" size="1.4em" />
							)}
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
						<button
							onClick={() => {
								actions.setTheme(state.currentTheme === 'dark' ? 'light' : 'dark');
								document.body.classList.toggle(state.currentTheme);
							}}
							className={`${styles.link} ${transStyles.transitionable}`}
						>
							{state.currentTheme === 'dark' ? (
								<FaSun title="Light" size="1.5em" />
							) : (
								<FaMoon title="Dark" size="1.5em" />
							)}
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
