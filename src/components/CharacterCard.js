const CharacterCard = ({characters}) => {
  return (
    <>
      <img src='/' alt={`Foto de ${characters.name}`} />
      <h3>Nombre</h3>
      <p>Especie</p>
    </>
  );
};

export default CharacterCard;
