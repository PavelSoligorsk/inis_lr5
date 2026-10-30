import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./LikeButton.module.css";

function Heart({ filled }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path
        d="M12 20.5s-6.4-4.1-8.9-7.7C1.2 10.2 1.6 6.9 4.2 5.5 6.3 4.4 8.5 5 12 8.2 15.5 5 17.7 4.4 19.8 5.5c2.6 1.4 3 4.7 1.1 7.3-2.5 3.6-8.9 7.7-8.9 7.7z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

Heart.propTypes = {
  filled: PropTypes.bool,
};

export default function LikeButton({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(true);
    setCount((value) => value + 1);
  }

  return (
    <button
      type="button"
      className={liked ? styles.liked : styles.idle}
      onClick={handleClick}
      aria-pressed={liked}
    >
      <Heart filled={liked} />
      <span>{count}</span>
    </button>
  );
}

LikeButton.propTypes = {
  initialCount: PropTypes.number,
};
