import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
<div className={styles.error}>
        <p className={styles.errorMsg}>
          Sorry, the character you&apos;re looking for doesn&apos;t seem to exist in our database.
        </p>
        <div className={styles.goBack}>
          <Link to='/' className={styles.goBackLink}>
            Back
          </Link>
        </div>
      </div>
  );
}

export default NotFound;