import '../styles/layout/Form.scss';

const FilterByName = ({ filterName, handleFilter, filters }) => {
  //handle input Name filter
  const handleFilters = (ev) => {
    ev.preventDefault();
    handleFilter(ev.target.name, ev.target.value);
  };

  // prevent send form with Enter
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  }

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
      <input
        type='text'
        name='species'
        className='form__filter--species'
        placeholder='Search by species'
        value={filters.species}
        onInput={handleFilters}
      />
      <input type='text' name='origin' className='form__filter--origin' placeholder='Search by origin' value={filters.origin} onInput={handleFilters} />
    </form>
  );
};

export default FilterByName;
