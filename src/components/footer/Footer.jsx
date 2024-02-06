import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <a className={styles.footerTextLink} href="https://github.com/masarom/rick-morty-database-react" target='_blank' rel="noreferrer">Repo</a>
        <small className={styles.footerTextSmall}>&copy;Masarom 2023</small>
      </div>
    </footer>
  );
}

export default Footer;