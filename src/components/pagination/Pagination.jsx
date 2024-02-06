import styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, lastPage, goToPreviousPage, goToNextPage }) => {
  const handlePrevPg = (ev) => {
    ev.preventDefault();
    return goToPreviousPage();
  };

  const handleNextPg = (ev) => {
    ev.preventDefault();
    return goToNextPage();
  };

  return (
    <form className={styles.pagination}>
      <button
        className={styles.paginationBtn}
        name='prev'
        onClick={handlePrevPg}
      >
        Prev
      </button>
      <span className={styles.paginationText}>Page {currentPage} of {lastPage}</span>
      <button
        className={styles.paginationBtn}
        name='next'
        onClick={handleNextPg}
      >
        Next
      </button>
    </form>
  );
};

export default Pagination;
