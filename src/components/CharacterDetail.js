import { Link } from 'react-router-dom';
import '../styles/layout/SectionCharacterDetail.scss';

const CharacterDetail = ({ findCharacter }) => {
  if (findCharacter) {
    return (
      <>
        <section className='character__detail'>
          <article className='character__detail--container'>
            <img
              className='character__detail--image'
              src={findCharacter.image}
              alt={`Foto de ${findCharacter.name}`}
              title={`Foto de ${findCharacter.name}`}
            />
            <div className='character__detail--text'>
              <h3 className='character__detail--name'>{findCharacter.name}</h3>
              <p className='character__detail--species'>Species: {findCharacter.species}</p>
              <p className='character__detail--origin'>Origin: {findCharacter.origin}</p>
              <div className='container'>
                <span className='character__detail--episode'>{`Number of episodes: ${findCharacter.episode}`}</span>
                <span className='character__detail--status'>{`Status: ${findCharacter.status}`}</span>
              </div>
            </div>
          </article>
          <div className='go__back'>
            <Link to='/' className='go__back--link'>
              Go back
            </Link>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <div className='character__detail--error'>
        <p className='character__detail--error-msg'>
          Sorry, the character you're looking for doesn't seem to exist in our database.
        </p>
        <div className='go__back'>
          <Link to='/' className='go__back--link'>
            Go back
          </Link>
        </div>
      </div>
    );
  }
};

export default CharacterDetail;
