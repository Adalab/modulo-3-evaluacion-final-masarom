import styles from './NotFound.module.scss';
import ButtonBack from '../../buttons/buttonBack/ButtonBack';

const NotFound = () => {
  return (
<div className={styles.error}>
        <p className={styles.errorMsg}>
          Sorry, the character you&apos;re looking for doesn&apos;t seem to exist in our database.
        </p>
        <ButtonBack />
      </div>
  );
}

export default NotFound;