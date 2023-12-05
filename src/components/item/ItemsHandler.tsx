import React from "react";
import styles from "./Components.module.css";
import { IItemsHandler } from "@/libs/interfaces";
import { TextField } from "@mui/material";

const ItemsHandler: React.FC<IItemsHandler> = (props) => {
  return (
    <div className={styles.ItemsHandler}>
      <form className={styles.ItemsHandler_form}>
        <div className={styles.ItemsHandler_textField}>
          <TextField
            id="item_handler_text"
            InputLabelProps={{ shrink: true }}
            label="TEXT"
            variant="filled"
            fullWidth
            required
          />
        </div>
        <button type="submit" className={styles.ItemsHandler_submit}>
          {props.idItem ? "EDIT" : "CREATE"}
        </button>
      </form>
    </div>
  );
};

export default ItemsHandler;
