import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
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

const Header = () => {
  const { systemTheme, theme: _theme, setTheme } = useTheme();
  const theme = _theme === 'system' ? systemTheme : _theme;

  const [mounted, setMounted] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return null;
  }

  return (
    <header className={styles.header}>
      {/*
      state.shouldShowBanner && (
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
      )
      */}
      <nav className={`${styles.desktopNav} container`}>
        <Link href="/" className={`${styles.logo} ${transStyles.transitionable}`}>
          <Logo />
        </Link>
        <ul className={styles.ul}>
          {links.map((link, index) => (
            <li key={index} className={styles.li}>
              <Link href={link.url} className={`${styles.link} ${transStyles.transitionable}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.ul}>
          <li>
            <button
              onClick={() => {
                theme === 'dark' ? setTheme('light') : setTheme('dark');
              }}
              className={`${styles.link} ${transStyles.transitionable}`}
            >
              {theme === 'dark' ? <FaSun title="Light" size="1.5em" /> : <FaMoon title="Dark" size="1.4em" />}
            </button>
          </li>
          <li>
            <Link href="/projects" className={buttonStyles.button}>
              Our Projects
            </Link>
          </li>
        </ul>
      </nav>
      <nav className={`${styles.mobileNav} container`}>
        <Link href="/" className={`${styles.logo} ${transStyles.transitionable}`}>
          <Logo />
        </Link>

        <ul className={styles.mobileUlRow}>
          <li>
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
              className={`${styles.link} ${transStyles.transitionable}`}
            >
              {theme === 'dark' ? <FaSun title="Light" size="1.5em" /> : <FaMoon title="Dark" size="1.5em" />}
            </button>
          </li>
          <li>
            <button className={styles.mobileMenuButton} onClick={() => setOpenMenu(mobileIsOpen => !mobileIsOpen)}>
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
                <Link href={link.url} className={`${styles.link} ${transStyles.transitionable}`}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className={styles.mobileCta}>
              <Link href="/projects" className={buttonStyles.button}>
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
