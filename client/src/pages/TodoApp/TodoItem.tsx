import React from "react";
import { Link } from "react-router-dom";

import { Item } from "../../types/TodoList";

type TodoItem = {
  item: Item;
  handleClick: (id: string) => React.MouseEventHandler;
};

function TodoItem({ item, handleClick }: TodoItem) {
  return (
    <Link to={item.id} onClick={handleClick(item.id)}>
      <div>title: {item.title}</div>
    </Link>
  );
}

export default TodoItem;
