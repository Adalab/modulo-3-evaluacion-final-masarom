import { Link } from "react-router-dom";

const CharacterDetail = ({ findCharacter }) => {
  return (
    <>
      <section className='character__detail'>
        <img
          className='character__card--image'
          src={findCharacter.image}
          alt={`Foto de ${findCharacter.name}`}
          title={`Foto de ${findCharacter.name}`}
        />
        <h3 className='character__card--name'>{findCharacter.name}</h3>
        <p className='character__card--species'>{findCharacter.species}</p>
        <p className='character__card--origin'>{findCharacter.origin}</p>
        <div className='container'>
          <span className='character__card--episode'>{`Number of episodes: ${findCharacter.episode}`}</span>
          <span>{`Status: ${findCharacter.status}`}</span>
        </div>
      </section>
      <div className="go__back">
        <Link to='/'>Volver</Link>
      </div>
    </>
  );
};

export default CharacterDetail;
