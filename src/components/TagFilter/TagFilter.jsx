import { useDispatch, useSelector } from "react-redux";
import { setTag } from "../../store/filterSlice.js";
import styles from "./TagFilter.module.css";

const tags = ["Все", "Фронтенд", "Состояние", "Компоненты"];

export default function TagFilter() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.filter.tag);

  return (
    <div className={styles.row} role="group" aria-label="Фильтр по тегам">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={tag === active ? styles.active : styles.idle}
          onClick={() => dispatch(setTag(tag))}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
