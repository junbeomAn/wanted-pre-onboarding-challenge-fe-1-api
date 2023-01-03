import React from 'react';

import { Item } from '../../types/TodoList';
import TodoItem from './TodoItem';

const items: Item[] = [
  {
    title: 'hi',
    content: 'hello',
    id: 'z3FGrcRL55qDCFnP4KRtn',
    createdAt: '2022-07-24T14:15:55.537Z',
    updatedAt: '2022-07-24T14:15:55.537Z'
  },
  {
    title: 'hi',
    content: 'hello',
    id: 'z3FGrcRL55qDCFnP4KRtn',
    createdAt: '2022-07-24T14:15:55.537Z',
    updatedAt: '2022-07-24T14:15:55.537Z'
  }
];

function TodoList() {
  return (
    <ul>
      {items.map(item => (
        <TodoItem item={item} />
      ))}
    </ul>
  );
}

export default TodoList;
