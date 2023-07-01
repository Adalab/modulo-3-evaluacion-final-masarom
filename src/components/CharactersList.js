import '../styles/layout/SectionCharacters.scss';
import CharacterCard from './CharacterCard';

const CharactersList = ({ characters }) => {
  const charactersLi = characters.map((eachCharacter) => (
    <li className='character__card' key={eachCharacter.id}>
      <CharacterCard eachCharacter={eachCharacter} />
    </li>
  ));
  //add an error msg in case the filter returns 0
  const filterErrorMsg = () => {
    return (
      <div className='character__error'>
        <p className='character__error-msg'>Sorry, we weren't able to find what you're looking for :(</p>
        <p className='character__error-msg'>Try again!</p>
      </div>
    );
  };
  return <ul className='character__list'>{characters.length === 0 ? filterErrorMsg() : charactersLi}</ul>;
};

export default CharactersList;
