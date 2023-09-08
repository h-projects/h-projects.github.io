'use client';

import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import buttonStyles from '#styles/button.module.css';
import transStyles from '#styles/trans.module.css';
import styles from './Header.module.css';

import Logo from './Logo';
import { ThemeButton } from './ThemeButton';

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
  const { systemTheme, theme: _theme } = useTheme();
  const theme = _theme === 'system' ? systemTheme : _theme;

  const [openMenu, setOpenMenu] = useState(false);

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
            <ThemeButton className={`${styles.link} ${transStyles.transitionable}`} theme={theme} />
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
            <ThemeButton className={`${styles.link} ${transStyles.transitionable}`} theme={theme} />
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
