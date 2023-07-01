import CharacterCard from './CharacterCard';

const CharactersList = ({ characters }) => {
  const charactersLi = characters.map((eachCharacter) => (
    <li className='character__card' key={eachCharacter.id}>
      <CharacterCard eachCharacter={eachCharacter} />
    </li>
  ));console.log(characters);
  return <ul className='character__list'>{charactersLi}</ul>;
  
};

export default CharactersList;
