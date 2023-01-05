import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import TodoList from "./TodoList";
import TodoDetail from "./TodoDetail";
import { Item } from "../../types/TodoList";
import TodoEdit from "./TodoEdit";

const items: Item[] = [
  {
    title: "hi1",
    content: "hello1",
    id: "z3FGrcRL55qDCFnP4KRtn1",
    createdAt: "2022-07-24T14:15:55.537Z",
    updatedAt: "2022-07-24T14:15:55.537Z",
  },
  {
    title: "hi2",
    content: "hello2",
    id: "z3FGrcRL55qDCFnP4KRtn2",
    createdAt: "2022-07-24T14:15:55.537Z",
    updatedAt: "2022-07-24T14:15:55.537Z",
  },
];

function TodoApp() {
  const [selectedId, setSelectedId] = useState("");

  const handleItemClick = (id: string) => (e: React.MouseEvent) => {
    console.log("click");
    setSelectedId(id);
  };

  const selectedItem = items.find((item) => item.id === selectedId)!;

  return (
    <>
      <TodoList handleClick={handleItemClick} items={items} />
      <Routes>
        <Route
          path="/"
          element={<div>리스트에서 아이템을 선택해주세요.</div>}
        />
        <Route path=":id" element={<TodoDetail item={selectedItem} />} />
        <Route path=":id/edit" element={<TodoEdit item={selectedItem} />} />
      </Routes>
    </>
  );
}

export default TodoApp;
