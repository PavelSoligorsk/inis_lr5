import { useState } from "react";
import { Provider } from "react-redux";
import ArticleList from "./components/ArticleList/ArticleList.jsx";
import Button from "./components/Button/Button.jsx";
import CommentInput from "./components/CommentInput/CommentInput.jsx";
import TagFilter from "./components/TagFilter/TagFilter.jsx";
import { store } from "./store/store.js";
import styles from "./App.module.css";

const articles = [
  {
    id: 1,
    tag: "Фронтенд",
    category: "Фронтенд",
    title: "Как дизайн-системы ускоряют масштабирование веб-приложений",
    author: "Алексей П.",
    likes: 42,
  },
  {
    id: 2,
    tag: "Компоненты",
    category: "Компоненты",
    title: "Зачем карточке отдельный компонент",
    author: "Марина К.",
    likes: 18,
  },
  {
    id: 3,
    tag: "Состояние",
    category: "Состояние",
    title: "Общий фильтр не живёт в карточке",
    author: "Илья С.",
    likes: 7,
  },
  {
    id: 4,
    tag: "Фронтенд",
    category: "Фронтенд",
    title: "Обложка как файл, а не как цвет",
    author: "Ольга В.",
    likes: 3,
  },
];

function Feed() {
  const [comment, setComment] = useState("");
  const [published, setPublished] = useState([]);
  const [formKey, setFormKey] = useState(0);

  function handlePublish() {
    const text = comment.trim();
    if (!text) {
      return;
    }
    setPublished((items) => [...items, text]);
    setComment("");
    setFormKey((key) => key + 1);
  }

  return (
    <main className={styles.page}>
      <section className={styles.frame}>
        <header className={styles.header}>
          <p>Блог</p>
          <h1>Лента статей</h1>
        </header>
        <TagFilter />
        <ArticleList articles={articles} />
        <CommentInput key={formKey} onChange={setComment} />
        <Button onClick={handlePublish}>Опубликовать</Button>
        {published.length > 0 && (
          <ul className={styles.comments}>
            {published.map((text, index) => (
              <li key={`${index}-${text}`}>{text}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Feed />
    </Provider>
  );
}
