// Hooks
import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation } from 'react-router-dom';
// Styles
import '../styles/App.scss';
// services and Components
import CallToApi from '../services/api';
import ls from '../services/localStorage';
import Header from './Header';
import CharactersList from './CharactersList';
import FilterByName from './Filters';
import CharacterDetail from './CharacterDetail';
import Footer from './Footer';

function App() {
  // State variables
  const [characters, setCharacters] = useState(ls.get('characters', []));
  const [filters, setFilters] = useState({ name: '', origin: '', species: '', status: '' });

  const [isLoading, setIsLoading] = useState(false);

  // useEffect: use localStorage first to prevent too many petitions to API
  useEffect(() => {
    if (ls.get('characters', null) === null) {
      setIsLoading(true);
      CallToApi().then((cleanData) => {
        setCharacters(cleanData);
        ls.set('characters', cleanData);
        setIsLoading(false);
      });
    }
  }, []);

  //functions
  const handleFilter = (name, value) => {
    //setFilterName(value);
    const clonedFilters = { ...filters, [name]: value };
    setFilters(clonedFilters);
  };

  // filter name, species and origin
  const filteredCharacters = characters
    .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(filters.name.toLowerCase()))
    .filter((eachCharacter) => eachCharacter.species.toLowerCase().includes(filters.species.toLowerCase()))
    .filter((eachCharacter) => eachCharacter.origin.toLowerCase().includes(filters.origin.toLowerCase()));

  // Create array with species to use in select form
  const species = characters.map((eachCharacter) => eachCharacter.species);
  // Clean array from duplicates
  const uniqueSpecies = [...new Set(species)];

  // Create array with origin planets to use in select form
  const origin = characters.map((eachCharacter) => eachCharacter.origin);
  // Clean array from duplicates
  const uniqueOrigin = [...new Set(origin)];

  // find dinamic routes of every character
  const { pathname } = useLocation();
  const routeData = matchPath('/character/:characterId', pathname);
  const characterId = routeData?.params.characterId;
  const findCharacter = characters.find((eachCharacter) => eachCharacter.id === parseInt(characterId));

  return (
    <div className='root'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main className='main'>
                <FilterByName
                  handleFilter={handleFilter}
                  filters={filters}
                  uniqueSpecies={uniqueSpecies}
                  uniqueOrigin={uniqueOrigin}
                />
                <section className='characters'>
                  <CharactersList characters={filteredCharacters} isLoading={isLoading} />
                </section>
              </main>
            </>
          }
        />
        <Route path='/character/:characterId' element={<CharacterDetail findCharacter={findCharacter} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
