import React, { useState } from "react";
import styles from "./Components.module.css";
import { IKanban } from "@/libs/interfaces";
import { ClickAwayListener, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import Link from "next/link";
import Image from "next/image";

const ToolTipOpt = (id: string) => {
  return (
    <div className={styles.ToolTipOpt}>
      <Link className={styles.ToolTipOpt_optEdit} href={`/home/kanban/${id}`}>
        <Image src={"/img/join.svg"} alt="editar" width={18} height={18} />
        ENTRAR
      </Link>
      <Link
        className={styles.ToolTipOpt_optEdit}
        href={`/home/kanban/edit?id=${id}`}
      >
        <Image src={"/img/edit.svg"} alt="editar" width={18} height={18} />
        EDITAR
      </Link>
      <p className={styles.ToolTipOpt_optDel}>
        <Image src={"/img/delete.svg"} alt="editar" width={18} height={18} />
        ELIMINAR
      </p>
    </div>
  );
};

const KanbanCard: React.FC<IKanban> = (props) => {
  const [toggleToolTip, setToggleToolTip] = useState<boolean>(false);

  return (
    <ClickAwayListener onClickAway={() => setToggleToolTip(false)}>
      <div>
        <Tooltip
          title={ToolTipOpt(props._id)}
          open={toggleToolTip}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          PopperProps={{
            disablePortal: true,
          }}
          arrow
        >
          <article
            className={styles.KanbanCard}
            onClick={() => setToggleToolTip(true)}
          >
            {props.name.length > 21 ? (
              <Tooltip title={props.name} arrow TransitionComponent={Zoom}>
                <p>{props.name.slice(0, 21) + "..."}</p>
              </Tooltip>
            ) : (
              <p>{props.name}</p>
            )}
            <span>
              Creado el{" "}
              {props.create_date.slice(0, props.create_date.length - 3)}
            </span>
          </article>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default KanbanCard;
