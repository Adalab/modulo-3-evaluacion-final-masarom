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
  const [filterName, setFilterName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // useEffect: use localStorage first to prevent too many petitions to API
  useEffect(() => {
    if (ls.get('characters', null) === null) {
      setIsLoading(true)
      CallToApi().then((cleanData) => {
        setCharacters(cleanData);
        ls.set('characters', cleanData);
        setIsLoading(false);
      });
    }
  }, []);

  //functions
  const handleFilter = (value) => {
    setFilterName(value);
  };

  // function to filter name

  const filteredCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(filterName.toLowerCase())
  );

  // render error msg for filter by name
  

  // find dinamic routes of every character
  const { pathname } = useLocation();
  const routeData = matchPath('/character/:characterId', pathname);
  const characterId = routeData?.params.characterId;
  const findCharacter = characters.find((eachCharacter) => eachCharacter.id === parseInt(characterId));

  return (
    <div className='root'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <main className='main'>
                <FilterByName filterName={filterName} handleFilter={handleFilter} />
                <section className='characters'>
                  <CharactersList characters={filteredCharacters} isLoading={isLoading}/>
                </section>
              </main>
            </>
          }
        />
        <Route path='/character/:characterId' element={<CharacterDetail findCharacter={findCharacter} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
