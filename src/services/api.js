const CallToApi = () => {
    const url = 'https://rickandmortyapi.com/api/character';
  return (
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
      // map the fetch response to get only the data needed
      const cleanData = data.results.map((eachData) => {
        return {
          id: eachData.id,
          image: eachData.image,
          name: eachData.name,
          species: eachData.species,
          origin: eachData.origin.name,
          episode: eachData.episode.length,
          status: eachData.status
        }
    })
    return cleanData;
      })
  );
}

export default CallToApi;