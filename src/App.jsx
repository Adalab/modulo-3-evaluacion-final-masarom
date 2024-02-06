// Hooks
import { useEffect, useState } from "react";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
// Styles
import "./App.scss";
// services and Components
import CallToApi from "./services/api";
import ls from "./services/localStorage";
import Hero from "./components/hero/Hero";
import CharactersList from "./components/charactersList/CharactersList";
import FilterByName from "./components/filters/Filters";
import Pagination from "./components/pagination/Pagination";
import CharacterDetail from "./components/characterDetail/CharacterDetail";
import Footer from "./components/footer/Footer";

function App() {
  // State variables
  /* const [characters, setCharacters] = useState(ls.get('characters', [])); */
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    origin: "",
    species: "",
    status: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  // useEffect: use localStorage first to prevent too many petitions to API
  // UPDATE: leave it COMMENTED as I currently can't change the LS when changing API page

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { cleanData, pagesCount } = await CallToApi(currentPage);
        setCharacters(cleanData);
        setLastPage(pagesCount);
        /* ls.set('characters', cleanData); */
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data: " + error);
      }
    };
    fetchData();
    /*if (ls.get("characters", null) === null) {
       CallToApi(currentPage).then((cleanData) => {
        setCharacters(cleanData);
        /* ls.set('characters', cleanData);
        setIsLoading(false); */
  }, [currentPage]);

  // pagination
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if(currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  //functions
  const handleFilter = (name, value) => {
    const clonedFilters = { ...filters, [name]: value };
    setFilters(clonedFilters);
  };

  // filter name, species and origin
  const filteredCharacters = characters
    .filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(filters.name.toLowerCase())
    )
    .filter((eachCharacter) =>
      eachCharacter.species
        .toLowerCase()
        .includes(filters.species.toLowerCase())
    )
    .filter((eachCharacter) =>
      eachCharacter.origin.toLowerCase().includes(filters.origin.toLowerCase())
    );

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
  const routeData = matchPath("/character/:characterId", pathname);
  const characterId = routeData?.params.characterId;
  const findCharacter = characters.find(
    (eachCharacter) => eachCharacter.id === parseInt(characterId)
  );

  return (
    <div className='body'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <main className='main'>
                <Hero />
                <FilterByName
                  handleFilter={handleFilter}
                  filters={filters}
                  uniqueSpecies={uniqueSpecies}
                  uniqueOrigin={uniqueOrigin}
                />
                <Pagination currentPage={currentPage} lastPage={lastPage} goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} />
                <section className='characters'>
                  <CharactersList
                    characters={filteredCharacters}
                    isLoading={isLoading}
                    currentPage={currentPage}
                    goToPreviousPage={goToPreviousPage}
                    goToNextPage={goToNextPage}
                  />
                </section>
              </main>
            </>
          }
        />
        <Route
          path='/character/:characterId'
          element={<CharacterDetail findCharacter={findCharacter} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
