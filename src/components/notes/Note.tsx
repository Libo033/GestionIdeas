import { INote } from "@/libs/interfaces";
import React, { useState } from "react";
import styles from "./Components.module.css";
import { Fade, Modal, Tooltip } from "@mui/material";
import NoteModal from "./NoteModal";
import Backdrop from "@mui/material/Backdrop";

const ToolTipNote = (expire: number) => {
  let expire_date: string = "Vence el " + new Date(expire).toLocaleString();

  return (
    <div>
      <p>{expire_date.slice(0, expire_date.indexOf(","))}</p>
    </div>
  );
};

const Note: React.FC<INote> = (props) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        closeAfterTransition={true}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={modal}>
          <div className={styles.Note_modal}>
            <NoteModal {...props} setModal={setModal} />
          </div>
        </Fade>
      </Modal>
      {props.expire_date !== 0 ? (
        <Tooltip
          sx={{ padding: "10px" }}
          title={ToolTipNote(props.expire_date)}
          disableInteractive
          arrow
        >
          <article onClick={() => setModal(true)} className={styles.Note}>
            <div className={styles.Note_titleContainer}>
              <p>{props.title}</p>
            </div>
            <div className={styles.Note_contentContainer}>
              <p>
                {props.content.length > 100
                  ? props.content.slice(0, 100) + "..."
                  : props.content}
              </p>
            </div>
            <div className={styles.Note_createdAtContainer}>
              <span className={styles.Note_createdAt}>
                Creada el{" "}
                {props.create_date.slice(0, props.create_date.length - 3)}
              </span>
            </div>
          </article>
        </Tooltip>
      ) : (
        <article onClick={() => setModal(true)} className={styles.Note}>
          <div className={styles.Note_titleContainer}>
            <p>{props.title}</p>
          </div>
          <div className={styles.Note_contentContainer}>
            <p>
              {props.content.length > 100
                ? props.content.slice(0, 100) + "..."
                : props.content}
            </p>
          </div>
          <div className={styles.Note_createdAtContainer}>
            <span className={styles.Note_createdAt}>
              Creada el{" "}
              {props.create_date.slice(0, props.create_date.length - 3)}
            </span>
          </div>
        </article>
      )}
    </>
  );
};

export default Note;
