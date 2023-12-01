import React from "react";
import styles from "./Components.module.css";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import { IKanbanItem } from "@/libs/interfaces";

const KanbanItemClickeable = (
  id: string,
  status: "to do" | "doing" | "done"
) => {
  return (
    <div className={styles.KanbanItemClickeable}>
      {status === "to do" && (
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
      {status === "doing" && (
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
      {status === "done" && (
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
      <p className={styles.KanbanItemClickeable_deleteButton}>
        <Image src={"/img/delete.svg"} alt="thrash" width={18} height={18} />
        DELETE
      </p>
    </div>
  );
};

const KanbanItem: React.FC<IKanbanItem> = (props) => {
  return (
    <Tooltip title={KanbanItemClickeable(props._id, props.status)} arrow>
      <div className={styles.KanbanItem}>
        <p>{props.data}</p>
      </div>
    </Tooltip>
  );
};

export default KanbanItem;
