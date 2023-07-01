// Hooks
import { useEffect, useState } from 'react';
// Styles
import '../styles/App.scss';
// services and Components
import CallToApi from '../services/api';
import ls from '../services/localStorage';
import Header from './Header';
import CharactersList from './CharactersList';

function App() {
  // State variables
  const [characters, setCharacters] = useState(ls.get('characters', []));

  // useEffect: use localStorage first to prevent too many petitions to API
  useEffect(() => {
    if (ls.get('characters', null) === null){
      CallToApi().then((cleanData) => {
        setCharacters(cleanData);
        ls.set('characters', cleanData);
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <form className='form__filter'>
          <input type='text' name='name__filter' placeholder='Search by name' />
        </form>
        <section className='characters'>
          <CharactersList characters={characters}/>
        </section>
      </main>
    </>
  );
}

export default App;
