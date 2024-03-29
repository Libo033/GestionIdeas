import React, { useContext, useState } from "react";
import styles from "./Components.module.css";
import {
  ClickAwayListener,
  Tooltip,
  TooltipProps,
  styled,
  tooltipClasses,
} from "@mui/material";
import Image from "next/image";
import { IKanbanItemComponent } from "@/libs/interfaces";
import { KanbanBoardContext } from "@/context/KanbanBoardContext";

const ButtonTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    padding: 0,
  },
}));

const KanbanItemClickeable = (
  idItem: string,
  status: "to do" | "doing" | "done",
  idKanban: string
) => {
  const { handleMoveBack, handleMoveNext, handleDeleteItem } =
    useContext(KanbanBoardContext);

  return (
    <div className={styles.KanbanItemClickeable}>
      {handleMoveNext && status === "to do" && (
        <p
          onClick={() => handleMoveNext(idKanban, idItem)}
          className={styles.KanbanItemClickeable_button}
        >
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
          <p
            onClick={() => handleMoveBack(idKanban, idItem)}
            className={styles.KanbanItemClickeable_button}
          >
            <Image
              src={"/img/left_arrow.svg"}
              alt="edit"
              width={18}
              height={18}
            />
            BACK
          </p>
          <p
            onClick={() => handleMoveNext(idKanban, idItem)}
            className={styles.KanbanItemClickeable_button}
          >
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
        <p
          onClick={() => handleMoveBack(idKanban, idItem)}
          className={styles.KanbanItemClickeable_button}
        >
          <Image
            src={"/img/left_arrow.svg"}
            alt="edit"
            width={18}
            height={18}
          />
          BACK
        </p>
      )}
      {handleDeleteItem && (
        <p
          onClick={() => handleDeleteItem(idKanban, idItem)}
          className={styles.KanbanItemClickeable_deleteButton}
        >
          <Image src={"/img/delete.svg"} alt="thrash" width={18} height={18} />
          ELIMINAR
        </p>
      )}
    </div>
  );
};

const KanbanItem: React.FC<IKanbanItemComponent> = ({ item, idKanban }) => {
  const [tooltip, setTooltip] = useState<boolean>(false);

  return (
    <ClickAwayListener onClickAway={() => setTooltip(false)}>
      <div>
        <ButtonTooltip
          title={KanbanItemClickeable(item._id, item.status, idKanban)}
          PopperProps={{
            disablePortal: true,
          }}
          open={tooltip}
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <div onClick={() => setTooltip(true)} className={styles.KanbanItem}>
            <p>{item.data}</p>
          </div>
        </ButtonTooltip>
      </div>
    </ClickAwayListener>
  );
};

export default KanbanItem;
