import '../styles/layout/SectionCharacters.scss';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <>
      <img
        className='character__card--image'
        src={eachCharacter.image}
        alt={`Foto de ${eachCharacter.name}`}
        title={`Foto de ${eachCharacter.name}`}
      />
      <h3 className='character__card--name'>{eachCharacter.name}</h3>
      <p className='character__card--species'>{eachCharacter.species}</p>
    </>
  );
};

export default CharacterCard;
