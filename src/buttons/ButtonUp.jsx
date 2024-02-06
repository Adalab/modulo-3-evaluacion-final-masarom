import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./ButtonUp.module.scss";

const ButtonUp = () => {
  return (
    <Link to='/#hero' className={styles.buttonUpLink}>
      <FontAwesomeIcon icon={faChevronUp} inverse className={styles.buttonUp} title="Go up" />
    </Link>
  );
};

export default ButtonUp;
