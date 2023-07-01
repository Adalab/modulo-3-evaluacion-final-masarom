// Hooks
import { useEffect, useState } from 'react';
// Styles
import '../styles/App.scss';
// services and Components
import CallToApi from '../services/api';
import ls from '../services/localStorage';
import Header from './Header';
import CharactersList from './CharactersList';
import FilterByName from './Filters';

function App() {
  // State variables
  const [characters, setCharacters] = useState(ls.get('characters', []));
  const [filterName, setFilterName] = useState('');

  // useEffect: use localStorage first to prevent too many petitions to API
  useEffect(() => {
    if (ls.get('characters', null) === null){
      CallToApi().then((cleanData) => {
        setCharacters(cleanData);
        ls.set('characters', cleanData);
      });
    }
  }, []);

  //functions
  const handleFilter = (value) => {
    setFilterName(value);
  }

  // function to filter name

  const filteredCharacters = characters.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className='main'>
        <FilterByName filterName={filterName} handleFilter={handleFilter} />
        <section className='characters'>
          <CharactersList characters={filteredCharacters} />
        </section>
      </main>
    </>
  );
}

export default App;
