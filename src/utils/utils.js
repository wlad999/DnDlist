import { v4 as uuidv4 } from "uuid";

export const setItems = (columns) => {
  const columnsUser = JSON.stringify(columns);
  localStorage.setItem("columns", columnsUser);
};

export const getItems = () => {
  const columnsFromLocalStorege = localStorage.getItem("columns");
  const columns = JSON.parse(columnsFromLocalStorege);
  return columns;
};

const itemsFromBackend = [
  { id: uuidv4(), content: "First" },
  { id: uuidv4(), content: "Second" },
  { id: uuidv4(), content: "Third" },
  { id: uuidv4(), content: "Fourth" },
  { id: uuidv4(), content: "Fifth" },
  { id: uuidv4(), content: "Sixth" },
  { id: uuidv4(), content: "Seventh" },
];

const columnsFromBackend = {
  [uuidv4()]: { name: "Cash Offer", items: [] },
  [uuidv4()]: { name: "Finance", items: [] },
  [uuidv4()]: { name: "Lease", items: [] },
  [uuidv4()]: { name: "Other", items: itemsFromBackend },
};

export const setDefaultItem = () => {
  const savedItem = getItems();
  let defaultItems = savedItem ? savedItem : columnsFromBackend;
  return defaultItems;
};

export const onDragEnd = async (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: { ...destColumn, items: destItems },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: { ...column, items: copiedItems },
    });
  }
};
