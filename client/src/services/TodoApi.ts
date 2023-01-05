import Axios from "./base";
import { Item } from "../types/TodoList";

const getTodos = async () => {
  const { data } = await Axios.get<{ data: Item[] }>(`/api/todos`);
  console.log(data);

  return data.data;
};

const getTodoById = async (id: string) => {
  const { data } = await Axios.get<{ data: Item }>(`/api/todos/${id}`);
  console.log(data);
  return data.data;
};

const createTodo = async (title: string, content: string) => {
  const { data } = await Axios.post<{ data: Item }>(`/api/todos`);
  console.log(data);
  return data.data;
};

const updateTodo = async (item: Item) => {
  const { data } = await Axios.put(`/api/todos/${item.id}`);
  console.log(data);

  return data;
};

const deleteTodo = async (id: string) => {
  const { data } = await Axios.put(`/api/todos/${id}`);
  console.log(data);

  return data;
};

const TodoApi = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};

export default TodoApi;
