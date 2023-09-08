import type { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';
import buttonStyles from '#styles/button.module.css';

const NotFound: FunctionComponent = () => (
  <main className="container">
    <small className={styles.small}>404</small>
    <h1 className={styles.mainHeading}>We couldn&apos;t find that</h1>
    <p className={styles.mainParagraph}>Either the G spies ate that paqe on the way, or React exploded.</p>
    <Link href="/" className={buttonStyles.button}>
      Qo back home
    </Link>
  </main>
);

export default NotFound;
