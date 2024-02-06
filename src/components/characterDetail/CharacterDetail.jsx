import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CharacterDetail.module.scss';
import defaultImg from '../../assets/images/default-object.avif';

const CharacterDetail = ({ findCharacter }) => {
  if (findCharacter) {
    return (
      <>
        <section className={styles.characterDetail}>
          <article className={styles.characterDetailContainer}>
            <img
              className={styles.characterDetailImage}
              src={findCharacter.image}
              alt={`Foto de ${findCharacter.name}`}
              title={`Foto de ${findCharacter.name}`}
            />
            <div className={styles.characterDetailText}>
              <h3 className={styles.characterDetailName}>{findCharacter.name}</h3>
              <p className={styles.characterDetailSpecies}>Species: {findCharacter.species}</p>
              <p className={styles.characterDetailOrigin}>Origin: {findCharacter.origin}</p>
              <div>
                <span className={styles.characterDetailEpisode}>{`Number of episodes: ${findCharacter.episode}`}</span>
                <span className={styles.characterDetailStatus}>{`Status: ${findCharacter.status}`}</span>
              </div>
            </div>
          </article>
          <div className={styles.goBack}>
            <Link to='/' className={styles.goBackLink}>
              Back
            </Link>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <div className={styles.characterDetailError}>
        <p className={styles.characterDetailErrorMsg}>
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
};

// defaultProps
CharacterDetail.defaultProps = {
  eachCharacter: {
    episode: 0,
    id: 0,
    image: defaultImg,
    name: 'Character Name',
    origin: 'Planet of origin',
    species: 'Characters species',
    status: 'Dead',
  },
};

//PropTypes
CharacterDetail.propTypes = {
  findCharacter: PropTypes.object
}

export default CharacterDetail;
