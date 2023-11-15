import { INoteModal } from "@/libs/interfaces";
import React from "react";
import styles from "./Components.module.css";

const NoteModal: React.FC<INoteModal> = (props) => {
  const handleEdit = (id: string) => {
    console.log(id);
  };

  const handleDelete = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.NoteModal}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <div className={styles.NoteModal_dateGroup}></div>
      <div className={styles.NoteModal_buttonGroup}>
        <button
          className={styles.NoteModal_edit}
          onClick={() => handleEdit(props._id)}
        >
          EDIT
        </button>
        <button
          className={styles.NoteModal_delete}
          onClick={() => handleDelete(props._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default NoteModal;
