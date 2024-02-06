import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.scss';
import defaultImg from '../../assets/images/default-object.avif';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <>
      <Link to={'character/' + eachCharacter.id} className={styles.characterCardLink}>
        <img
          className={styles.characterCardImage}
          src={eachCharacter.image}
          alt={`Foto de ${eachCharacter.name}`}
          title={`Foto de ${eachCharacter.name}`}
        />
        <h3 className={styles.characterCardName}>{eachCharacter.name}</h3>
        <div >
          <span className={styles.characterCardSpecies}>{eachCharacter.species}</span>
          <span className={styles.characterCardStatus}>
            <i className={eachCharacter.status === 'Dead' ? 'fa-solid fa-skull-crossbones' : null}></i>
          </span>
        </div>
      </Link>
    </>
  );
};

// defaultProps
CharacterCard.defaultProps = {
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
CharacterCard.propTypes = {
  eachCharacter: PropTypes.object
};

export default CharacterCard;
