import React from 'react';
import { Item } from '../../types/TodoList';

type TodoItem = {
  item: Item;
};

function TodoItem({ item }: TodoItem) {
  return <div></div>;
}

export default TodoItem;
