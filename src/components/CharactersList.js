import CharacterCard from "./CharacterCard";

const CharactersList = ({characters}) => {
    console.log(characters);
    const charactersLi = characters.map((eachCharacter) => {
        
    })

  return (
    <ul>
      <li>
        <CharacterCard characters={characters} />
      </li>
    </ul>
  );
}

export default CharactersList;