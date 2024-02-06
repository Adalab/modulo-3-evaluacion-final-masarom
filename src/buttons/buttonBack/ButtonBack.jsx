import { Link } from 'react-router-dom';
import styles from './ButtonBack.module.scss';

const ButtonBack = () => {
  return (
<div className={styles.goBack}>
          <Link to='/' className={styles.goBackLink}>
            Back
          </Link>
        </div>
  );
}

export default ButtonBack;  