import React, { useState } from 'react';
import './style.css';
import { FaPlusSquare } from '@react-icons/all-files/fa/FaPlusSquare';
import ToDo from './Todo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  const inputChange = (e) => {
    setTodoItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempTodoList = [...todos];

    if (isTodoItemValid()) {
      tempTodoList.unshift({ text: todoItem, completed: false });
      setTodos(tempTodoList);
    }
  };

  const isTodoItemValid = () => {
    let tempTodoTextArray = todos.map((todoObj) => todoObj.text);

    return todoItem !== '' && !tempTodoTextArray.includes(todoItem);
  };

  const updateTodo = (indexItem) => {
    let todosTemp = [...todos];

    todosTemp = todosTemp.map((todoItem, index) => {
      if (index === indexItem) {
        return { ...todoItem, completed: !todoItem.completed };
      }
      return todoItem;
    });

    setTodos(todosTemp);
  };

  const deleteTodo = (indexItem) => {
    let todosTemp = [...todos];

    todosTemp.splice(indexItem, 1);

    setTodos(todosTemp);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form className="new-todo-group" onSubmit={handleSubmit}>
        <input
          id="todo-input"
          placeholder="Enter your new Todo"
          onChange={inputChange}
          value={todoItem}
        />
        <FaPlusSquare size="22" onClick={handleSubmit} />
      </form>

      {todos.map((todoItem, indexItem) => (
        <ToDo
          key={`${todoItem}-${indexItem}`}
          todoItem={todoItem}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          indexItem={indexItem}
        />
      ))}
    </div>
  );
};

export default App;
