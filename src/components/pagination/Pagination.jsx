import PropTypes from "prop-types";
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
        title="Previous page"
      >
        Previous
      </button>
      <span className={styles.paginationText}>Page {currentPage} of {lastPage}</span>
      <button
        className={styles.paginationBtn}
        name='next'
        onClick={handleNextPg}
        title="Next page"
      >
        Next
      </button>
    </form>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired
}

export default Pagination;
