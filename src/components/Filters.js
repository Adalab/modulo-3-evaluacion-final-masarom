const FilterByName = ({ filterName, handleFilter }) => {
  //handle input Name filter
  const handleFilterName = (ev) => {
    ev.preventDefault();
    handleFilter(ev.target.value);
  };

  // prevent send form with Enter
  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <form className='form__filter' onSubmit={handleOnSubmit}>
      <input type='text' name='name__filter' placeholder='Search by name' value={filterName} onInput={handleFilterName} />
    </form>
  );
};

export default FilterByName;
