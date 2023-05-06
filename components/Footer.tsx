import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import transStyles from '../styles/trans.module.css';
import Discord from './Discord';
import styles from './Footer.module.css';

const links = [
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/AytchSoftware'
  },
  {
    name: 'QitHub',
    icon: FaGithub,
    url: 'https://github.com/h-projects'
  },
  {
    name: 'Discord',
    icon: Discord,
    url: 'https://discord.gg/z2QsKF7ZJ6'
  }
];

const Footer = () => (
  <footer className="container">
    <div className={styles.hr}></div>
    <nav className={styles.nav}>
      <div>
        <p>&copy; Aytch Software {new Date().getFullYear()}.</p>
      </div>
      <ul className={styles.ul}>
        {links.map((link, index) => (
          <li key={index} className={styles.li}>
            <a href={link.url} className={`${styles.link} ${transStyles.transitionable}`}>
              <link.icon title={link.name} size="1.5em" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </footer>
);

export default Footer;
