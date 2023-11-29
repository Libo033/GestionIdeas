import React from "react";
import styles from "./Components.module.css";
import { IKanban } from "@/libs/interfaces";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

const KanbanCard: React.FC<IKanban> = (props) => {
  const router: AppRouterInstance = useRouter();

  return (
    <article
      className={styles.KanbanCard}
      onClick={() => router.push(`/home/kanban/${props._id}`)}
    >
      {props.name.length > 21 ? (
        <Tooltip title={props.name} arrow TransitionComponent={Zoom}>
          <p>{props.name.slice(0, 21) + "..."}</p>
        </Tooltip>
      ) : (
        <p>{props.name}</p>
      )}
      <span>Created at {props.create_date}</span>
    </article>
  );
};

export default KanbanCard;
