import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./CommentInput.module.css";

export default function CommentInput({
  placeholder = "Напишите комментарий...",
  onChange,
}) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    const next = event.target.value;
    setValue(next);
    onChange?.(next);
  }

  return (
    <textarea
      className={styles.field}
      placeholder={placeholder}
      value={value}
      rows={3}
      onChange={handleChange}
    />
  );
}

CommentInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
