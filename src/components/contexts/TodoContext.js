import { createContext, useContext } from 'react';

export const TodoContext = useContext({
  todo: [
    {
      id: 1,
      todo: 'first todo',
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTdo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
