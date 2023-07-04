import '../styles/layout/Form.scss';

const FilterByName = ({ /* filterName */ handleFilter, filters, uniqueSpecies, uniqueOrigin }) => {
  //handle inputs filter
  const handleFilters = (ev) => {
    ev.preventDefault();
    handleFilter(ev.target.name, ev.target.value);
  };

  //render species select options
  const renderSpeciesSelect = () => {
    return uniqueSpecies.map((eachSpecies, i) => (
      <option key={i} value={eachSpecies}>
        {eachSpecies}
      </option>
    ));
  };

  // render origin select options
  const renderOriginSelect = () => {
    return uniqueOrigin.map((eachOrigin, i) => (
      <option key={i} value={eachOrigin}>
        {eachOrigin}
      </option>
    ));
  };

  // prevent send form with Enter
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className='form__filter' onSubmit={handleOnSubmit}>
      <input
        type='text'
        className='form__filter--name'
        name='name'
        placeholder='Search by name'
        value={filters.name}
        onInput={handleFilters}
      />
      <select
        className='form__filter--species'
        name='species'
        id='species'
        defaultValue='default'
        onChange={handleFilters}
      >
        <option hidden disabled value='default'>
          Search by species
        </option>
        {renderSpeciesSelect()}
      </select>
      {/* <input
        type='text'
        name='species'
        className='form__filter--species'
        placeholder='Search by species'
        value={filters.species}
        onInput={handleFilters}
      /> */}
      <select
        className='form__filter--species'
        name='origin'
        id='origin'
        defaultValue='default'
        onChange={handleFilters}
      >
        <option hidden disabled value='default'>
          Search by origin
        </option>
        {renderOriginSelect()}
      </select>
      {/* <input
        type='text'
        name='origin'
        className='form__filter--origin'
        placeholder='Search by origin'
        value={filters.origin}
        onInput={handleFilters}
      /> */}
    </form>
  );
};

export default FilterByName;
