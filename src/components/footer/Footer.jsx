import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerText}>
        <small className={styles.footerTextSmall}>&copy;Masarom 2023</small>
      </div>
    </footer>
  );
}

export default Footer;