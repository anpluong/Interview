import React from "react";
import "./Todo.css";
import { MdCheckBox } from "@react-icons/all-files/md/MdCheckBox";
import { MdCheckBoxOutlineBlank } from "@react-icons/all-files/md/MdCheckBoxOutlineBlank";

export default function ToDo({ todoItem, updateTodo, deleteTodo, indexItem }) {
  const checkBox = (
    <div className='completed-check'>
      {todoItem.completed ? (
        <MdCheckBox size='22px' onClick={() => updateTodo(indexItem)} />
      ) : (
        <MdCheckBoxOutlineBlank
          size='22px'
          onClick={() => updateTodo(indexItem)}
        />
      )}
    </div>
  );

  return (
    <div className='todo'>
      {checkBox}
      <div className='text'>{todoItem.text}</div>
      <button type='button' onClick={() => deleteTodo(indexItem)}>x</button>      
    </div>
  );
}
