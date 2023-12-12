import React from "react";
import styles from "./Components.module.css";

const KanbanCardPlaceholder = () => {
  return (
    <div className={styles.KanbanCardPlaceholder}>
      <div className={styles.KanbanCardPlaceholder_mid}>
        <div className={styles.KanbanCardPlaceholder_background}></div>
      </div>
    </div>
  );
};

export default KanbanCardPlaceholder;
