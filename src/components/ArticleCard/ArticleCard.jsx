import PropTypes from "prop-types";
import LikeButton from "../LikeButton/LikeButton.jsx";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({ title, category, author, image, likes }) {
  return (
    <article className={styles.card}>
      <div className={styles.cover}>
        {image ? <img src={image} alt="" /> : null}
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{category}</p>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.meta}>
          <span className={styles.author}>
            <span className={styles.avatar} aria-hidden="true" />
            {author}
          </span>
          <LikeButton initialCount={likes} />
        </div>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
  likes: PropTypes.number.isRequired,
};
