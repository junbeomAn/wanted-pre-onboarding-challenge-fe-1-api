import React from "react";
import { Item } from "../../types/TodoList";

import TodoItem from "./TodoItem";

function TodoList({
  handleClick,
  items,
}: {
  handleClick: (id: string) => React.MouseEventHandler;
  items: Item[];
}) {
  return (
    <ul>
      {items.map((item, i) => (
        <TodoItem item={item} key={i} handleClick={handleClick} />
      ))}
    </ul>
  );
}

export default TodoList;
