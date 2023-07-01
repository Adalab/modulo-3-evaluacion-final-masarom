const CharacterDetail = ({}) => {
  return (
    <>
      <section className='character__detail'>
        <img
          className='character__card--image'
          src={'eachCharacter.image'}
          alt={`Foto de ${'eachCharacter.name'}`}
          title={`Foto de ${'eachCharacter.name'}`}
        />
        <h3 className='character__card--name'>{'eachCharacter.name'}</h3>
        <p className='character__card--species'>{'eachCharacter.species'}</p>
        <p className='character__card--origin'>{'eachCharacter.origin'}</p>
        <div className='container'>
          <span className='character__card--episode'>{`Number of episodes: ${'eachCharacter.episode'}`}</span>
          <span>{`Status: ${'eachCharacter.status'}`}</span>
        </div>
      </section>
    </>
  );
};

export default CharacterDetail;
