import React, { useState } from "react";
import { useMutation } from "react-query";

import TodoApi from "../../services/TodoApi";
import { Item } from "../../types/TodoList";
import { getFormData } from "../../utils";
import storage from "../../utils/storage";

function TodoEdit({ item }: { item: Item }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { mutate } = useMutation(TodoApi.updateTodo, {
    onMutate: (data) => {
      addItem(data);
    },
  });

  const addItem = (item: Item) => {
    const todos: Item[] = storage.getItem("todos");

    const newTodos = todos.filter((todo) => todo.id !== item.id);
    newTodos.push(item);

    storage.setItem("todos", newTodos);
  };

  const handleTodoEditSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const { newTitle, newContent } = getFormData(e.target as HTMLFormElement);

    mutate({ ...item, title: newTitle, content: newContent });
  };

  const handleTodoChange: React.ChangeEventHandler = (e) => {
    const input = e.target as HTMLInputElement;

    if (input.name === "title") {
      setTitle(input.value);
    } else if (input.name === "content") {
      setContent(input.value);
    }
  };

  return (
    <form onSubmit={handleTodoEditSubmit}>
      <input
        onChange={handleTodoChange}
        name="title"
        value={item?.title || title}
      />
      <input
        onChange={handleTodoChange}
        name="content"
        value={item?.content || content}
      />
    </form>
  );
}

export default TodoEdit;
