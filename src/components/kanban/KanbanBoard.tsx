import React from 'react';
import styles from './Components.module.css';
import { IKanbanItem } from '@/libs/interfaces';

const KanbanBoard: React.FC<{content: IKanbanItem[]}> = ( props ) => {

  return (
    <table className={styles.KanbanBoard}>
      <thead>
        <tr>
          <th>TO DO</th>
          <th>DOING</th>
          <th>DONE</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

export default KanbanBoard