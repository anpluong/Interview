import React from 'react';
import './style.css';
import { useState } from 'react';
import { FaPlusSquare } from '@react-icons/all-files/fa/FaPlusSquare';
import ToDo from './Todo';

var App = () => {
  var [todos, setTodos] = useState([]);

  function sort(arr) {
    arr.sort(function (a, b) {
      return a.createTime - b.createTime;
    });
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div className="new-todo-group">
        <input
          id="todo-input"
          placeholder="Enter your new Todo"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              var newer = [
                ...todos,
                {
                  text: document.getElementById('todo-input').value,
                  createTime: new Date().getTime(),
                },
              ];
              sort(newer);
              setTodos([...newer]);
              document.getElementById('todo-input').value = null;
            }
          }}
        />
        <FaPlusSquare
          size="22px"
          onClick={() => {
            var newer = [
              ...todos,
              {
                text: document.getElementById('todo-input').value,
                createTime: new Date().getTime(),
              },
            ];
            sort(newer);
            setTodos([...newer]);
            document.getElementById('todo-input').value = null;
            console.log(todos);
          }}
        />
      </div>
      {todos.map((t, i) => (
        <ToDo
          todo={t}
          updateTodo={(todo) => {
            // Updates the current todo in the list.
            const updatedTodos = [];
            todos.forEach((t, curr) => {
              if (i === curr) {
                updatedTodos.push(todo);
              } else {
                updatedTodos.push(todos[curr]);
              }
            });
            setTodos(updatedTodos);
          }}
        />
      ))}
    </div>
  );
};

export default App;
