import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { onDragEnd } from "./utils";
import React, { Children } from "react";

const DnDContextComponent = ({ columns, setColumns }) => {
  <DragDropContext
    onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
  >
    {Object.entries(columns).map(([id, column]) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          key={id}
        >
          <h2>{column.name}</h2>
          <div style={{ margin: 8 }}>{Children}</div>
        </div>
      );
    })}
  </DragDropContext>;
};
export default DnDContextComponent;
