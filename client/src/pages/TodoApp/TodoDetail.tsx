import React from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../types/TodoList";

function TodoDetail({ item }: { item: Item }) {
  const { id } = useParams();

  return (
    <div>
      {item.title}
      {item.content}
      {item.createdAt}
      {item.updatedAt}
    </div>
  );
}

export default TodoDetail;
