import PropTypes from 'prop-types';
import  styles from './CharactersList.module.scss';
import CharacterCard from '../characterCard/CharacterCard';
import defaultImg from '../../assets/images/default-object.jpg';
import Pagination from '../pagination/Pagination';

const CharactersList = ({ characters, isLoading }) => {
  // add loading message before fetch
  if (isLoading) {
    return <p className={styles.characterErrorMsg}>Loading...</p>;
  } else {
    //sort alphabetically before map
    const charactersLi = characters
      .sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
      .map((eachCharacter) => (
        <li className={styles.characterCard} key={eachCharacter.id}>
          <CharacterCard eachCharacter={eachCharacter} />
        </li>
      ));
    //add an error msg in case the filter returns 0
    const filterErrorMsg = () => {
      return (
        <div className={styles.characterError}>
          <p className={styles.characterErrorMsg}>Sorry, we weren&apos;t able to find what you&apos;re looking for :(</p>
          <p className={styles.characterErrorMsg}>Try again!</p>
        </div>
      );
    };
    return (
      <>
        <ul className={styles.characterList}>{characters.length === 0 ? filterErrorMsg() : charactersLi}</ul>
      </>
    );
  }
};

//defaultProps
CharactersList.defaultProps = {
  characters: [
    {
      episode: 0,
      id: 0,
      image: defaultImg,
      name: 'Character Name',
      origin: 'Planet of origin',
      species: 'Characters species',
      status: 'Dead',
    },
  ],
  isLoading: false,
};

//PropTypes
CharactersList.propTypes = {
  characters: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CharactersList;
