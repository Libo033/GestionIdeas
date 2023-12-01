import React, { Fragment } from "react";
import styles from "./Components.module.css";
import { IKanbanItem } from "@/libs/interfaces";
import KanbanItem from "./KanbanItem";

const KanbanBoard: React.FC<{ content: IKanbanItem[] }> = (props) => {
  return (
    <div className={styles.KanbanBoard}>
      <div className={styles.KanbanBoard_head}>
        <p>TO DO</p>
        <p>DOING</p>
        <p>DONE</p>
      </div>
      <div className={styles.KanbanBoard_itemsContainer}>
        <div className={styles.KanbanBoard_items}>
          {props.content.map((item) => (
            <Fragment key={item._id}>
              {item.status === "to do" && (
                <KanbanItem {...item} />
              )}
            </Fragment>
          ))}
        </div>
        <div className={styles.KanbanBoard_items}>
          {props.content.map((item) => (
            <Fragment key={item._id}>
              {item.status === "doing" && (
                <KanbanItem {...item} />
              )}
            </Fragment>
          ))}
        </div>
        <div className={styles.KanbanBoard_items}>
          {props.content.map((item) => (
            <Fragment key={item._id}>
              {item.status === "done" && (
                <KanbanItem {...item} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
