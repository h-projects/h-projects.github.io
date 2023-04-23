import Link from 'next/link';
import buttonStyles from '../styles/Button.module.css';
import styles from './index.module.css';

const Home = () => (
  <>
    <main className="container">
      <div className={styles.hero}>
        <h1 className={styles.heroHeading}>Software made for H posters.</h1>
        <p className={styles.heroContent}>We create apps specifically tailored to those who like the letter H.</p>
        <div className={styles.ctas}>
          <Link href="/projects" className={buttonStyles.button}>
            See our creations
          </Link>
          <Link href="/about" className={styles.whoWeAre}>
            Who we are
          </Link>
        </div>
      </div>

      <section>
        <h2 className={styles.projectsSectionHeader}>Our popular projects</h2>
      </section>
    </main>
  </>
);

export default Home;
