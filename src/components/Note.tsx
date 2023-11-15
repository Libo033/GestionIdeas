import { INote } from "@/libs/interfaces";
import React from "react";
import styles from "./Components.module.css";

const Note: React.FC<INote> = (props) => {
  return (
    <article className={styles.Note}>
      <div className={styles.Note_titleContainer}>
        <p>
          {props.title.length > 33
            ? props.title.slice(0, 33) + "..."
            : props.title}
        </p>
      </div>
      <div className={styles.Note_contentContainer}>
        <p>{props.content.length > 90 ? props.content.slice(0, 117) + "..." : props.content}</p>
      </div>
      <div className={styles.Note_createdAtContainer}>
        <span className={styles.Note_createdAt}>
          Created at {props.create_date.slice(0, props.create_date.length - 3)}
        </span>
      </div>
    </article>
  );
};

export default Note;
