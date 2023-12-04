import React, { useContext } from "react";
import styles from "./Components.module.css";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import { IKanbanItemComponent } from "@/libs/interfaces";
import { KanbanBoardContext } from "@/context/KanbanBoardContext";

const KanbanItemClickeable = (
  idItem: string,
  status: "to do" | "doing" | "done",
  idKanban: string
) => {
  const { handleMoveBack, handleMoveNext, handleDeleteItem } =
    useContext(KanbanBoardContext);

  const callHandlerDel = () => {
    if (handleDeleteItem) {
      handleDeleteItem(idKanban, idItem);
    }
  };

  return (
    <div className={styles.KanbanItemClickeable}>
      {handleMoveNext && status === "to do" && (
        <p className={styles.KanbanItemClickeable_button}>
          <Image
            src={"/img/right_arrow.svg"}
            alt="edit"
            width={18}
            height={18}
          />
          NEXT
        </p>
      )}
      {handleMoveBack && handleMoveNext && status === "doing" && (
        <>
          <p className={styles.KanbanItemClickeable_button}>
            <Image
              src={"/img/left_arrow.svg"}
              alt="edit"
              width={18}
              height={18}
            />
            BACK
          </p>
          <p className={styles.KanbanItemClickeable_button}>
            <Image
              src={"/img/right_arrow.svg"}
              alt="edit"
              width={18}
              height={18}
            />
            NEXT
          </p>
        </>
      )}
      {handleMoveBack && status === "done" && (
        <p className={styles.KanbanItemClickeable_button}>
          <Image
            src={"/img/left_arrow.svg"}
            alt="edit"
            width={18}
            height={18}
          />
          BACK
        </p>
      )}
      <p className={styles.KanbanItemClickeable_button}>
        <Image src={"/img/edit.svg"} alt="edit" width={18} height={18} />
        EDIT
      </p>
      <p
        onClick={() => callHandlerDel()}
        className={styles.KanbanItemClickeable_deleteButton}
      >
        <Image src={"/img/delete.svg"} alt="thrash" width={18} height={18} />
        DELETE
      </p>
    </div>
  );
};

const KanbanItem: React.FC<IKanbanItemComponent> = ({ item, idKanban }) => {
  return (
    <Tooltip
      title={KanbanItemClickeable(item._id, item.status, idKanban)}
      arrow
    >
      <div className={styles.KanbanItem}>
        <p>{item.data}</p>
      </div>
    </Tooltip>
  );
};

export default KanbanItem;
