import React, { FormEvent, useContext } from "react";
import styles from "./Components.module.css";
import { IItemsHandler } from "@/libs/interfaces";
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { KanbanBoardContext } from "@/context/KanbanBoardContext";

const ItemsHandler: React.FC<IItemsHandler> = (props) => {
  const router: AppRouterInstance = useRouter();
  const { handleCreateItem: newItem } = useContext(KanbanBoardContext);

  return (
    <div className={styles.ItemsHandler}>
      <form
        onSubmit={(Event: FormEvent) =>
          props.idKanban && newItem && newItem(Event, router, props.idKanban)
        }
        className={styles.ItemsHandler_form}
      >
        <div className={styles.ItemsHandler_textField}>
          <TextField
            id="item_handler_text"
            InputLabelProps={{ shrink: true }}
            label="TEXT"
            variant="filled"
            fullWidth
            autoComplete="off"
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
