import CharacterCard from './CharacterCard';

const CharactersList = ({ characters }) => {
  const charactersLi = characters.map((eachCharacter) => (
    <li className='character__card' key={eachCharacter.id}>
      <CharacterCard eachCharacter={eachCharacter} />
    </li>
  ));

  return <ul>{charactersLi}</ul>;
};

export default CharactersList;
