import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ children, onClick, variant = "primary" }) {
  return (
    <button type="button" className={styles[variant]} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary"]),
};
