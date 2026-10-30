import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import styles from "./ArticleList.module.css";

export default function ArticleList({ articles }) {
  const tag = useSelector((state) => state.filter.tag);
  const visible =
    tag === "Все" ? articles : articles.filter((article) => article.tag === tag);

  if (visible.length === 0) {
    return <p className={styles.empty}>По тегу «{tag}» статей нет.</p>;
  }

  return (
    <div className={styles.list}>
      {visible.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tag: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
