import React from 'react';
import './Todo.css';
import { MdCheckBox } from '@react-icons/all-files/md/MdCheckBox';
import { MdCheckBoxOutlineBlank } from '@react-icons/all-files/md/MdCheckBoxOutlineBlank';

export default function ToDo({ todoItem, updateTodo, indexItem }) {
  return (
    <div className="todo">
      <div className="completed-check">
        {todoItem.completed ? (
          <MdCheckBox
            size="22px"
            onClick={() => updateTodo(indexItem)}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            size="22px"
            onClick={() => updateTodo(indexItem)}
          />
        )}
      </div>
      <div className="text">{todoItem.text}</div>
    </div>
  );
}
