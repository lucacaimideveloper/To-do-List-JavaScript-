import React, { useState } from "react";
import "./Card.style.css";

const Card = (props) => {
  const { todos, onToggle, onDelete, onSaveEdit } = props;
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");

  const onSave = () => {
    setEdit(false);

    onSaveEdit(todos.id, title);
  };

  const onInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <div
        className={
          todos.completed === true ? "done todoItem" : "undone todoItem"
        }>
        <p>{todos.title}</p>
        <button className="btn2" onClick={() => onToggle(todos.id)}>
          {todos.completed ? "done" : "undone"}
        </button>
        <button className="btn2" onClick={() => onDelete(todos.id)}>
          delete
        </button>
        {edit ? (
          <>
            <input onInput={onInput} type="tetx" />
            <button onClick={onSave}>save</button>
          </>
        ) : (
          <button className="btn2" onClick={() => setEdit(!edit)}>
            edit
          </button>
        )}
        {/**every time u see this.onClick is the action this.onDelete call back function */}
      </div>
    </>
  );
};

export default Card;
