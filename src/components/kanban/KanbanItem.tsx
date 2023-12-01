import React from "react";
import styles from "./Components.module.css";

const KanbanItem: React.FC<{ text: string }> = (props) => {
  return (
    <div className={styles.KanbanItem}>
      <p>{props.text}</p>
    </div>
  );
};

export default KanbanItem;
