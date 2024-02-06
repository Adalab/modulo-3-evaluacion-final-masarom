import styles from './Filters.module.scss';

const FilterByName = ({handleFilter, filters, uniqueSpecies, uniqueOrigin }) => {
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
    <form className={styles.formFilter} onSubmit={handleOnSubmit}>
      <input
        type='text'
        className={styles.formFilterName}
        name='name'
        placeholder='Search by name'
        value={filters.name}
        onInput={handleFilters}
      />
      <select
        className={styles.formFilterSpecies}
        name='species'
        id='species'
        defaultValue='default'
        onChange={handleFilters}
      >
        <option hidden disabled value='default'>
          Search by species
        </option>
        <option value="">All species</option>
        {renderSpeciesSelect()}
      </select>
      <select
        className={styles.formFilterOrigin}
        name='origin'
        id='origin'
        defaultValue='default'
        onChange={handleFilters}
      >
        <option hidden disabled value='default'>
          Search by origin
        </option>
        <option value="">All origins</option>
        {renderOriginSelect()}
      </select>
    </form>
  );
};

export default FilterByName;
