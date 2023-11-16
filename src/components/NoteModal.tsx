import { INoteModal } from "@/libs/interfaces";
import React from "react";
import styles from "./Components.module.css";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const NoteModal: React.FC<INoteModal> = (props) => {
  const handleEdit = (id: string) => {
    console.log(id);
  };

  const handleDelete = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.NoteModal}>
      <Image
        className={styles.NoteModal_close}
        onClick={() => props.setModal(false)}
        src={"/img/close.svg"}
        alt="close"
        width={30}
        height={30}
      />
      <Tooltip title={props.title} arrow TransitionComponent={Zoom}>
        <h2>
          {props.title.length > 36
            ? props.title.slice(0, 36) + "..."
            : props.title}
        </h2>
      </Tooltip>
      <p>{props.content}</p>
      <div className={styles.NoteModal_dateGroup}></div>
      <div className={styles.NoteModal_buttonGroup}>
        <button
          className={styles.NoteModal_edit}
          onClick={() => handleEdit(props._id)}
        >
          <Image src={"/img/edit.svg"} alt="edit" width={45} height={45} />
          EDIT
        </button>
        <button
          className={styles.NoteModal_delete}
          onClick={() => handleDelete(props._id)}
        >
          <Image src={"/img/delete.svg"} alt="trash" width={45} height={45} />
          DELETE
        </button>
      </div>
    </div>
  );
};

export default NoteModal;
