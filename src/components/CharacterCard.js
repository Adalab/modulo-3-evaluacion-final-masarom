import { Link } from 'react-router-dom';
import '../styles/layout/SectionCharacters.scss';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <>
      <Link to={'character/' + eachCharacter.id} className='character__card--link'>
        <img
          className='character__card--image'
          src={eachCharacter.image}
          alt={`Foto de ${eachCharacter.name}`}
          title={`Foto de ${eachCharacter.name}`}
        />
        <h3 className='character__card--name'>{eachCharacter.name}</h3>
        <div className='character__card--container'>
          <span className='character__card--species'>{eachCharacter.species}</span>
          <span className="character__card--status"><i className={eachCharacter.status === 'Dead' ? 'fa-solid fa-skull-crossbones' : null}></i></span>
        </div>
      </Link>
    </>
  );
};

export default CharacterCard;
